import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Biscuit. */
export interface IBiscuit {

    /** Biscuit rootKeyId */
    rootKeyId?: (number|null);

    /** Biscuit authority */
    authority: ISignedBlock;

    /** Biscuit blocks */
    blocks?: (ISignedBlock[]|null);

    /** Biscuit proof */
    proof: IProof;
}

/** Represents a Biscuit. */
export class Biscuit implements IBiscuit {

    /**
     * Constructs a new Biscuit.
     * @param [p] Properties to set
     */
    constructor(p?: IBiscuit);

    /** Biscuit rootKeyId. */
    public rootKeyId: number;

    /** Biscuit authority. */
    public authority: ISignedBlock;

    /** Biscuit blocks. */
    public blocks: ISignedBlock[];

    /** Biscuit proof. */
    public proof: IProof;

    /**
     * Encodes the specified Biscuit message. Does not implicitly {@link Biscuit.verify|verify} messages.
     * @param m Biscuit message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBiscuit, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Biscuit message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Biscuit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Biscuit;

    /**
     * Gets the default type url for Biscuit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SignedBlock. */
export interface ISignedBlock {

    /** SignedBlock block */
    block: Uint8Array;

    /** SignedBlock nextKey */
    nextKey: IPublicKey;

    /** SignedBlock signature */
    signature: Uint8Array;

    /** SignedBlock externalSignature */
    externalSignature?: (IExternalSignature|null);
}

/** Represents a SignedBlock. */
export class SignedBlock implements ISignedBlock {

    /**
     * Constructs a new SignedBlock.
     * @param [p] Properties to set
     */
    constructor(p?: ISignedBlock);

    /** SignedBlock block. */
    public block: Uint8Array;

    /** SignedBlock nextKey. */
    public nextKey: IPublicKey;

    /** SignedBlock signature. */
    public signature: Uint8Array;

    /** SignedBlock externalSignature. */
    public externalSignature?: (IExternalSignature|null);

    /**
     * Encodes the specified SignedBlock message. Does not implicitly {@link SignedBlock.verify|verify} messages.
     * @param m SignedBlock message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISignedBlock, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignedBlock message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SignedBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SignedBlock;

    /**
     * Gets the default type url for SignedBlock
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ExternalSignature. */
export interface IExternalSignature {

    /** ExternalSignature signature */
    signature: Uint8Array;

    /** ExternalSignature publicKey */
    publicKey: IPublicKey;
}

/** Represents an ExternalSignature. */
export class ExternalSignature implements IExternalSignature {

    /**
     * Constructs a new ExternalSignature.
     * @param [p] Properties to set
     */
    constructor(p?: IExternalSignature);

    /** ExternalSignature signature. */
    public signature: Uint8Array;

    /** ExternalSignature publicKey. */
    public publicKey: IPublicKey;

    /**
     * Encodes the specified ExternalSignature message. Does not implicitly {@link ExternalSignature.verify|verify} messages.
     * @param m ExternalSignature message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExternalSignature, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExternalSignature message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExternalSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExternalSignature;

    /**
     * Gets the default type url for ExternalSignature
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PublicKey. */
export interface IPublicKey {

    /** PublicKey algorithm */
    algorithm: PublicKey.Algorithm;

    /** PublicKey key */
    key: Uint8Array;
}

/** Represents a PublicKey. */
export class PublicKey implements IPublicKey {

    /**
     * Constructs a new PublicKey.
     * @param [p] Properties to set
     */
    constructor(p?: IPublicKey);

    /** PublicKey algorithm. */
    public algorithm: PublicKey.Algorithm;

    /** PublicKey key. */
    public key: Uint8Array;

    /**
     * Encodes the specified PublicKey message. Does not implicitly {@link PublicKey.verify|verify} messages.
     * @param m PublicKey message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPublicKey, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PublicKey message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PublicKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PublicKey;

    /**
     * Gets the default type url for PublicKey
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PublicKey {

    /** Algorithm enum. */
    enum Algorithm {
        Ed25519 = 0
    }
}

/** Properties of a Proof. */
export interface IProof {

    /** Proof nextSecret */
    nextSecret?: (Uint8Array|null);

    /** Proof finalSignature */
    finalSignature?: (Uint8Array|null);
}

/** Represents a Proof. */
export class Proof implements IProof {

