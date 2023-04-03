import { PredicateV2, TermV2, FactV2, Biscuit, Block } from "./biscuit-proto.cjs";
import { base64urlEncode, base64urlDecode } from "./codecs.js"
import { verifySignature, appendBlock } from "./biscuit-crypto.js";
import { subtle } from "./subtle.js";

async function generateEd25519Key() : Promise<CryptoKeyPair> {    
  return (await subtle.generateKey({
    name: 'Ed25519',
  }, false, ['sign'])) as CryptoKeyPair;
}

//let token = "EpoCCq8BCgZjbGFpbXMKA3N1YgoLYmlzY3VpdE5hbWUKA2lzcwoJbXktaXNzdWVyCgNleHAKA2lhdAoDbmJmCgVoZWxsbxgDIg8KDQiACBIDGIEIEgMYgggiDwoNCIAIEgMYgwgSAxiECCISChAIgAgSAxiFCBIGIJf9gqEGIhIKEAiACBIDGIYIEgYg98SCoQYiEgoQCIAIEgMYhwgSBiDnqIKhBiIJCgcIAxIDGIgIOgIIABIkCAASIBM06OAxwXTYxlCWeVcc8Wg3YI-urnUpfRk0bDK0otcRGkDEwnryyv2WBod_rEedTF5X3h1wXxO0gnuLZUbZnJ7ndsGk-BAoztxXq4TAk5gBUTCoICJpTAjXQJVFdJhaaiMGIiIKIB9MOO8BqjybbmOHPn76FMr_vPc1S7sBvYCRw-5iApuG";

let token ="En0KEwoEZmFjdBgDIgkKBwiACBICEAESJAgAEiBA-QU5h2kyfE7F2hQW_f1m2fjUo9Ot91e52wbL2Xk9QBpAWxm0IWCI1cxZej1xbH1eCmMnMyOyAFqgtwUIMLXXE-t4VmXKSX2-1qFatrZKfZfNLXPYKQ7LyoGl1WhdKMbTCiIiCiCCVHASorI9hfimEh54ejyk_2nCzBfU4-DtZNOqTFlKFw==";
let pk  = "5b0f2f9d684c8f9b890638b03a771235df06a14a21937013cc7eceef59c73432";

var buffer = base64urlDecode(token);
var biscuit = Biscuit.decode(buffer);

let result = await verifySignature(pk, biscuit.authority);
console.log("Biscuit signature verification " + result);

var authority = Block.decode(biscuit.authority.block);

var fact = new FactV2();
fact.predicate = new PredicateV2();
fact.predicate.name = 2;

var term = new TermV2()
term.integer = 1;

fact.predicate.terms = new Array();
fact.predicate.terms.push(term);

var block = new Block();
block.factsV2 = new Array();
block.factsV2.push(fact);

block.version = 3;

let externalKey = await generateEd25519Key();
await appendBlock(biscuit, block, externalKey);

var newBiscuit = Biscuit.encode(biscuit).finish();

console.log("==== NEW ===")
console.log(base64urlEncode(newBiscuit));
console.log("==== NEW ===")

