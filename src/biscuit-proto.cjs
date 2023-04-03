/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Biscuit = $root.Biscuit = (() => {

    /**
     * Properties of a Biscuit.
     * @exports IBiscuit
     * @interface IBiscuit
     * @property {number|null} [rootKeyId] Biscuit rootKeyId
     * @property {ISignedBlock} authority Biscuit authority
     * @property {Array.<ISignedBlock>|null} [blocks] Biscuit blocks
     * @property {IProof} proof Biscuit proof
     */

    /**
     * Constructs a new Biscuit.
     * @exports Biscuit
     * @classdesc Represents a Biscuit.
     * @implements IBiscuit
     * @constructor
     * @param {IBiscuit=} [p] Properties to set
     */
    function Biscuit(p) {
        this.blocks = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Biscuit rootKeyId.
     * @member {number} rootKeyId
     * @memberof Biscuit
     * @instance
     */
    Biscuit.prototype.rootKeyId = 0;

    /**
     * Biscuit authority.
     * @member {ISignedBlock} authority
     * @memberof Biscuit
     * @instance
     */
    Biscuit.prototype.authority = null;

    /**
     * Biscuit blocks.
     * @member {Array.<ISignedBlock>} blocks
     * @memberof Biscuit
     * @instance
     */
    Biscuit.prototype.blocks = $util.emptyArray;

    /**
     * Biscuit proof.
     * @member {IProof} proof
     * @memberof Biscuit
     * @instance
     */
    Biscuit.prototype.proof = null;

    /**
     * Encodes the specified Biscuit message. Does not implicitly {@link Biscuit.verify|verify} messages.
     * @function encode
     * @memberof Biscuit
     * @static
     * @param {IBiscuit} m Biscuit message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Biscuit.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rootKeyId != null && Object.hasOwnProperty.call(m, "rootKeyId"))
            w.uint32(8).uint32(m.rootKeyId);
        $root.SignedBlock.encode(m.authority, w.uint32(18).fork()).ldelim();
        if (m.blocks != null && m.blocks.length) {
            for (var i = 0; i < m.blocks.length; ++i)
                $root.SignedBlock.encode(m.blocks[i], w.uint32(26).fork()).ldelim();
        }
        $root.Proof.encode(m.proof, w.uint32(34).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a Biscuit message from the specified reader or buffer.
     * @function decode
     * @memberof Biscuit
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Biscuit} Biscuit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Biscuit.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Biscuit();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.rootKeyId = r.uint32();
                    break;
                }
            case 2: {
                    m.authority = $root.SignedBlock.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    if (!(m.blocks && m.blocks.length))
                        m.blocks = [];
                    m.blocks.push($root.SignedBlock.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    m.proof = $root.Proof.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("authority"))
            throw $util.ProtocolError("missing required 'authority'", { instance: m });
        if (!m.hasOwnProperty("proof"))
            throw $util.ProtocolError("missing required 'proof'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for Biscuit
     * @function getTypeUrl
     * @memberof Biscuit
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Biscuit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Biscuit";
    };

    return Biscuit;
})();

export const SignedBlock = $root.SignedBlock = (() => {

    /**
     * Properties of a SignedBlock.
     * @exports ISignedBlock
     * @interface ISignedBlock
     * @property {Uint8Array} block SignedBlock block
     * @property {IPublicKey} nextKey SignedBlock nextKey
     * @property {Uint8Array} signature SignedBlock signature
     * @property {IExternalSignature|null} [externalSignature] SignedBlock externalSignature
     */

    /**
     * Constructs a new SignedBlock.
     * @exports SignedBlock
     * @classdesc Represents a SignedBlock.
     * @implements ISignedBlock
     * @constructor
     * @param {ISignedBlock=} [p] Properties to set
     */
    function SignedBlock(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SignedBlock block.
     * @member {Uint8Array} block
     * @memberof SignedBlock
     * @instance
     */
    SignedBlock.prototype.block = $util.newBuffer([]);

    /**
     * SignedBlock nextKey.
     * @member {IPublicKey} nextKey
     * @memberof SignedBlock
     * @instance
     */
    SignedBlock.prototype.nextKey = null;

    /**
     * SignedBlock signature.
     * @member {Uint8Array} signature
     * @memberof SignedBlock
     * @instance
     */
    SignedBlock.prototype.signature = $util.newBuffer([]);

    /**
     * SignedBlock externalSignature.
     * @member {IExternalSignature|null|undefined} externalSignature
     * @memberof SignedBlock
     * @instance
     */
    SignedBlock.prototype.externalSignature = null;

    /**
     * Encodes the specified SignedBlock message. Does not implicitly {@link SignedBlock.verify|verify} messages.
     * @function encode
     * @memberof SignedBlock
     * @static
     * @param {ISignedBlock} m SignedBlock message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignedBlock.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).bytes(m.block);
        $root.PublicKey.encode(m.nextKey, w.uint32(18).fork()).ldelim();
        w.uint32(26).bytes(m.signature);
        if (m.externalSignature != null && Object.hasOwnProperty.call(m, "externalSignature"))
            $root.ExternalSignature.encode(m.externalSignature, w.uint32(34).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a SignedBlock message from the specified reader or buffer.
     * @function decode
     * @memberof SignedBlock
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SignedBlock} SignedBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignedBlock.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SignedBlock();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.block = r.bytes();
                    break;
                }
            case 2: {
                    m.nextKey = $root.PublicKey.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.signature = r.bytes();
                    break;
                }
            case 4: {
                    m.externalSignature = $root.ExternalSignature.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("block"))
            throw $util.ProtocolError("missing required 'block'", { instance: m });
        if (!m.hasOwnProperty("nextKey"))
            throw $util.ProtocolError("missing required 'nextKey'", { instance: m });
        if (!m.hasOwnProperty("signature"))
            throw $util.ProtocolError("missing required 'signature'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for SignedBlock
     * @function getTypeUrl
     * @memberof SignedBlock
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SignedBlock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SignedBlock";
    };

    return SignedBlock;
})();

export const ExternalSignature = $root.ExternalSignature = (() => {

    /**
     * Properties of an ExternalSignature.
     * @exports IExternalSignature
     * @interface IExternalSignature
     * @property {Uint8Array} signature ExternalSignature signature
     * @property {IPublicKey} publicKey ExternalSignature publicKey
     */

    /**
     * Constructs a new ExternalSignature.
     * @exports ExternalSignature
     * @classdesc Represents an ExternalSignature.
     * @implements IExternalSignature
     * @constructor
     * @param {IExternalSignature=} [p] Properties to set
     */
    function ExternalSignature(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExternalSignature signature.
     * @member {Uint8Array} signature
     * @memberof ExternalSignature
     * @instance
     */
    ExternalSignature.prototype.signature = $util.newBuffer([]);

    /**
     * ExternalSignature publicKey.
     * @member {IPublicKey} publicKey
     * @memberof ExternalSignature
     * @instance
     */
    ExternalSignature.prototype.publicKey = null;

    /**
     * Encodes the specified ExternalSignature message. Does not implicitly {@link ExternalSignature.verify|verify} messages.
     * @function encode
     * @memberof ExternalSignature
     * @static
     * @param {IExternalSignature} m ExternalSignature message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExternalSignature.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).bytes(m.signature);
        $root.PublicKey.encode(m.publicKey, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes an ExternalSignature message from the specified reader or buffer.
     * @function decode
     * @memberof ExternalSignature
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExternalSignature} ExternalSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExternalSignature.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExternalSignature();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.signature = r.bytes();
                    break;
                }
            case 2: {
                    m.publicKey = $root.PublicKey.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("signature"))
            throw $util.ProtocolError("missing required 'signature'", { instance: m });
        if (!m.hasOwnProperty("publicKey"))
            throw $util.ProtocolError("missing required 'publicKey'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for ExternalSignature
     * @function getTypeUrl
     * @memberof ExternalSignature
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ExternalSignature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ExternalSignature";
    };

    return ExternalSignature;
})();

export const PublicKey = $root.PublicKey = (() => {

    /**
     * Properties of a PublicKey.
     * @exports IPublicKey
     * @interface IPublicKey
     * @property {PublicKey.Algorithm} algorithm PublicKey algorithm
     * @property {Uint8Array} key PublicKey key
     */

    /**
     * Constructs a new PublicKey.
     * @exports PublicKey
     * @classdesc Represents a PublicKey.
     * @implements IPublicKey
     * @constructor
     * @param {IPublicKey=} [p] Properties to set
     */
    function PublicKey(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PublicKey algorithm.
     * @member {PublicKey.Algorithm} algorithm
     * @memberof PublicKey
     * @instance
     */
    PublicKey.prototype.algorithm = 0;

    /**
     * PublicKey key.
     * @member {Uint8Array} key
     * @memberof PublicKey
     * @instance
     */
    PublicKey.prototype.key = $util.newBuffer([]);

    /**
     * Encodes the specified PublicKey message. Does not implicitly {@link PublicKey.verify|verify} messages.
     * @function encode
     * @memberof PublicKey
     * @static
     * @param {IPublicKey} m PublicKey message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicKey.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.algorithm);
        w.uint32(18).bytes(m.key);
        return w;
    };

    /**
     * Decodes a PublicKey message from the specified reader or buffer.
     * @function decode
     * @memberof PublicKey
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PublicKey} PublicKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicKey.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PublicKey();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.algorithm = r.int32();
                    break;
                }
            case 2: {
                    m.key = r.bytes();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("algorithm"))
            throw $util.ProtocolError("missing required 'algorithm'", { instance: m });
        if (!m.hasOwnProperty("key"))
            throw $util.ProtocolError("missing required 'key'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for PublicKey
     * @function getTypeUrl
     * @memberof PublicKey
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PublicKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PublicKey";
    };

    /**
     * Algorithm enum.
     * @name PublicKey.Algorithm
     * @enum {number}
     * @property {number} Ed25519=0 Ed25519 value
     */
    PublicKey.Algorithm = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Ed25519"] = 0;
        return values;
    })();

    return PublicKey;
})();

export const Proof = $root.Proof = (() => {

    /**
     * Properties of a Proof.
     * @exports IProof
     * @interface IProof
     * @property {Uint8Array|null} [nextSecret] Proof nextSecret
     * @property {Uint8Array|null} [finalSignature] Proof finalSignature
     */

    /**
     * Constructs a new Proof.
     * @exports Proof
     * @classdesc Represents a Proof.
     * @implements IProof
     * @constructor
     * @param {IProof=} [p] Properties to set
     */
    function Proof(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Proof nextSecret.
     * @member {Uint8Array|null|undefined} nextSecret
     * @memberof Proof
     * @instance
     */
    Proof.prototype.nextSecret = null;

    /**
     * Proof finalSignature.
     * @member {Uint8Array|null|undefined} finalSignature
     * @memberof Proof
     * @instance
     */
    Proof.prototype.finalSignature = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Proof Content.
     * @member {"nextSecret"|"finalSignature"|undefined} Content
     * @memberof Proof
     * @instance
     */
    Object.defineProperty(Proof.prototype, "Content", {
        get: $util.oneOfGetter($oneOfFields = ["nextSecret", "finalSignature"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified Proof message. Does not implicitly {@link Proof.verify|verify} messages.
     * @function encode
     * @memberof Proof
     * @static
     * @param {IProof} m Proof message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Proof.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.nextSecret != null && Object.hasOwnProperty.call(m, "nextSecret"))
            w.uint32(10).bytes(m.nextSecret);
        if (m.finalSignature != null && Object.hasOwnProperty.call(m, "finalSignature"))
            w.uint32(18).bytes(m.finalSignature);
        return w;
    };

    /**
     * Decodes a Proof message from the specified reader or buffer.
     * @function decode
     * @memberof Proof
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Proof} Proof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Proof.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Proof();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.nextSecret = r.bytes();
                    break;
                }
            case 2: {
                    m.finalSignature = r.bytes();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for Proof
     * @function getTypeUrl
     * @memberof Proof
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Proof.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Proof";
    };

    return Proof;
})();

export const Block = $root.Block = (() => {

    /**
     * Properties of a Block.
     * @exports IBlock
     * @interface IBlock
     * @property {Array.<string>|null} [symbols] Block symbols
     * @property {string|null} [context] Block context
     * @property {number|null} [version] Block version
     * @property {Array.<IFactV2>|null} [factsV2] Block factsV2
     * @property {Array.<IRuleV2>|null} [rulesV2] Block rulesV2
     * @property {Array.<ICheckV2>|null} [checksV2] Block checksV2
     * @property {Array.<IScope>|null} [scope] Block scope
     * @property {Array.<IPublicKey>|null} [publicKeys] Block publicKeys
     */

    /**
     * Constructs a new Block.
     * @exports Block
     * @classdesc Represents a Block.
     * @implements IBlock
     * @constructor
     * @param {IBlock=} [p] Properties to set
     */
    function Block(p) {
        this.symbols = [];
        this.factsV2 = [];
        this.rulesV2 = [];
        this.checksV2 = [];
        this.scope = [];
        this.publicKeys = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Block symbols.
     * @member {Array.<string>} symbols
     * @memberof Block
     * @instance
     */
    Block.prototype.symbols = $util.emptyArray;

    /**
     * Block context.
     * @member {string} context
     * @memberof Block
     * @instance
     */
    Block.prototype.context = "";

    /**
     * Block version.
     * @member {number} version
     * @memberof Block
     * @instance
     */
    Block.prototype.version = 0;

    /**
     * Block factsV2.
     * @member {Array.<IFactV2>} factsV2
     * @memberof Block
     * @instance
     */
    Block.prototype.factsV2 = $util.emptyArray;

    /**
     * Block rulesV2.
     * @member {Array.<IRuleV2>} rulesV2
     * @memberof Block
     * @instance
     */
    Block.prototype.rulesV2 = $util.emptyArray;

    /**
     * Block checksV2.
     * @member {Array.<ICheckV2>} checksV2
     * @memberof Block
     * @instance
     */
    Block.prototype.checksV2 = $util.emptyArray;

    /**
     * Block scope.
     * @member {Array.<IScope>} scope
     * @memberof Block
     * @instance
     */
    Block.prototype.scope = $util.emptyArray;

    /**
     * Block publicKeys.
     * @member {Array.<IPublicKey>} publicKeys
     * @memberof Block
     * @instance
     */
    Block.prototype.publicKeys = $util.emptyArray;

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @function encode
     * @memberof Block
     * @static
     * @param {IBlock} m Block message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Block.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.symbols != null && m.symbols.length) {
            for (var i = 0; i < m.symbols.length; ++i)
                w.uint32(10).string(m.symbols[i]);
        }
        if (m.context != null && Object.hasOwnProperty.call(m, "context"))
            w.uint32(18).string(m.context);
        if (m.version != null && Object.hasOwnProperty.call(m, "version"))
            w.uint32(24).uint32(m.version);
        if (m.factsV2 != null && m.factsV2.length) {
            for (var i = 0; i < m.factsV2.length; ++i)
                $root.FactV2.encode(m.factsV2[i], w.uint32(34).fork()).ldelim();
        }
        if (m.rulesV2 != null && m.rulesV2.length) {
            for (var i = 0; i < m.rulesV2.length; ++i)
                $root.RuleV2.encode(m.rulesV2[i], w.uint32(42).fork()).ldelim();
        }
        if (m.checksV2 != null && m.checksV2.length) {
            for (var i = 0; i < m.checksV2.length; ++i)
                $root.CheckV2.encode(m.checksV2[i], w.uint32(50).fork()).ldelim();
        }
        if (m.scope != null && m.scope.length) {
            for (var i = 0; i < m.scope.length; ++i)
                $root.Scope.encode(m.scope[i], w.uint32(58).fork()).ldelim();
        }
        if (m.publicKeys != null && m.publicKeys.length) {
            for (var i = 0; i < m.publicKeys.length; ++i)
                $root.PublicKey.encode(m.publicKeys[i], w.uint32(66).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @function decode
     * @memberof Block
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Block} Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Block.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Block();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.symbols && m.symbols.length))
                        m.symbols = [];
                    m.symbols.push(r.string());
                    break;
                }
            case 2: {
                    m.context = r.string();
                    break;
                }
            case 3: {
                    m.version = r.uint32();
                    break;
                }
            case 4: {
                    if (!(m.factsV2 && m.factsV2.length))
                        m.factsV2 = [];
                    m.factsV2.push($root.FactV2.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    if (!(m.rulesV2 && m.rulesV2.length))
                        m.rulesV2 = [];
                    m.rulesV2.push($root.RuleV2.decode(r, r.uint32()));
                    break;
                }
            case 6: {
                    if (!(m.checksV2 && m.checksV2.length))
                        m.checksV2 = [];
                    m.checksV2.push($root.CheckV2.decode(r, r.uint32()));
                    break;
                }
            case 7: {
                    if (!(m.scope && m.scope.length))
                        m.scope = [];
                    m.scope.push($root.Scope.decode(r, r.uint32()));
                    break;
                }
            case 8: {
                    if (!(m.publicKeys && m.publicKeys.length))
                        m.publicKeys = [];
                    m.publicKeys.push($root.PublicKey.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for Block
     * @function getTypeUrl
     * @memberof Block
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Block.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Block";
    };

    return Block;
})();

export const Scope = $root.Scope = (() => {

    /**
     * Properties of a Scope.
     * @exports IScope
     * @interface IScope
     * @property {Scope.ScopeType|null} [scopeType] Scope scopeType
     * @property {number|Long|null} [publicKey] Scope publicKey
     */

    /**
     * Constructs a new Scope.
     * @exports Scope
     * @classdesc Represents a Scope.
     * @implements IScope
     * @constructor
     * @param {IScope=} [p] Properties to set
     */
    function Scope(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Scope scopeType.
     * @member {Scope.ScopeType|null|undefined} scopeType
     * @memberof Scope
     * @instance
     */
    Scope.prototype.scopeType = null;

    /**
     * Scope publicKey.
     * @member {number|Long|null|undefined} publicKey
     * @memberof Scope
     * @instance
     */
    Scope.prototype.publicKey = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Scope Content.
     * @member {"scopeType"|"publicKey"|undefined} Content
     * @memberof Scope
     * @instance
     */
    Object.defineProperty(Scope.prototype, "Content", {
        get: $util.oneOfGetter($oneOfFields = ["scopeType", "publicKey"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified Scope message. Does not implicitly {@link Scope.verify|verify} messages.
     * @function encode
     * @memberof Scope
     * @static
     * @param {IScope} m Scope message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Scope.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.scopeType != null && Object.hasOwnProperty.call(m, "scopeType"))
            w.uint32(8).int32(m.scopeType);
        if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
            w.uint32(16).int64(m.publicKey);
        return w;
    };

    /**
     * Decodes a Scope message from the specified reader or buffer.
     * @function decode
     * @memberof Scope
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Scope} Scope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Scope.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Scope();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.scopeType = r.int32();
                    break;
                }
            case 2: {
                    m.publicKey = r.int64();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for Scope
     * @function getTypeUrl
     * @memberof Scope
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Scope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Scope";
    };

    /**
     * ScopeType enum.
     * @name Scope.ScopeType
     * @enum {number}
     * @property {number} Authority=0 Authority value
     * @property {number} Previous=1 Previous value
     */
    Scope.ScopeType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Authority"] = 0;
        values[valuesById[1] = "Previous"] = 1;
        return values;
    })();

    return Scope;
})();

export const FactV2 = $root.FactV2 = (() => {

    /**
     * Properties of a FactV2.
     * @exports IFactV2
     * @interface IFactV2
     * @property {IPredicateV2} predicate FactV2 predicate
     */

    /**
     * Constructs a new FactV2.
     * @exports FactV2
     * @classdesc Represents a FactV2.
     * @implements IFactV2
     * @constructor
     * @param {IFactV2=} [p] Properties to set
     */
    function FactV2(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * FactV2 predicate.
     * @member {IPredicateV2} predicate
     * @memberof FactV2
     * @instance
     */
    FactV2.prototype.predicate = null;

    /**
     * Encodes the specified FactV2 message. Does not implicitly {@link FactV2.verify|verify} messages.
     * @function encode
     * @memberof FactV2
     * @static
     * @param {IFactV2} m FactV2 message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FactV2.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.PredicateV2.encode(m.predicate, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a FactV2 message from the specified reader or buffer.
     * @function decode
     * @memberof FactV2
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {FactV2} FactV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FactV2.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.FactV2();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.predicate = $root.PredicateV2.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("predicate"))
            throw $util.ProtocolError("missing required 'predicate'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for FactV2
     * @function getTypeUrl
     * @memberof FactV2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FactV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FactV2";
    };

    return FactV2;
})();

export const RuleV2 = $root.RuleV2 = (() => {

    /**
     * Properties of a RuleV2.
     * @exports IRuleV2
     * @interface IRuleV2
     * @property {IPredicateV2} head RuleV2 head
     * @property {Array.<IPredicateV2>|null} [body] RuleV2 body
     * @property {Array.<IExpressionV2>|null} [expressions] RuleV2 expressions
     * @property {Array.<IScope>|null} [scope] RuleV2 scope
     */

    /**
     * Constructs a new RuleV2.
     * @exports RuleV2
     * @classdesc Represents a RuleV2.
     * @implements IRuleV2
     * @constructor
     * @param {IRuleV2=} [p] Properties to set
     */
    function RuleV2(p) {
        this.body = [];
        this.expressions = [];
        this.scope = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RuleV2 head.
     * @member {IPredicateV2} head
     * @memberof RuleV2
     * @instance
     */
    RuleV2.prototype.head = null;

    /**
     * RuleV2 body.
     * @member {Array.<IPredicateV2>} body
     * @memberof RuleV2
     * @instance
     */
    RuleV2.prototype.body = $util.emptyArray;

    /**
     * RuleV2 expressions.
     * @member {Array.<IExpressionV2>} expressions
     * @memberof RuleV2
     * @instance
     */
    RuleV2.prototype.expressions = $util.emptyArray;

    /**
     * RuleV2 scope.
     * @member {Array.<IScope>} scope
     * @memberof RuleV2
     * @instance
     */
    RuleV2.prototype.scope = $util.emptyArray;

    /**
     * Encodes the specified RuleV2 message. Does not implicitly {@link RuleV2.verify|verify} messages.
     * @function encode
     * @memberof RuleV2
     * @static
     * @param {IRuleV2} m RuleV2 message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RuleV2.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.PredicateV2.encode(m.head, w.uint32(10).fork()).ldelim();
        if (m.body != null && m.body.length) {
            for (var i = 0; i < m.body.length; ++i)
                $root.PredicateV2.encode(m.body[i], w.uint32(18).fork()).ldelim();
        }
        if (m.expressions != null && m.expressions.length) {
            for (var i = 0; i < m.expressions.length; ++i)
                $root.ExpressionV2.encode(m.expressions[i], w.uint32(26).fork()).ldelim();
        }
        if (m.scope != null && m.scope.length) {
            for (var i = 0; i < m.scope.length; ++i)
                $root.Scope.encode(m.scope[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RuleV2 message from the specified reader or buffer.
     * @function decode
     * @memberof RuleV2
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RuleV2} RuleV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RuleV2.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RuleV2();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.head = $root.PredicateV2.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    if (!(m.body && m.body.length))
                        m.body = [];
                    m.body.push($root.PredicateV2.decode(r, r.uint32()));
                    break;
                }
            case 3: {
                    if (!(m.expressions && m.expressions.length))
                        m.expressions = [];
                    m.expressions.push($root.ExpressionV2.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    if (!(m.scope && m.scope.length))
                        m.scope = [];
                    m.scope.push($root.Scope.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("head"))
            throw $util.ProtocolError("missing required 'head'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for RuleV2
     * @function getTypeUrl
     * @memberof RuleV2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RuleV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RuleV2";
    };

    return RuleV2;
})();

export const CheckV2 = $root.CheckV2 = (() => {

    /**
     * Properties of a CheckV2.
     * @exports ICheckV2
     * @interface ICheckV2
     * @property {Array.<IRuleV2>|null} [queries] CheckV2 queries
     * @property {CheckV2.Kind|null} [kind] CheckV2 kind
     */

    /**
     * Constructs a new CheckV2.
     * @exports CheckV2
     * @classdesc Represents a CheckV2.
     * @implements ICheckV2
     * @constructor
     * @param {ICheckV2=} [p] Properties to set
     */
    function CheckV2(p) {
        this.queries = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CheckV2 queries.
     * @member {Array.<IRuleV2>} queries
     * @memberof CheckV2
     * @instance
     */
    CheckV2.prototype.queries = $util.emptyArray;

    /**
     * CheckV2 kind.
     * @member {CheckV2.Kind} kind
     * @memberof CheckV2
     * @instance
     */
    CheckV2.prototype.kind = 0;

    /**
     * Encodes the specified CheckV2 message. Does not implicitly {@link CheckV2.verify|verify} messages.
     * @function encode
     * @memberof CheckV2
     * @static
     * @param {ICheckV2} m CheckV2 message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CheckV2.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.queries != null && m.queries.length) {
            for (var i = 0; i < m.queries.length; ++i)
                $root.RuleV2.encode(m.queries[i], w.uint32(10).fork()).ldelim();
        }
        if (m.kind != null && Object.hasOwnProperty.call(m, "kind"))
            w.uint32(16).int32(m.kind);
        return w;
    };

    /**
     * Decodes a CheckV2 message from the specified reader or buffer.
     * @function decode
     * @memberof CheckV2
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CheckV2} CheckV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CheckV2.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CheckV2();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.queries && m.queries.length))
                        m.queries = [];
                    m.queries.push($root.RuleV2.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.kind = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for CheckV2
     * @function getTypeUrl
     * @memberof CheckV2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CheckV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CheckV2";
    };

    /**
     * Kind enum.
     * @name CheckV2.Kind
     * @enum {number}
     * @property {number} One=0 One value
     * @property {number} All=1 All value
     */
    CheckV2.Kind = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "One"] = 0;
        values[valuesById[1] = "All"] = 1;
        return values;
    })();

    return CheckV2;
})();

export const PredicateV2 = $root.PredicateV2 = (() => {

    /**
     * Properties of a PredicateV2.
     * @exports IPredicateV2
     * @interface IPredicateV2
     * @property {number|Long} name PredicateV2 name
     * @property {Array.<ITermV2>|null} [terms] PredicateV2 terms
     */

    /**
     * Constructs a new PredicateV2.
     * @exports PredicateV2
     * @classdesc Represents a PredicateV2.
     * @implements IPredicateV2
     * @constructor
     * @param {IPredicateV2=} [p] Properties to set
     */
    function PredicateV2(p) {
        this.terms = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PredicateV2 name.
     * @member {number|Long} name
     * @memberof PredicateV2
     * @instance
     */
    PredicateV2.prototype.name = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PredicateV2 terms.
     * @member {Array.<ITermV2>} terms
     * @memberof PredicateV2
     * @instance
     */
    PredicateV2.prototype.terms = $util.emptyArray;

    /**
     * Encodes the specified PredicateV2 message. Does not implicitly {@link PredicateV2.verify|verify} messages.
     * @function encode
     * @memberof PredicateV2
     * @static
     * @param {IPredicateV2} m PredicateV2 message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PredicateV2.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).uint64(m.name);
        if (m.terms != null && m.terms.length) {
            for (var i = 0; i < m.terms.length; ++i)
                $root.TermV2.encode(m.terms[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a PredicateV2 message from the specified reader or buffer.
     * @function decode
     * @memberof PredicateV2
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PredicateV2} PredicateV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PredicateV2.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PredicateV2();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.name = r.uint64();
                    break;
                }
            case 2: {
                    if (!(m.terms && m.terms.length))
                        m.terms = [];
                    m.terms.push($root.TermV2.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for PredicateV2
     * @function getTypeUrl
     * @memberof PredicateV2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PredicateV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PredicateV2";
    };

    return PredicateV2;
})();

export const TermV2 = $root.TermV2 = (() => {

    /**
     * Properties of a TermV2.
     * @exports ITermV2
     * @interface ITermV2
     * @property {number|null} [variable] TermV2 variable
     * @property {number|Long|null} [integer] TermV2 integer
     * @property {number|Long|null} [string] TermV2 string
     * @property {number|Long|null} [date] TermV2 date
     * @property {Uint8Array|null} [bytes] TermV2 bytes
     * @property {boolean|null} [bool] TermV2 bool
     * @property {ITermSet|null} [set] TermV2 set
     */

    /**
     * Constructs a new TermV2.
     * @exports TermV2
     * @classdesc Represents a TermV2.
     * @implements ITermV2
     * @constructor
     * @param {ITermV2=} [p] Properties to set
     */
    function TermV2(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TermV2 variable.
     * @member {number|null|undefined} variable
     * @memberof TermV2
     * @instance
     */
    TermV2.prototype.variable = null;

    /**
     * TermV2 integer.
     * @member {number|Long|null|undefined} integer
     * @memberof TermV2
     * @instance
     */
    TermV2.prototype.integer = null;

    /**
     * TermV2 string.
     * @member {number|Long|null|undefined} string
     * @memberof TermV2
     * @instance
     */
    TermV2.prototype.string = null;

    /**
     * TermV2 date.
     * @member {number|Long|null|undefined} date
     * @memberof TermV2
     * @instance
     */
    TermV2.prototype.date = null;

    /**
     * TermV2 bytes.
     * @member {Uint8Array|null|undefined} bytes
     * @memberof TermV2
     * @instance
     */
    TermV2.prototype.bytes = null;

    /**
     * TermV2 bool.
     * @member {boolean|null|undefined} bool
     * @memberof TermV2
     * @instance
     */
    TermV2.prototype.bool = null;

    /**
     * TermV2 set.
     * @member {ITermSet|null|undefined} set
     * @memberof TermV2
     * @instance
     */
    TermV2.prototype.set = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * TermV2 Content.
     * @member {"variable"|"integer"|"string"|"date"|"bytes"|"bool"|"set"|undefined} Content
     * @memberof TermV2
     * @instance
     */
    Object.defineProperty(TermV2.prototype, "Content", {
        get: $util.oneOfGetter($oneOfFields = ["variable", "integer", "string", "date", "bytes", "bool", "set"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified TermV2 message. Does not implicitly {@link TermV2.verify|verify} messages.
     * @function encode
     * @memberof TermV2
     * @static
     * @param {ITermV2} m TermV2 message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TermV2.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.variable != null && Object.hasOwnProperty.call(m, "variable"))
            w.uint32(8).uint32(m.variable);
        if (m.integer != null && Object.hasOwnProperty.call(m, "integer"))
            w.uint32(16).int64(m.integer);
        if (m.string != null && Object.hasOwnProperty.call(m, "string"))
            w.uint32(24).uint64(m.string);
        if (m.date != null && Object.hasOwnProperty.call(m, "date"))
            w.uint32(32).uint64(m.date);
        if (m.bytes != null && Object.hasOwnProperty.call(m, "bytes"))
            w.uint32(42).bytes(m.bytes);
        if (m.bool != null && Object.hasOwnProperty.call(m, "bool"))
            w.uint32(48).bool(m.bool);
        if (m.set != null && Object.hasOwnProperty.call(m, "set"))
            $root.TermSet.encode(m.set, w.uint32(58).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a TermV2 message from the specified reader or buffer.
     * @function decode
     * @memberof TermV2
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TermV2} TermV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TermV2.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TermV2();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.variable = r.uint32();
                    break;
                }
            case 2: {
                    m.integer = r.int64();
                    break;
                }
            case 3: {
                    m.string = r.uint64();
                    break;
                }
            case 4: {
                    m.date = r.uint64();
                    break;
                }
            case 5: {
                    m.bytes = r.bytes();
                    break;
                }
            case 6: {
                    m.bool = r.bool();
                    break;
                }
            case 7: {
                    m.set = $root.TermSet.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for TermV2
     * @function getTypeUrl
     * @memberof TermV2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TermV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TermV2";
    };

    return TermV2;
})();

export const TermSet = $root.TermSet = (() => {

    /**
     * Properties of a TermSet.
     * @exports ITermSet
     * @interface ITermSet
     * @property {Array.<ITermV2>|null} [set] TermSet set
     */

    /**
     * Constructs a new TermSet.
     * @exports TermSet
     * @classdesc Represents a TermSet.
     * @implements ITermSet
     * @constructor
     * @param {ITermSet=} [p] Properties to set
     */
    function TermSet(p) {
        this.set = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TermSet set.
     * @member {Array.<ITermV2>} set
     * @memberof TermSet
     * @instance
     */
    TermSet.prototype.set = $util.emptyArray;

    /**
     * Encodes the specified TermSet message. Does not implicitly {@link TermSet.verify|verify} messages.
     * @function encode
     * @memberof TermSet
     * @static
     * @param {ITermSet} m TermSet message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TermSet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.set != null && m.set.length) {
            for (var i = 0; i < m.set.length; ++i)
                $root.TermV2.encode(m.set[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a TermSet message from the specified reader or buffer.
     * @function decode
     * @memberof TermSet
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TermSet} TermSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TermSet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TermSet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.set && m.set.length))
                        m.set = [];
                    m.set.push($root.TermV2.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for TermSet
     * @function getTypeUrl
     * @memberof TermSet
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TermSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TermSet";
    };

    return TermSet;
})();

export const ExpressionV2 = $root.ExpressionV2 = (() => {

    /**
     * Properties of an ExpressionV2.
     * @exports IExpressionV2
     * @interface IExpressionV2
     * @property {Array.<IOp>|null} [ops] ExpressionV2 ops
     */

    /**
     * Constructs a new ExpressionV2.
     * @exports ExpressionV2
     * @classdesc Represents an ExpressionV2.
     * @implements IExpressionV2
     * @constructor
     * @param {IExpressionV2=} [p] Properties to set
     */
    function ExpressionV2(p) {
        this.ops = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ExpressionV2 ops.
     * @member {Array.<IOp>} ops
     * @memberof ExpressionV2
     * @instance
     */
    ExpressionV2.prototype.ops = $util.emptyArray;

    /**
     * Encodes the specified ExpressionV2 message. Does not implicitly {@link ExpressionV2.verify|verify} messages.
     * @function encode
     * @memberof ExpressionV2
     * @static
     * @param {IExpressionV2} m ExpressionV2 message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ExpressionV2.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.ops != null && m.ops.length) {
            for (var i = 0; i < m.ops.length; ++i)
                $root.Op.encode(m.ops[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an ExpressionV2 message from the specified reader or buffer.
     * @function decode
     * @memberof ExpressionV2
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ExpressionV2} ExpressionV2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ExpressionV2.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ExpressionV2();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.ops && m.ops.length))
                        m.ops = [];
                    m.ops.push($root.Op.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for ExpressionV2
     * @function getTypeUrl
     * @memberof ExpressionV2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ExpressionV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ExpressionV2";
    };

    return ExpressionV2;
})();

export const Op = $root.Op = (() => {

    /**
     * Properties of an Op.
     * @exports IOp
     * @interface IOp
     * @property {ITermV2|null} [value] Op value
     * @property {IOpUnary|null} [unary] Op unary
     * @property {IOpBinary|null} [Binary] Op Binary
     */

    /**
     * Constructs a new Op.
     * @exports Op
     * @classdesc Represents an Op.
     * @implements IOp
     * @constructor
     * @param {IOp=} [p] Properties to set
     */
    function Op(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Op value.
     * @member {ITermV2|null|undefined} value
     * @memberof Op
     * @instance
     */
    Op.prototype.value = null;

    /**
     * Op unary.
     * @member {IOpUnary|null|undefined} unary
     * @memberof Op
     * @instance
     */
    Op.prototype.unary = null;

    /**
     * Op Binary.
     * @member {IOpBinary|null|undefined} Binary
     * @memberof Op
     * @instance
     */
    Op.prototype.Binary = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Op Content.
     * @member {"value"|"unary"|"Binary"|undefined} Content
     * @memberof Op
     * @instance
     */
    Object.defineProperty(Op.prototype, "Content", {
        get: $util.oneOfGetter($oneOfFields = ["value", "unary", "Binary"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Encodes the specified Op message. Does not implicitly {@link Op.verify|verify} messages.
     * @function encode
     * @memberof Op
     * @static
     * @param {IOp} m Op message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Op.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.value != null && Object.hasOwnProperty.call(m, "value"))
            $root.TermV2.encode(m.value, w.uint32(10).fork()).ldelim();
        if (m.unary != null && Object.hasOwnProperty.call(m, "unary"))
            $root.OpUnary.encode(m.unary, w.uint32(18).fork()).ldelim();
        if (m.Binary != null && Object.hasOwnProperty.call(m, "Binary"))
            $root.OpBinary.encode(m.Binary, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes an Op message from the specified reader or buffer.
     * @function decode
     * @memberof Op
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Op} Op
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Op.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Op();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.value = $root.TermV2.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    m.unary = $root.OpUnary.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.Binary = $root.OpBinary.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for Op
     * @function getTypeUrl
     * @memberof Op
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Op.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Op";
    };

    return Op;
})();

export const OpUnary = $root.OpUnary = (() => {

    /**
     * Properties of an OpUnary.
     * @exports IOpUnary
     * @interface IOpUnary
     * @property {OpUnary.Kind} kind OpUnary kind
     */

    /**
     * Constructs a new OpUnary.
     * @exports OpUnary
     * @classdesc Represents an OpUnary.
     * @implements IOpUnary
     * @constructor
     * @param {IOpUnary=} [p] Properties to set
     */
    function OpUnary(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OpUnary kind.
     * @member {OpUnary.Kind} kind
     * @memberof OpUnary
     * @instance
     */
    OpUnary.prototype.kind = 0;

    /**
     * Encodes the specified OpUnary message. Does not implicitly {@link OpUnary.verify|verify} messages.
     * @function encode
     * @memberof OpUnary
     * @static
     * @param {IOpUnary} m OpUnary message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpUnary.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.kind);
        return w;
    };

    /**
     * Decodes an OpUnary message from the specified reader or buffer.
     * @function decode
     * @memberof OpUnary
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OpUnary} OpUnary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpUnary.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OpUnary();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.kind = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("kind"))
            throw $util.ProtocolError("missing required 'kind'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for OpUnary
     * @function getTypeUrl
     * @memberof OpUnary
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OpUnary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/OpUnary";
    };

    /**
     * Kind enum.
     * @name OpUnary.Kind
     * @enum {number}
     * @property {number} Negate=0 Negate value
     * @property {number} Parens=1 Parens value
     * @property {number} Length=2 Length value
     */
    OpUnary.Kind = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Negate"] = 0;
        values[valuesById[1] = "Parens"] = 1;
        values[valuesById[2] = "Length"] = 2;
        return values;
    })();

    return OpUnary;
})();

export const OpBinary = $root.OpBinary = (() => {

    /**
     * Properties of an OpBinary.
     * @exports IOpBinary
     * @interface IOpBinary
     * @property {OpBinary.Kind} kind OpBinary kind
     */

    /**
     * Constructs a new OpBinary.
     * @exports OpBinary
     * @classdesc Represents an OpBinary.
     * @implements IOpBinary
     * @constructor
     * @param {IOpBinary=} [p] Properties to set
     */
    function OpBinary(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * OpBinary kind.
     * @member {OpBinary.Kind} kind
     * @memberof OpBinary
     * @instance
     */
    OpBinary.prototype.kind = 0;

    /**
     * Encodes the specified OpBinary message. Does not implicitly {@link OpBinary.verify|verify} messages.
     * @function encode
     * @memberof OpBinary
     * @static
     * @param {IOpBinary} m OpBinary message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OpBinary.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.kind);
        return w;
    };

    /**
     * Decodes an OpBinary message from the specified reader or buffer.
     * @function decode
     * @memberof OpBinary
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {OpBinary} OpBinary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OpBinary.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.OpBinary();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.kind = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("kind"))
            throw $util.ProtocolError("missing required 'kind'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for OpBinary
     * @function getTypeUrl
     * @memberof OpBinary
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OpBinary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/OpBinary";
    };

    /**
     * Kind enum.
     * @name OpBinary.Kind
     * @enum {number}
     * @property {number} LessThan=0 LessThan value
     * @property {number} GreaterThan=1 GreaterThan value
     * @property {number} LessOrEqual=2 LessOrEqual value
     * @property {number} GreaterOrEqual=3 GreaterOrEqual value
     * @property {number} Equal=4 Equal value
     * @property {number} Contains=5 Contains value
     * @property {number} Prefix=6 Prefix value
     * @property {number} Suffix=7 Suffix value
     * @property {number} Regex=8 Regex value
     * @property {number} Add=9 Add value
     * @property {number} Sub=10 Sub value
     * @property {number} Mul=11 Mul value
     * @property {number} Div=12 Div value
     * @property {number} And=13 And value
     * @property {number} Or=14 Or value
     * @property {number} Intersection=15 Intersection value
     * @property {number} Union=16 Union value
     * @property {number} BitwiseAnd=17 BitwiseAnd value
     * @property {number} BitwiseOr=18 BitwiseOr value
     * @property {number} BitwiseXor=19 BitwiseXor value
     * @property {number} NotEqual=20 NotEqual value
     */
    OpBinary.Kind = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LessThan"] = 0;
        values[valuesById[1] = "GreaterThan"] = 1;
        values[valuesById[2] = "LessOrEqual"] = 2;
        values[valuesById[3] = "GreaterOrEqual"] = 3;
        values[valuesById[4] = "Equal"] = 4;
        values[valuesById[5] = "Contains"] = 5;
        values[valuesById[6] = "Prefix"] = 6;
        values[valuesById[7] = "Suffix"] = 7;
        values[valuesById[8] = "Regex"] = 8;
        values[valuesById[9] = "Add"] = 9;
        values[valuesById[10] = "Sub"] = 10;
        values[valuesById[11] = "Mul"] = 11;
        values[valuesById[12] = "Div"] = 12;
        values[valuesById[13] = "And"] = 13;
        values[valuesById[14] = "Or"] = 14;
        values[valuesById[15] = "Intersection"] = 15;
        values[valuesById[16] = "Union"] = 16;
        values[valuesById[17] = "BitwiseAnd"] = 17;
        values[valuesById[18] = "BitwiseOr"] = 18;
        values[valuesById[19] = "BitwiseXor"] = 19;
        values[valuesById[20] = "NotEqual"] = 20;
        return values;
    })();

    return OpBinary;
})();

export const Policy = $root.Policy = (() => {

    /**
     * Properties of a Policy.
     * @exports IPolicy
     * @interface IPolicy
     * @property {Array.<IRuleV2>|null} [queries] Policy queries
     * @property {Policy.Kind} kind Policy kind
     */

    /**
     * Constructs a new Policy.
     * @exports Policy
     * @classdesc Represents a Policy.
     * @implements IPolicy
     * @constructor
     * @param {IPolicy=} [p] Properties to set
     */
    function Policy(p) {
        this.queries = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Policy queries.
     * @member {Array.<IRuleV2>} queries
     * @memberof Policy
     * @instance
     */
    Policy.prototype.queries = $util.emptyArray;

    /**
     * Policy kind.
     * @member {Policy.Kind} kind
     * @memberof Policy
     * @instance
     */
    Policy.prototype.kind = 0;

    /**
     * Encodes the specified Policy message. Does not implicitly {@link Policy.verify|verify} messages.
     * @function encode
     * @memberof Policy
     * @static
     * @param {IPolicy} m Policy message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Policy.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.queries != null && m.queries.length) {
            for (var i = 0; i < m.queries.length; ++i)
                $root.RuleV2.encode(m.queries[i], w.uint32(10).fork()).ldelim();
        }
        w.uint32(16).int32(m.kind);
        return w;
    };

    /**
     * Decodes a Policy message from the specified reader or buffer.
     * @function decode
     * @memberof Policy
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Policy} Policy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Policy.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Policy();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.queries && m.queries.length))
                        m.queries = [];
                    m.queries.push($root.RuleV2.decode(r, r.uint32()));
                    break;
                }
            case 2: {
                    m.kind = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("kind"))
            throw $util.ProtocolError("missing required 'kind'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for Policy
     * @function getTypeUrl
     * @memberof Policy
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Policy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Policy";
    };

    /**
     * Kind enum.
     * @name Policy.Kind
     * @enum {number}
     * @property {number} Allow=0 Allow value
     * @property {number} Deny=1 Deny value
     */
    Policy.Kind = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Allow"] = 0;
        values[valuesById[1] = "Deny"] = 1;
        return values;
    })();

    return Policy;
})();

export const AuthorizerPolicies = $root.AuthorizerPolicies = (() => {

    /**
     * Properties of an AuthorizerPolicies.
     * @exports IAuthorizerPolicies
     * @interface IAuthorizerPolicies
     * @property {Array.<string>|null} [symbols] AuthorizerPolicies symbols
     * @property {number|null} [version] AuthorizerPolicies version
     * @property {Array.<IFactV2>|null} [facts] AuthorizerPolicies facts
     * @property {Array.<IRuleV2>|null} [rules] AuthorizerPolicies rules
     * @property {Array.<ICheckV2>|null} [checks] AuthorizerPolicies checks
     * @property {Array.<IPolicy>|null} [policies] AuthorizerPolicies policies
     */

    /**
     * Constructs a new AuthorizerPolicies.
     * @exports AuthorizerPolicies
     * @classdesc Represents an AuthorizerPolicies.
     * @implements IAuthorizerPolicies
     * @constructor
     * @param {IAuthorizerPolicies=} [p] Properties to set
     */
    function AuthorizerPolicies(p) {
        this.symbols = [];
        this.facts = [];
        this.rules = [];
        this.checks = [];
        this.policies = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AuthorizerPolicies symbols.
     * @member {Array.<string>} symbols
     * @memberof AuthorizerPolicies
     * @instance
     */
    AuthorizerPolicies.prototype.symbols = $util.emptyArray;

    /**
     * AuthorizerPolicies version.
     * @member {number} version
     * @memberof AuthorizerPolicies
     * @instance
     */
    AuthorizerPolicies.prototype.version = 0;

    /**
     * AuthorizerPolicies facts.
     * @member {Array.<IFactV2>} facts
     * @memberof AuthorizerPolicies
     * @instance
     */
    AuthorizerPolicies.prototype.facts = $util.emptyArray;

    /**
     * AuthorizerPolicies rules.
     * @member {Array.<IRuleV2>} rules
     * @memberof AuthorizerPolicies
     * @instance
     */
    AuthorizerPolicies.prototype.rules = $util.emptyArray;

    /**
     * AuthorizerPolicies checks.
     * @member {Array.<ICheckV2>} checks
     * @memberof AuthorizerPolicies
     * @instance
     */
    AuthorizerPolicies.prototype.checks = $util.emptyArray;

    /**
     * AuthorizerPolicies policies.
     * @member {Array.<IPolicy>} policies
     * @memberof AuthorizerPolicies
     * @instance
     */
    AuthorizerPolicies.prototype.policies = $util.emptyArray;

    /**
     * Encodes the specified AuthorizerPolicies message. Does not implicitly {@link AuthorizerPolicies.verify|verify} messages.
     * @function encode
     * @memberof AuthorizerPolicies
     * @static
     * @param {IAuthorizerPolicies} m AuthorizerPolicies message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthorizerPolicies.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.symbols != null && m.symbols.length) {
            for (var i = 0; i < m.symbols.length; ++i)
                w.uint32(10).string(m.symbols[i]);
        }
        if (m.version != null && Object.hasOwnProperty.call(m, "version"))
            w.uint32(16).uint32(m.version);
        if (m.facts != null && m.facts.length) {
            for (var i = 0; i < m.facts.length; ++i)
                $root.FactV2.encode(m.facts[i], w.uint32(26).fork()).ldelim();
        }
        if (m.rules != null && m.rules.length) {
            for (var i = 0; i < m.rules.length; ++i)
                $root.RuleV2.encode(m.rules[i], w.uint32(34).fork()).ldelim();
        }
        if (m.checks != null && m.checks.length) {
            for (var i = 0; i < m.checks.length; ++i)
                $root.CheckV2.encode(m.checks[i], w.uint32(42).fork()).ldelim();
        }
        if (m.policies != null && m.policies.length) {
            for (var i = 0; i < m.policies.length; ++i)
                $root.Policy.encode(m.policies[i], w.uint32(50).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an AuthorizerPolicies message from the specified reader or buffer.
     * @function decode
     * @memberof AuthorizerPolicies
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AuthorizerPolicies} AuthorizerPolicies
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthorizerPolicies.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AuthorizerPolicies();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.symbols && m.symbols.length))
                        m.symbols = [];
                    m.symbols.push(r.string());
                    break;
                }
            case 2: {
                    m.version = r.uint32();
                    break;
                }
            case 3: {
                    if (!(m.facts && m.facts.length))
                        m.facts = [];
                    m.facts.push($root.FactV2.decode(r, r.uint32()));
                    break;
                }
            case 4: {
                    if (!(m.rules && m.rules.length))
                        m.rules = [];
                    m.rules.push($root.RuleV2.decode(r, r.uint32()));
                    break;
                }
            case 5: {
                    if (!(m.checks && m.checks.length))
                        m.checks = [];
                    m.checks.push($root.CheckV2.decode(r, r.uint32()));
                    break;
                }
            case 6: {
                    if (!(m.policies && m.policies.length))
                        m.policies = [];
                    m.policies.push($root.Policy.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for AuthorizerPolicies
     * @function getTypeUrl
     * @memberof AuthorizerPolicies
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AuthorizerPolicies.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AuthorizerPolicies";
    };

    return AuthorizerPolicies;
})();

export const ThirdPartyBlockRequest = $root.ThirdPartyBlockRequest = (() => {

    /**
     * Properties of a ThirdPartyBlockRequest.
     * @exports IThirdPartyBlockRequest
     * @interface IThirdPartyBlockRequest
     * @property {IPublicKey} previousKey ThirdPartyBlockRequest previousKey
     * @property {Array.<IPublicKey>|null} [publicKeys] ThirdPartyBlockRequest publicKeys
     */

    /**
     * Constructs a new ThirdPartyBlockRequest.
     * @exports ThirdPartyBlockRequest
     * @classdesc Represents a ThirdPartyBlockRequest.
     * @implements IThirdPartyBlockRequest
     * @constructor
     * @param {IThirdPartyBlockRequest=} [p] Properties to set
     */
    function ThirdPartyBlockRequest(p) {
        this.publicKeys = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ThirdPartyBlockRequest previousKey.
     * @member {IPublicKey} previousKey
     * @memberof ThirdPartyBlockRequest
     * @instance
     */
    ThirdPartyBlockRequest.prototype.previousKey = null;

    /**
     * ThirdPartyBlockRequest publicKeys.
     * @member {Array.<IPublicKey>} publicKeys
     * @memberof ThirdPartyBlockRequest
     * @instance
     */
    ThirdPartyBlockRequest.prototype.publicKeys = $util.emptyArray;

    /**
     * Encodes the specified ThirdPartyBlockRequest message. Does not implicitly {@link ThirdPartyBlockRequest.verify|verify} messages.
     * @function encode
     * @memberof ThirdPartyBlockRequest
     * @static
     * @param {IThirdPartyBlockRequest} m ThirdPartyBlockRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThirdPartyBlockRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        $root.PublicKey.encode(m.previousKey, w.uint32(10).fork()).ldelim();
        if (m.publicKeys != null && m.publicKeys.length) {
            for (var i = 0; i < m.publicKeys.length; ++i)
                $root.PublicKey.encode(m.publicKeys[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a ThirdPartyBlockRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ThirdPartyBlockRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ThirdPartyBlockRequest} ThirdPartyBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThirdPartyBlockRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ThirdPartyBlockRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.previousKey = $root.PublicKey.decode(r, r.uint32());
                    break;
                }
            case 2: {
                    if (!(m.publicKeys && m.publicKeys.length))
                        m.publicKeys = [];
                    m.publicKeys.push($root.PublicKey.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("previousKey"))
            throw $util.ProtocolError("missing required 'previousKey'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for ThirdPartyBlockRequest
     * @function getTypeUrl
     * @memberof ThirdPartyBlockRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ThirdPartyBlockRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ThirdPartyBlockRequest";
    };

    return ThirdPartyBlockRequest;
})();

export const ThirdPartyBlockContents = $root.ThirdPartyBlockContents = (() => {

    /**
     * Properties of a ThirdPartyBlockContents.
     * @exports IThirdPartyBlockContents
     * @interface IThirdPartyBlockContents
     * @property {Uint8Array} payload ThirdPartyBlockContents payload
     * @property {IExternalSignature} externalSignature ThirdPartyBlockContents externalSignature
     */

    /**
     * Constructs a new ThirdPartyBlockContents.
     * @exports ThirdPartyBlockContents
     * @classdesc Represents a ThirdPartyBlockContents.
     * @implements IThirdPartyBlockContents
     * @constructor
     * @param {IThirdPartyBlockContents=} [p] Properties to set
     */
    function ThirdPartyBlockContents(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ThirdPartyBlockContents payload.
     * @member {Uint8Array} payload
     * @memberof ThirdPartyBlockContents
     * @instance
     */
    ThirdPartyBlockContents.prototype.payload = $util.newBuffer([]);

    /**
     * ThirdPartyBlockContents externalSignature.
     * @member {IExternalSignature} externalSignature
     * @memberof ThirdPartyBlockContents
     * @instance
     */
    ThirdPartyBlockContents.prototype.externalSignature = null;

    /**
     * Encodes the specified ThirdPartyBlockContents message. Does not implicitly {@link ThirdPartyBlockContents.verify|verify} messages.
     * @function encode
     * @memberof ThirdPartyBlockContents
     * @static
     * @param {IThirdPartyBlockContents} m ThirdPartyBlockContents message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThirdPartyBlockContents.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).bytes(m.payload);
        $root.ExternalSignature.encode(m.externalSignature, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a ThirdPartyBlockContents message from the specified reader or buffer.
     * @function decode
     * @memberof ThirdPartyBlockContents
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ThirdPartyBlockContents} ThirdPartyBlockContents
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThirdPartyBlockContents.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ThirdPartyBlockContents();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.payload = r.bytes();
                    break;
                }
            case 2: {
                    m.externalSignature = $root.ExternalSignature.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("payload"))
            throw $util.ProtocolError("missing required 'payload'", { instance: m });
        if (!m.hasOwnProperty("externalSignature"))
            throw $util.ProtocolError("missing required 'externalSignature'", { instance: m });
        return m;
    };

    /**
     * Gets the default type url for ThirdPartyBlockContents
     * @function getTypeUrl
     * @memberof ThirdPartyBlockContents
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ThirdPartyBlockContents.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ThirdPartyBlockContents";
    };

    return ThirdPartyBlockContents;
})();

export { $root as default };