    /**
     * Constructs a new Proof.
     * @param [p] Properties to set
     */
    constructor(p?: IProof);

    /** Proof nextSecret. */
    public nextSecret?: (Uint8Array|null);

    /** Proof finalSignature. */
    public finalSignature?: (Uint8Array|null);

    /** Proof Content. */
    public Content?: ("nextSecret"|"finalSignature");

    /**
     * Encodes the specified Proof message. Does not implicitly {@link Proof.verify|verify} messages.
     * @param m Proof message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IProof, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Proof message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Proof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Proof;

    /**
     * Gets the default type url for Proof
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Block. */
export interface IBlock {

    /** Block symbols */
    symbols?: (string[]|null);

    /** Block context */
    context?: (string|null);

    /** Block version */
    version?: (number|null);

    /** Block factsV2 */
    factsV2?: (IFactV2[]|null);

    /** Block rulesV2 */
    rulesV2?: (IRuleV2[]|null);

    /** Block checksV2 */
    checksV2?: (ICheckV2[]|null);

    /** Block scope */
    scope?: (IScope[]|null);

    /** Block publicKeys */
    publicKeys?: (IPublicKey[]|null);
}

/** Represents a Block. */
export class Block implements IBlock {

    /**
     * Constructs a new Block.
     * @param [p] Properties to set
     */
    constructor(p?: IBlock);

    /** Block symbols. */
    public symbols: string[];

    /** Block context. */
    public context: string;

    /** Block version. */
    public version: number;

    /** Block factsV2. */
    public factsV2: IFactV2[];

    /** Block rulesV2. */
    public rulesV2: IRuleV2[];

    /** Block checksV2. */
    public checksV2: ICheckV2[];

    /** Block scope. */
    public scope: IScope[];

    /** Block publicKeys. */
    public publicKeys: IPublicKey[];

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @param m Block message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBlock, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Block;

    /**
     * Gets the default type url for Block
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Scope. */
export interface IScope {

    /** Scope scopeType */
    scopeType?: (Scope.ScopeType|null);

    /** Scope publicKey */
    publicKey?: (number|Long|null);
}

/** Represents a Scope. */
export class Scope implements IScope {

    /**
     * Constructs a new Scope.
     * @param [p] Properties to set
     */
    constructor(p?: IScope);

    /** Scope scopeType. */
    public scopeType?: (Scope.ScopeType|null);

    /** Scope publicKey. */
    public publicKey?: (number|Long|null);

    /** Scope Content. */
    public Content?: ("scopeType"|"publicKey");

    /**
     * Encodes the specified Scope message. Does not implicitly {@link Scope.verify|verify} messages.
     * @param m Scope message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IScope, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Scope message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Scope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Scope;

    /**
     * Gets the default type url for Scope
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Scope {

    /** ScopeType enum. */
    enum ScopeType {
        Authority = 0,
        Previous = 1
    }
}

/** Properties of a FactV2. */
export interface IFactV2 {

    /** FactV2 predicate */
    predicate: IPredicateV2;
}

/** Represents a FactV2. */
export class FactV2 implements IFactV2 {

    /**
     * Constructs a new FactV2.
     * @param [p] Properties to set
     */
    constructor(p?: IFactV2);

    /** FactV2 predicate. */
    public predicate: IPredicateV2;

    /**
     * Encodes the specified FactV2 message. Does not implicitly {@link FactV2.verify|verify} messages.
     * @param m FactV2 message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IFactV2, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FactV2 message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns FactV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): FactV2;

    /**
     * Gets the default type url for FactV2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RuleV2. */
export interface IRuleV2 {

    /** RuleV2 head */
    head: IPredicateV2;

    /** RuleV2 body */
    body?: (IPredicateV2[]|null);

    /** RuleV2 expressions */
    expressions?: (IExpressionV2[]|null);

    /** RuleV2 scope */
    scope?: (IScope[]|null);
}

/** Represents a RuleV2. */
export class RuleV2 implements IRuleV2 {

    /**
     * Constructs a new RuleV2.
     * @param [p] Properties to set
     */
    constructor(p?: IRuleV2);

    /** RuleV2 head. */
    public head: IPredicateV2;

    /** RuleV2 body. */
    public body: IPredicateV2[];

