import { Biscuit, Block, SignedBlock, PublicKey, ExternalSignature } from "./biscuit-proto.cjs";
import { hexToBytes } from "./codecs.js"
import * as ed from '@noble/ed25519';
import { subtle } from "./subtle.js";

function buildSignatureData(signedBlock: SignedBlock) : Uint8Array
{
    var sigData = new Uint8Array(signedBlock.block.length + 4 + signedBlock.nextKey.key.length);
    sigData.set(signedBlock.block);
    sigData[signedBlock.block.length] = 0;
    sigData[signedBlock.block.length + 1] = 0;
    sigData[signedBlock.block.length + 2] = 0;
    sigData[signedBlock.block.length + 3] = 0;
    sigData.set(signedBlock.nextKey.key, signedBlock.block.length + 4);

    return sigData;
}

export async function verifySignature(publicKeyHex: string, signedBlock: SignedBlock) : Promise<Boolean> {
    const alg = {name: 'Ed25519'};    
    let pkBytes = hexToBytes(publicKeyHex);

    const publicKey = await subtle.importKey('raw', pkBytes, alg, true /* extractable */, ['verify']);
    return await subtle.verify(alg, publicKey, signedBlock.signature, buildSignatureData(signedBlock))    
}

export async function appendBlock(biscuit: Biscuit, block: Block, externalKey? : CryptoKeyPair) : Promise<Biscuit> {
    var privateKey = ed.utils.randomPrivateKey();
    var publicKey = await ed.getPublicKeyAsync(privateKey);

    const alg = {name: 'Ed25519'};
    
    var signedBlock = new SignedBlock();
    signedBlock.block = Block.encode(block).finish();
    signedBlock.nextKey = new PublicKey();
    signedBlock.nextKey.algorithm = 0;
    signedBlock.nextKey.key = publicKey;


    if(externalKey !== undefined)
    {
        var extSigData = new Uint8Array(signedBlock.block.length + 4 + signedBlock.nextKey.key.length);
        extSigData.set(signedBlock.block);
        extSigData[signedBlock.block.length + 0] = 0; //alg
        extSigData[signedBlock.block.length + 1] = 0; //alg
        extSigData[signedBlock.block.length + 2] = 0; //alg
        extSigData[signedBlock.block.length + 3] = 0; //alg
        extSigData.set(signedBlock.nextKey.key, signedBlock.block.length + 4);
            
        signedBlock.externalSignature = new ExternalSignature();    
        signedBlock.externalSignature.signature = new Uint8Array(await subtle.sign(alg, externalKey.privateKey, extSigData));
        signedBlock.externalSignature.publicKey = new PublicKey();
        signedBlock.externalSignature.publicKey.algorithm = 0;
        signedBlock.externalSignature.publicKey.key = new Uint8Array(await subtle.exportKey("raw", externalKey.publicKey));

    }
    
    if(biscuit.proof.nextSecret !== null)
    {
        var sigBuffer = buildSignatureData(signedBlock);
        var nextSecret = biscuit.proof.nextSecret as Uint8Array;
        signedBlock.signature = await ed.signAsync(sigBuffer, nextSecret);
    }
    biscuit.blocks.push(signedBlock);
    biscuit.proof.nextSecret = privateKey;

    return biscuit;
}