    /** RuleV2 expressions. */
    public expressions: IExpressionV2[];

    /** RuleV2 scope. */
    public scope: IScope[];

    /**
     * Encodes the specified RuleV2 message. Does not implicitly {@link RuleV2.verify|verify} messages.
     * @param m RuleV2 message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRuleV2, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RuleV2 message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RuleV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RuleV2;

    /**
     * Gets the default type url for RuleV2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CheckV2. */
export interface ICheckV2 {

    /** CheckV2 queries */
    queries?: (IRuleV2[]|null);

    /** CheckV2 kind */
    kind?: (CheckV2.Kind|null);
}

/** Represents a CheckV2. */
export class CheckV2 implements ICheckV2 {

    /**
     * Constructs a new CheckV2.
     * @param [p] Properties to set
     */
    constructor(p?: ICheckV2);

    /** CheckV2 queries. */
    public queries: IRuleV2[];

    /** CheckV2 kind. */
    public kind: CheckV2.Kind;

    /**
     * Encodes the specified CheckV2 message. Does not implicitly {@link CheckV2.verify|verify} messages.
     * @param m CheckV2 message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICheckV2, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CheckV2 message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CheckV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CheckV2;

    /**
     * Gets the default type url for CheckV2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CheckV2 {

    /** Kind enum. */
    enum Kind {
        One = 0,
        All = 1
    }
}

/** Properties of a PredicateV2. */
export interface IPredicateV2 {

    /** PredicateV2 name */
    name: (number|Long);

    /** PredicateV2 terms */
    terms?: (ITermV2[]|null);
}

/** Represents a PredicateV2. */
export class PredicateV2 implements IPredicateV2 {

    /**
     * Constructs a new PredicateV2.
     * @param [p] Properties to set
     */
    constructor(p?: IPredicateV2);

    /** PredicateV2 name. */
    public name: (number|Long);

    /** PredicateV2 terms. */
    public terms: ITermV2[];

    /**
     * Encodes the specified PredicateV2 message. Does not implicitly {@link PredicateV2.verify|verify} messages.
     * @param m PredicateV2 message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPredicateV2, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PredicateV2 message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PredicateV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): PredicateV2;

    /**
     * Gets the default type url for PredicateV2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TermV2. */
export interface ITermV2 {

    /** TermV2 variable */
    variable?: (number|null);

    /** TermV2 integer */
    integer?: (number|Long|null);

    /** TermV2 string */
    string?: (number|Long|null);

    /** TermV2 date */
    date?: (number|Long|null);

    /** TermV2 bytes */
    bytes?: (Uint8Array|null);

    /** TermV2 bool */
    bool?: (boolean|null);

    /** TermV2 set */
    set?: (ITermSet|null);
}

/** Represents a TermV2. */
export class TermV2 implements ITermV2 {

    /**
     * Constructs a new TermV2.
     * @param [p] Properties to set
     */
    constructor(p?: ITermV2);

    /** TermV2 variable. */
    public variable?: (number|null);

    /** TermV2 integer. */
    public integer?: (number|Long|null);

    /** TermV2 string. */
    public string?: (number|Long|null);

    /** TermV2 date. */
    public date?: (number|Long|null);

    /** TermV2 bytes. */
    public bytes?: (Uint8Array|null);

    /** TermV2 bool. */
    public bool?: (boolean|null);

    /** TermV2 set. */
    public set?: (ITermSet|null);

    /** TermV2 Content. */
    public Content?: ("variable"|"integer"|"string"|"date"|"bytes"|"bool"|"set");

    /**
     * Encodes the specified TermV2 message. Does not implicitly {@link TermV2.verify|verify} messages.
     * @param m TermV2 message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITermV2, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TermV2 message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TermV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TermV2;

    /**
     * Gets the default type url for TermV2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TermSet. */
export interface ITermSet {

    /** TermSet set */
    set?: (ITermV2[]|null);
}

/** Represents a TermSet. */
export class TermSet implements ITermSet {

    /**
     * Constructs a new TermSet.
     * @param [p] Properties to set
     */
    constructor(p?: ITermSet);

    /** TermSet set. */
    public set: ITermV2[];

    /**
     * Encodes the specified TermSet message. Does not implicitly {@link TermSet.verify|verify} messages.
     * @param m TermSet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITermSet, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TermSet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TermSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): TermSet;

    /**
     * Gets the default type url for TermSet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ExpressionV2. */
export interface IExpressionV2 {

    /** ExpressionV2 ops */
    ops?: (IOp[]|null);
}

/** Represents an ExpressionV2. */
export class ExpressionV2 implements IExpressionV2 {

    /**
     * Constructs a new ExpressionV2.
     * @param [p] Properties to set
     */
    constructor(p?: IExpressionV2);

    /** ExpressionV2 ops. */
    public ops: IOp[];

    /**
     * Encodes the specified ExpressionV2 message. Does not implicitly {@link ExpressionV2.verify|verify} messages.
     * @param m ExpressionV2 message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IExpressionV2, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExpressionV2 message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ExpressionV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ExpressionV2;

    /**
     * Gets the default type url for ExpressionV2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an Op. */
export interface IOp {

    /** Op value */
    value?: (ITermV2|null);

    /** Op unary */
    unary?: (IOpUnary|null);

    /** Op Binary */
    Binary?: (IOpBinary|null);
}

/** Represents an Op. */
export class Op implements IOp {

    /**
     * Constructs a new Op.
     * @param [p] Properties to set
     */
    constructor(p?: IOp);

    /** Op value. */
    public value?: (ITermV2|null);

    /** Op unary. */
    public unary?: (IOpUnary|null);

    /** Op Binary. */
    public Binary?: (IOpBinary|null);

    /** Op Content. */
    public Content?: ("value"|"unary"|"Binary");

    /**
     * Encodes the specified Op message. Does not implicitly {@link Op.verify|verify} messages.
     * @param m Op message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Op message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Op
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Op;

    /**
     * Gets the default type url for Op
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an OpUnary. */
export interface IOpUnary {

    /** OpUnary kind */
    kind: OpUnary.Kind;
}

/** Represents an OpUnary. */
export class OpUnary implements IOpUnary {

    /**
     * Constructs a new OpUnary.
     * @param [p] Properties to set
     */
    constructor(p?: IOpUnary);

    /** OpUnary kind. */
    public kind: OpUnary.Kind;

    /**
     * Encodes the specified OpUnary message. Does not implicitly {@link OpUnary.verify|verify} messages.
     * @param m OpUnary message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpUnary, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpUnary message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpUnary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpUnary;

    /**
     * Gets the default type url for OpUnary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace OpUnary {

    /** Kind enum. */
    enum Kind {
        Negate = 0,
        Parens = 1,
        Length = 2
    }
}

/** Properties of an OpBinary. */
export interface IOpBinary {

    /** OpBinary kind */
    kind: OpBinary.Kind;
}

/** Represents an OpBinary. */
export class OpBinary implements IOpBinary {

    /**
     * Constructs a new OpBinary.
     * @param [p] Properties to set
     */
    constructor(p?: IOpBinary);

    /** OpBinary kind. */
    public kind: OpBinary.Kind;

    /**
     * Encodes the specified OpBinary message. Does not implicitly {@link OpBinary.verify|verify} messages.
     * @param m OpBinary message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOpBinary, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OpBinary message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OpBinary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): OpBinary;

    /**
     * Gets the default type url for OpBinary
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace OpBinary {

    /** Kind enum. */
    enum Kind {
        LessThan = 0,
        GreaterThan = 1,
        LessOrEqual = 2,
        GreaterOrEqual = 3,
        Equal = 4,
        Contains = 5,
        Prefix = 6,
        Suffix = 7,
        Regex = 8,
        Add = 9,
        Sub = 10,
        Mul = 11,
        Div = 12,
        And = 13,
        Or = 14,
        Intersection = 15,
        Union = 16,
        BitwiseAnd = 17,
        BitwiseOr = 18,
        BitwiseXor = 19,
        NotEqual = 20
    }
}

/** Properties of a Policy. */
export interface IPolicy {

    /** Policy queries */
    queries?: (IRuleV2[]|null);

    /** Policy kind */
    kind: Policy.Kind;
}

/** Represents a Policy. */
export class Policy implements IPolicy {

    /**
     * Constructs a new Policy.
     * @param [p] Properties to set
     */
    constructor(p?: IPolicy);

    /** Policy queries. */
    public queries: IRuleV2[];

    /** Policy kind. */
    public kind: Policy.Kind;

    /**
     * Encodes the specified Policy message. Does not implicitly {@link Policy.verify|verify} messages.
     * @param m Policy message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPolicy, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Policy message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Policy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Policy;

    /**
     * Gets the default type url for Policy
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Policy {

    /** Kind enum. */
    enum Kind {
        Allow = 0,
        Deny = 1
    }
}

/** Properties of an AuthorizerPolicies. */
export interface IAuthorizerPolicies {

    /** AuthorizerPolicies symbols */
    symbols?: (string[]|null);

    /** AuthorizerPolicies version */
    version?: (number|null);

    /** AuthorizerPolicies facts */
    facts?: (IFactV2[]|null);

    /** AuthorizerPolicies rules */
    rules?: (IRuleV2[]|null);

    /** AuthorizerPolicies checks */
    checks?: (ICheckV2[]|null);

    /** AuthorizerPolicies policies */
    policies?: (IPolicy[]|null);
}

/** Represents an AuthorizerPolicies. */
export class AuthorizerPolicies implements IAuthorizerPolicies {

    /**
     * Constructs a new AuthorizerPolicies.
     * @param [p] Properties to set
     */
    constructor(p?: IAuthorizerPolicies);

    /** AuthorizerPolicies symbols. */
    public symbols: string[];

    /** AuthorizerPolicies version. */
    public version: number;

    /** AuthorizerPolicies facts. */
    public facts: IFactV2[];

    /** AuthorizerPolicies rules. */
    public rules: IRuleV2[];

    /** AuthorizerPolicies checks. */
    public checks: ICheckV2[];

    /** AuthorizerPolicies policies. */
    public policies: IPolicy[];

    /**
     * Encodes the specified AuthorizerPolicies message. Does not implicitly {@link AuthorizerPolicies.verify|verify} messages.
     * @param m AuthorizerPolicies message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAuthorizerPolicies, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthorizerPolicies message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AuthorizerPolicies
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AuthorizerPolicies;

    /**
     * Gets the default type url for AuthorizerPolicies
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ThirdPartyBlockRequest. */
export interface IThirdPartyBlockRequest {

    /** ThirdPartyBlockRequest previousKey */
    previousKey: IPublicKey;

    /** ThirdPartyBlockRequest publicKeys */
    publicKeys?: (IPublicKey[]|null);
}

/** Represents a ThirdPartyBlockRequest. */
export class ThirdPartyBlockRequest implements IThirdPartyBlockRequest {

    /**
     * Constructs a new ThirdPartyBlockRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IThirdPartyBlockRequest);

    /** ThirdPartyBlockRequest previousKey. */
    public previousKey: IPublicKey;

    /** ThirdPartyBlockRequest publicKeys. */
    public publicKeys: IPublicKey[];

    /**
     * Encodes the specified ThirdPartyBlockRequest message. Does not implicitly {@link ThirdPartyBlockRequest.verify|verify} messages.
     * @param m ThirdPartyBlockRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IThirdPartyBlockRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThirdPartyBlockRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ThirdPartyBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ThirdPartyBlockRequest;

    /**
     * Gets the default type url for ThirdPartyBlockRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ThirdPartyBlockContents. */
export interface IThirdPartyBlockContents {

    /** ThirdPartyBlockContents payload */
    payload: Uint8Array;

    /** ThirdPartyBlockContents externalSignature */
    externalSignature: IExternalSignature;
}

/** Represents a ThirdPartyBlockContents. */
export class ThirdPartyBlockContents implements IThirdPartyBlockContents {

    /**
     * Constructs a new ThirdPartyBlockContents.
     * @param [p] Properties to set
     */
    constructor(p?: IThirdPartyBlockContents);

    /** ThirdPartyBlockContents payload. */
    public payload: Uint8Array;

    /** ThirdPartyBlockContents externalSignature. */
    public externalSignature: IExternalSignature;

    /**
     * Encodes the specified ThirdPartyBlockContents message. Does not implicitly {@link ThirdPartyBlockContents.verify|verify} messages.
     * @param m ThirdPartyBlockContents message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IThirdPartyBlockContents, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThirdPartyBlockContents message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ThirdPartyBlockContents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): ThirdPartyBlockContents;

    /**
     * Gets the default type url for ThirdPartyBlockContents
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
