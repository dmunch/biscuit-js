// Generated from DatalogParser.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import DatalogParserListener from './DatalogParserListener.js';
import DatalogParserVisitor from './DatalogParserVisitor.js';

const serializedATN = [4,1,44,235,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,5,0,42,8,0,10,0,12,0,45,9,0,1,0,1,0,1,1,1,1,1,1,3,1,52,8,1,1,1,1,1,1,2,
1,2,1,2,1,2,5,2,60,8,2,10,2,12,2,63,9,2,1,3,1,3,1,3,1,3,1,3,3,3,70,8,3,1,
4,1,4,1,5,5,5,75,8,5,10,5,12,5,78,9,5,1,6,1,6,1,6,3,6,83,8,6,1,6,1,6,1,7,
1,7,1,7,1,7,1,7,5,7,92,8,7,10,7,12,7,95,9,7,1,7,1,7,1,7,3,7,100,8,7,1,8,
1,8,1,8,1,8,1,8,5,8,107,8,8,10,8,12,8,110,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
10,1,10,1,10,1,10,1,10,5,10,123,8,10,10,10,12,10,126,9,10,1,11,1,11,1,11,
1,11,1,11,5,11,133,8,11,10,11,12,11,136,9,11,1,12,1,12,1,12,5,12,141,8,12,
10,12,12,12,144,9,12,1,12,3,12,147,8,12,1,13,1,13,3,13,151,8,13,1,14,1,14,
1,14,1,14,1,14,5,14,158,8,14,10,14,12,14,161,9,14,1,14,1,14,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,174,8,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,194,
8,15,10,15,12,15,197,9,15,3,15,199,8,15,1,15,5,15,202,8,15,10,15,12,15,205,
9,15,1,16,1,16,1,16,1,16,5,16,211,8,16,10,16,12,16,214,9,16,3,16,216,8,16,
1,16,1,16,1,17,1,17,3,17,222,8,17,1,18,1,18,3,18,226,8,18,1,19,1,19,1,19,
1,19,1,19,3,19,233,8,19,1,19,0,1,30,20,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,0,6,1,0,32,33,1,0,35,36,1,0,20,21,1,0,22,23,1,0,24,
25,1,0,26,30,250,0,43,1,0,0,0,2,51,1,0,0,0,4,55,1,0,0,0,6,69,1,0,0,0,8,71,
1,0,0,0,10,76,1,0,0,0,12,82,1,0,0,0,14,86,1,0,0,0,16,101,1,0,0,0,18,113,
1,0,0,0,20,117,1,0,0,0,22,127,1,0,0,0,24,137,1,0,0,0,26,150,1,0,0,0,28,152,
1,0,0,0,30,173,1,0,0,0,32,206,1,0,0,0,34,221,1,0,0,0,36,225,1,0,0,0,38,232,
1,0,0,0,40,42,3,2,1,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,
0,0,0,44,46,1,0,0,0,45,43,1,0,0,0,46,47,5,0,0,1,47,1,1,0,0,0,48,52,3,14,
7,0,49,52,3,22,11,0,50,52,3,20,10,0,51,48,1,0,0,0,51,49,1,0,0,0,51,50,1,
0,0,0,52,53,1,0,0,0,53,54,5,10,0,0,54,3,1,0,0,0,55,56,5,8,0,0,56,61,3,6,
3,0,57,58,5,9,0,0,58,60,3,6,3,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,
0,61,62,1,0,0,0,62,5,1,0,0,0,63,61,1,0,0,0,64,70,5,15,0,0,65,70,5,16,0,0,
66,67,3,8,4,0,67,68,5,5,0,0,68,70,1,0,0,0,69,64,1,0,0,0,69,65,1,0,0,0,69,
66,1,0,0,0,70,7,1,0,0,0,71,72,5,17,0,0,72,9,1,0,0,0,73,75,3,12,6,0,74,73,
1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,11,1,0,0,0,78,76,1,
0,0,0,79,83,3,20,10,0,80,83,3,16,8,0,81,83,3,14,7,0,82,79,1,0,0,0,82,80,
1,0,0,0,82,81,1,0,0,0,83,84,1,0,0,0,84,85,5,10,0,0,85,13,1,0,0,0,86,87,5,
42,0,0,87,88,5,11,0,0,88,93,3,34,17,0,89,90,5,9,0,0,90,92,3,34,17,0,91,89,
1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,
0,0,0,96,99,5,12,0,0,97,98,5,18,0,0,98,100,3,24,12,0,99,97,1,0,0,0,99,100,
1,0,0,0,100,15,1,0,0,0,101,102,5,42,0,0,102,103,5,11,0,0,103,108,3,36,18,
0,104,105,5,9,0,0,105,107,3,36,18,0,106,104,1,0,0,0,107,110,1,0,0,0,108,
106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,108,1,0,0,0,111,112,5,12,
0,0,112,17,1,0,0,0,113,114,3,28,14,0,114,115,5,18,0,0,115,116,3,24,12,0,
116,19,1,0,0,0,117,118,5,31,0,0,118,119,7,0,0,0,119,124,3,24,12,0,120,121,
5,34,0,0,121,123,3,24,12,0,122,120,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,
0,124,125,1,0,0,0,125,21,1,0,0,0,126,124,1,0,0,0,127,128,7,1,0,0,128,129,
5,32,0,0,129,134,3,24,12,0,130,131,5,34,0,0,131,133,3,24,12,0,132,130,1,
0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,23,1,0,0,0,136,
134,1,0,0,0,137,142,3,26,13,0,138,139,5,9,0,0,139,141,3,26,13,0,140,138,
1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,146,1,0,0,0,
144,142,1,0,0,0,145,147,3,4,2,0,146,145,1,0,0,0,146,147,1,0,0,0,147,25,1,
0,0,0,148,151,3,28,14,0,149,151,3,30,15,0,150,148,1,0,0,0,150,149,1,0,0,
0,151,27,1,0,0,0,152,153,5,42,0,0,153,154,5,11,0,0,154,159,3,34,17,0,155,
156,5,9,0,0,156,158,3,34,17,0,157,155,1,0,0,0,158,161,1,0,0,0,159,157,1,
0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,163,5,12,0,0,163,
29,1,0,0,0,164,165,6,15,-1,0,165,166,5,19,0,0,166,174,3,30,15,9,167,168,
5,11,0,0,168,169,3,30,15,0,169,170,5,12,0,0,170,174,1,0,0,0,171,174,3,36,
18,0,172,174,5,1,0,0,173,164,1,0,0,0,173,167,1,0,0,0,173,171,1,0,0,0,173,
172,1,0,0,0,174,203,1,0,0,0,175,176,10,6,0,0,176,177,7,2,0,0,177,202,3,30,
15,7,178,179,10,5,0,0,179,180,7,3,0,0,180,202,3,30,15,6,181,182,10,4,0,0,
182,183,7,4,0,0,183,202,3,30,15,5,184,185,10,3,0,0,185,186,7,5,0,0,186,202,
3,30,15,4,187,188,10,7,0,0,188,189,5,41,0,0,189,198,5,11,0,0,190,195,3,34,
17,0,191,192,5,9,0,0,192,194,3,34,17,0,193,191,1,0,0,0,194,197,1,0,0,0,195,
193,1,0,0,0,195,196,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,198,190,1,0,
0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,202,5,12,0,0,201,175,1,0,0,0,201,
178,1,0,0,0,201,181,1,0,0,0,201,184,1,0,0,0,201,187,1,0,0,0,202,205,1,0,
0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,31,1,0,0,0,205,203,1,0,0,0,206,215,
5,13,0,0,207,212,3,36,18,0,208,209,5,9,0,0,209,211,3,38,19,0,210,208,1,0,
0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,216,1,0,0,0,214,
212,1,0,0,0,215,207,1,0,0,0,215,216,1,0,0,0,216,217,1,0,0,0,217,218,5,14,
0,0,218,33,1,0,0,0,219,222,3,36,18,0,220,222,5,1,0,0,221,219,1,0,0,0,221,
220,1,0,0,0,222,35,1,0,0,0,223,226,3,38,19,0,224,226,3,32,16,0,225,223,1,
0,0,0,225,224,1,0,0,0,226,37,1,0,0,0,227,233,5,6,0,0,228,233,5,2,0,0,229,
233,5,3,0,0,230,233,5,4,0,0,231,233,5,7,0,0,232,227,1,0,0,0,232,228,1,0,
0,0,232,229,1,0,0,0,232,230,1,0,0,0,232,231,1,0,0,0,233,39,1,0,0,0,25,43,
51,61,69,76,82,93,99,108,124,134,142,146,150,159,173,195,198,201,203,212,
215,221,225,232];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DatalogParser extends antlr4.Parser {

    static grammarFileName = "DatalogParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            "'trusting'", "','", "';'", "'('", "')'", "'['", 
                            "']'", "'authority'", "'previous'", "'ed25519'", 
                            "'<-'", "'!'", "'*'", "'/'", "'+'", "'-'", "'&&'", 
                            "'||'", "'>'", "'>='", "'<'", "'<='", "'=='", 
                            "'check'", "'if'", "'all'", "'or'", "'allow'", 
                            "'deny'", null, "'/*'", "'*/'" ];
    static symbolicNames = [ null, "VARIABLE", "STRING", "NUMBER", "BYTES", 
                             "PUBLICKEYBYTES", "BOOLEAN", "DATE", "TRUSTING", 
                             "COMMA", "SEMICOL", "LPARENS", "RPARENS", "LSPARENS", 
                             "RSPARENS", "AUTHORITY", "PREVIOUS", "ED25519", 
                             "RULEOP", "OP_NOT", "OP_MUL", "OP_DIV", "OP_SUM", 
                             "OP_SUB", "OP_AND", "OP_OR", "OP_G", "OP_GE", 
                             "OP_L", "OP_LE", "OP_EQUAL", "CHECK", "IF", 
                             "ALL", "OR", "ALLOW", "DENY", "SINGLE_LINE_COMMENT", 
                             "DELIMITED_COMMENT_START", "DELIMITED_COMMENT_END", 
                             "DELIMITED_COMMENT", "METHOD_INVOCATION", "NAME", 
                             "WS", "ANY" ];
    static ruleNames = [ "authorizer", "authorizer_element", "origin_clause", 
                         "origin_element", "signature_alg", "block", "block_element", 
                         "fact_or_rule", "fact", "rule_", "check", "policy", 
                         "rule_body", "rule_body_element", "predicate", 
                         "expression", "set", "term", "fact_term", "set_term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DatalogParser.ruleNames;
        this.literalNames = DatalogParser.literalNames;
        this.symbolicNames = DatalogParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 15:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	authorizer() {
	    let localctx = new AuthorizerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DatalogParser.RULE_authorizer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 2097) !== 0)) {
	            this.state = 40;
	            this.authorizer_element();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this.match(DatalogParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	authorizer_element() {
	    let localctx = new Authorizer_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DatalogParser.RULE_authorizer_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.state = 48;
	            this.fact_or_rule();
	            break;
	        case 35:
	        case 36:
	            this.state = 49;
	            this.policy();
	            break;
	        case 31:
	            this.state = 50;
	            this.check();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 53;
	        this.match(DatalogParser.SEMICOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	origin_clause() {
	    let localctx = new Origin_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DatalogParser.RULE_origin_clause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(DatalogParser.TRUSTING);
	        this.state = 56;
	        this.origin_element();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 57;
	            this.match(DatalogParser.COMMA);
	            this.state = 58;
	            this.origin_element();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	origin_element() {
	    let localctx = new Origin_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DatalogParser.RULE_origin_element);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            localctx = new OriginElementAuthorityContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(DatalogParser.AUTHORITY);
	            break;
	        case 16:
	            localctx = new OriginElementPreviousContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(DatalogParser.PREVIOUS);
	            break;
	        case 17:
	            localctx = new OriginElementPublicKeyContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.signature_alg();
	            this.state = 67;
	            this.match(DatalogParser.PUBLICKEYBYTES);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signature_alg() {
	    let localctx = new Signature_algContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DatalogParser.RULE_signature_alg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(DatalogParser.ED25519);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DatalogParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31 || _la===42) {
	            this.state = 73;
	            this.block_element();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block_element() {
	    let localctx = new Block_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DatalogParser.RULE_block_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 79;
	            this.check();
	            break;

	        case 2:
	            this.state = 80;
	            this.fact();
	            break;

	        case 3:
	            this.state = 81;
	            this.fact_or_rule();
	            break;

	        }
	        this.state = 84;
	        this.match(DatalogParser.SEMICOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fact_or_rule() {
	    let localctx = new Fact_or_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DatalogParser.RULE_fact_or_rule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(DatalogParser.NAME);
	        this.state = 87;
	        this.match(DatalogParser.LPARENS);
	        this.state = 88;
	        this.term();
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 89;
	            this.match(DatalogParser.COMMA);
	            this.state = 90;
	            this.term();
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
	        this.match(DatalogParser.RPARENS);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 97;
	            this.match(DatalogParser.RULEOP);
	            this.state = 98;
	            this.rule_body();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fact() {
	    let localctx = new FactContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DatalogParser.RULE_fact);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(DatalogParser.NAME);
	        this.state = 102;
	        this.match(DatalogParser.LPARENS);
	        this.state = 103;
	        this.fact_term();
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 104;
	            this.match(DatalogParser.COMMA);
	            this.state = 105;
	            this.fact_term();
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 111;
	        this.match(DatalogParser.RPARENS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rule_() {
	    let localctx = new Rule_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DatalogParser.RULE_rule_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.predicate();
	        this.state = 114;
	        this.match(DatalogParser.RULEOP);
	        this.state = 115;
	        this.rule_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	check() {
	    let localctx = new CheckContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DatalogParser.RULE_check);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(DatalogParser.CHECK);
	        this.state = 118;
	        localctx.kind = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
	            localctx.kind = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 119;
	        this.rule_body();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 120;
	            this.match(DatalogParser.OR);
	            this.state = 121;
	            this.rule_body();
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	policy() {
	    let localctx = new PolicyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DatalogParser.RULE_policy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        localctx.kind = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
	            localctx.kind = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 128;
	        this.match(DatalogParser.IF);
	        this.state = 129;
	        this.rule_body();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 130;
	            this.match(DatalogParser.OR);
	            this.state = 131;
	            this.rule_body();
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rule_body() {
	    let localctx = new Rule_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DatalogParser.RULE_rule_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.rule_body_element();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 138;
	            this.match(DatalogParser.COMMA);
	            this.state = 139;
	            this.rule_body_element();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 145;
	            this.origin_clause();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rule_body_element() {
	    let localctx = new Rule_body_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DatalogParser.RULE_rule_body_element);
	    try {
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 148;
	            this.predicate();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 6:
	        case 7:
	        case 11:
	        case 13:
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 149;
	            this.expression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DatalogParser.RULE_predicate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(DatalogParser.NAME);
	        this.state = 153;
	        this.match(DatalogParser.LPARENS);
	        this.state = 154;
	        this.term();
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 155;
	            this.match(DatalogParser.COMMA);
	            this.state = 156;
	            this.term();
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 162;
	        this.match(DatalogParser.RPARENS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, DatalogParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            localctx = new ExpressionUnaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 165;
	            this.match(DatalogParser.OP_NOT);
	            this.state = 166;
	            this.expression(9);
	            break;
	        case 11:
	            localctx = new ExpressionParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 167;
	            this.match(DatalogParser.LPARENS);
	            this.state = 168;
	            this.expression(0);
	            this.state = 169;
	            this.match(DatalogParser.RPARENS);
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 6:
	        case 7:
	        case 13:
	            localctx = new ExpressionTermContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 171;
	            this.fact_term();
	            break;
	        case 1:
	            localctx = new ExpressionVariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 172;
	            this.match(DatalogParser.VARIABLE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 201;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionMultContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 175;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 176;
	                    localctx.mult = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===20 || _la===21)) {
	                        localctx.mult = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 177;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionAddContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 178;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 179;
	                    localctx.add = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===22 || _la===23)) {
	                        localctx.add = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 180;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new ExpressionLogicContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 181;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 182;
	                    localctx.logic = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===24 || _la===25)) {
	                        localctx.logic = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 183;
	                    this.expression(5);
	                    break;

	                case 4:
	                    localctx = new ExpressionCompContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 184;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 185;
	                    localctx.comp = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2080374784) !== 0))) {
	                        localctx.comp = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 186;
	                    this.expression(4);
	                    break;

	                case 5:
	                    localctx = new ExpressionMethodContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 188;
	                    this.match(DatalogParser.METHOD_INVOCATION);
	                    this.state = 189;
	                    this.match(DatalogParser.LPARENS);
	                    this.state = 198;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8414) !== 0)) {
	                        this.state = 190;
	                        this.term();
	                        this.state = 195;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        while(_la===9) {
	                            this.state = 191;
	                            this.match(DatalogParser.COMMA);
	                            this.state = 192;
	                            this.term();
	                            this.state = 197;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                        }
	                    }

	                    this.state = 200;
	                    this.match(DatalogParser.RPARENS);
	                    break;

	                } 
	            }
	            this.state = 205;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	set() {
	    let localctx = new SetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DatalogParser.RULE_set);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(DatalogParser.LSPARENS);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8412) !== 0)) {
	            this.state = 207;
	            this.fact_term();
	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===9) {
	                this.state = 208;
	                this.match(DatalogParser.COMMA);
	                this.state = 209;
	                this.set_term();
	                this.state = 214;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 217;
	        this.match(DatalogParser.RSPARENS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DatalogParser.RULE_term);
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	        case 6:
	        case 7:
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 219;
	            this.fact_term();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 220;
	            this.match(DatalogParser.VARIABLE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fact_term() {
	    let localctx = new Fact_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DatalogParser.RULE_fact_term);
	    try {
	        this.state = 225;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	        case 6:
	        case 7:
	            localctx = new SetTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 223;
	            this.set_term();
	            break;
	        case 13:
	            localctx = new SetFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this.set();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set_term() {
	    let localctx = new Set_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DatalogParser.RULE_set_term);
	    try {
	        this.state = 232;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            localctx = new BooleanFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            this.match(DatalogParser.BOOLEAN);
	            break;
	        case 2:
	            localctx = new StringFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 228;
	            this.match(DatalogParser.STRING);
	            break;
	        case 3:
	            localctx = new NumberFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 229;
	            this.match(DatalogParser.NUMBER);
	            break;
	        case 4:
	            localctx = new BytesFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 230;
	            this.match(DatalogParser.BYTES);
	            break;
	        case 7:
	            localctx = new DateFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 231;
	            this.match(DatalogParser.DATE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DatalogParser.EOF = antlr4.Token.EOF;
DatalogParser.VARIABLE = 1;
DatalogParser.STRING = 2;
DatalogParser.NUMBER = 3;
DatalogParser.BYTES = 4;
DatalogParser.PUBLICKEYBYTES = 5;
DatalogParser.BOOLEAN = 6;
DatalogParser.DATE = 7;
DatalogParser.TRUSTING = 8;
DatalogParser.COMMA = 9;
DatalogParser.SEMICOL = 10;
DatalogParser.LPARENS = 11;
DatalogParser.RPARENS = 12;
DatalogParser.LSPARENS = 13;
DatalogParser.RSPARENS = 14;
DatalogParser.AUTHORITY = 15;
DatalogParser.PREVIOUS = 16;
DatalogParser.ED25519 = 17;
DatalogParser.RULEOP = 18;
DatalogParser.OP_NOT = 19;
DatalogParser.OP_MUL = 20;
DatalogParser.OP_DIV = 21;
DatalogParser.OP_SUM = 22;
DatalogParser.OP_SUB = 23;
DatalogParser.OP_AND = 24;
DatalogParser.OP_OR = 25;
DatalogParser.OP_G = 26;
DatalogParser.OP_GE = 27;
DatalogParser.OP_L = 28;
DatalogParser.OP_LE = 29;
DatalogParser.OP_EQUAL = 30;
DatalogParser.CHECK = 31;
DatalogParser.IF = 32;
DatalogParser.ALL = 33;
DatalogParser.OR = 34;
DatalogParser.ALLOW = 35;
DatalogParser.DENY = 36;
DatalogParser.SINGLE_LINE_COMMENT = 37;
DatalogParser.DELIMITED_COMMENT_START = 38;
DatalogParser.DELIMITED_COMMENT_END = 39;
DatalogParser.DELIMITED_COMMENT = 40;
DatalogParser.METHOD_INVOCATION = 41;
DatalogParser.NAME = 42;
DatalogParser.WS = 43;
DatalogParser.ANY = 44;

DatalogParser.RULE_authorizer = 0;
DatalogParser.RULE_authorizer_element = 1;
DatalogParser.RULE_origin_clause = 2;
DatalogParser.RULE_origin_element = 3;
DatalogParser.RULE_signature_alg = 4;
DatalogParser.RULE_block = 5;
DatalogParser.RULE_block_element = 6;
DatalogParser.RULE_fact_or_rule = 7;
DatalogParser.RULE_fact = 8;
DatalogParser.RULE_rule_ = 9;
DatalogParser.RULE_check = 10;
DatalogParser.RULE_policy = 11;
DatalogParser.RULE_rule_body = 12;
DatalogParser.RULE_rule_body_element = 13;
DatalogParser.RULE_predicate = 14;
DatalogParser.RULE_expression = 15;
DatalogParser.RULE_set = 16;
DatalogParser.RULE_term = 17;
DatalogParser.RULE_fact_term = 18;
DatalogParser.RULE_set_term = 19;

class AuthorizerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_authorizer;
    }

	EOF() {
	    return this.getToken(DatalogParser.EOF, 0);
	};

	authorizer_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Authorizer_elementContext);
	    } else {
	        return this.getTypedRuleContext(Authorizer_elementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterAuthorizer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitAuthorizer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitAuthorizer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Authorizer_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_authorizer_element;
    }

	SEMICOL() {
	    return this.getToken(DatalogParser.SEMICOL, 0);
	};

	fact_or_rule() {
	    return this.getTypedRuleContext(Fact_or_ruleContext,0);
	};

	policy() {
	    return this.getTypedRuleContext(PolicyContext,0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterAuthorizer_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitAuthorizer_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitAuthorizer_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Origin_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_origin_clause;
    }

	TRUSTING() {
	    return this.getToken(DatalogParser.TRUSTING, 0);
	};

	origin_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Origin_elementContext);
	    } else {
	        return this.getTypedRuleContext(Origin_elementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.COMMA);
	    } else {
	        return this.getToken(DatalogParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterOrigin_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitOrigin_clause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitOrigin_clause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Origin_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_origin_element;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OriginElementAuthorityContext extends Origin_elementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	AUTHORITY() {
	    return this.getToken(DatalogParser.AUTHORITY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterOriginElementAuthority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitOriginElementAuthority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitOriginElementAuthority(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.OriginElementAuthorityContext = OriginElementAuthorityContext;

class OriginElementPublicKeyContext extends Origin_elementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	signature_alg() {
	    return this.getTypedRuleContext(Signature_algContext,0);
	};

	PUBLICKEYBYTES() {
	    return this.getToken(DatalogParser.PUBLICKEYBYTES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterOriginElementPublicKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitOriginElementPublicKey(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitOriginElementPublicKey(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.OriginElementPublicKeyContext = OriginElementPublicKeyContext;

class OriginElementPreviousContext extends Origin_elementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PREVIOUS() {
	    return this.getToken(DatalogParser.PREVIOUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterOriginElementPrevious(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitOriginElementPrevious(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitOriginElementPrevious(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.OriginElementPreviousContext = OriginElementPreviousContext;

class Signature_algContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_signature_alg;
    }

	ED25519() {
	    return this.getToken(DatalogParser.ED25519, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterSignature_alg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitSignature_alg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitSignature_alg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_block;
    }

	block_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Block_elementContext);
	    } else {
	        return this.getTypedRuleContext(Block_elementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Block_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_block_element;
    }

	SEMICOL() {
	    return this.getToken(DatalogParser.SEMICOL, 0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	fact() {
	    return this.getTypedRuleContext(FactContext,0);
	};

	fact_or_rule() {
	    return this.getTypedRuleContext(Fact_or_ruleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterBlock_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitBlock_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitBlock_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Fact_or_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_fact_or_rule;
    }

	NAME() {
	    return this.getToken(DatalogParser.NAME, 0);
	};

	LPARENS() {
	    return this.getToken(DatalogParser.LPARENS, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	RPARENS() {
	    return this.getToken(DatalogParser.RPARENS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.COMMA);
	    } else {
	        return this.getToken(DatalogParser.COMMA, i);
	    }
	};


	RULEOP() {
	    return this.getToken(DatalogParser.RULEOP, 0);
	};

	rule_body() {
	    return this.getTypedRuleContext(Rule_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterFact_or_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitFact_or_rule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitFact_or_rule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_fact;
    }

	NAME() {
	    return this.getToken(DatalogParser.NAME, 0);
	};

	LPARENS() {
	    return this.getToken(DatalogParser.LPARENS, 0);
	};

	fact_term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Fact_termContext);
	    } else {
	        return this.getTypedRuleContext(Fact_termContext,i);
	    }
	};

	RPARENS() {
	    return this.getToken(DatalogParser.RPARENS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.COMMA);
	    } else {
	        return this.getToken(DatalogParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterFact(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitFact(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitFact(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Rule_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_rule_;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	RULEOP() {
	    return this.getToken(DatalogParser.RULEOP, 0);
	};

	rule_body() {
	    return this.getTypedRuleContext(Rule_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitRule_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitRule_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CheckContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_check;
        this.kind = null;
    }

	CHECK() {
	    return this.getToken(DatalogParser.CHECK, 0);
	};

	rule_body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_bodyContext);
	    } else {
	        return this.getTypedRuleContext(Rule_bodyContext,i);
	    }
	};

	IF() {
	    return this.getToken(DatalogParser.IF, 0);
	};

	ALL() {
	    return this.getToken(DatalogParser.ALL, 0);
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.OR);
	    } else {
	        return this.getToken(DatalogParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterCheck(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitCheck(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitCheck(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PolicyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_policy;
        this.kind = null;
    }

	IF() {
	    return this.getToken(DatalogParser.IF, 0);
	};

	rule_body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_bodyContext);
	    } else {
	        return this.getTypedRuleContext(Rule_bodyContext,i);
	    }
	};

	ALLOW() {
	    return this.getToken(DatalogParser.ALLOW, 0);
	};

	DENY() {
	    return this.getToken(DatalogParser.DENY, 0);
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.OR);
	    } else {
	        return this.getToken(DatalogParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterPolicy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitPolicy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitPolicy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Rule_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_rule_body;
    }

	rule_body_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_body_elementContext);
	    } else {
	        return this.getTypedRuleContext(Rule_body_elementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.COMMA);
	    } else {
	        return this.getToken(DatalogParser.COMMA, i);
	    }
	};


	origin_clause() {
	    return this.getTypedRuleContext(Origin_clauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterRule_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitRule_body(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitRule_body(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Rule_body_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_rule_body_element;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterRule_body_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitRule_body_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitRule_body_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_predicate;
    }

	NAME() {
	    return this.getToken(DatalogParser.NAME, 0);
	};

	LPARENS() {
	    return this.getToken(DatalogParser.LPARENS, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	RPARENS() {
	    return this.getToken(DatalogParser.RPARENS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.COMMA);
	    } else {
	        return this.getToken(DatalogParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitPredicate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitPredicate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExpressionAddContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.add = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_SUM() {
	    return this.getToken(DatalogParser.OP_SUM, 0);
	};

	OP_SUB() {
	    return this.getToken(DatalogParser.OP_SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionAdd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionAdd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionAddContext = ExpressionAddContext;

class ExpressionLogicContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.logic = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_OR() {
	    return this.getToken(DatalogParser.OP_OR, 0);
	};

	OP_AND() {
	    return this.getToken(DatalogParser.OP_AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionLogic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionLogic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionLogic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionLogicContext = ExpressionLogicContext;

class ExpressionUnaryContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OP_NOT() {
	    return this.getToken(DatalogParser.OP_NOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionUnary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionUnaryContext = ExpressionUnaryContext;

class ExpressionParenthesesContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPARENS() {
	    return this.getToken(DatalogParser.LPARENS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPARENS() {
	    return this.getToken(DatalogParser.RPARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionParentheses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionParentheses(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionParentheses(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionParenthesesContext = ExpressionParenthesesContext;

class ExpressionCompContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.comp = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_GE() {
	    return this.getToken(DatalogParser.OP_GE, 0);
	};

	OP_LE() {
	    return this.getToken(DatalogParser.OP_LE, 0);
	};

	OP_G() {
	    return this.getToken(DatalogParser.OP_G, 0);
	};

	OP_L() {
	    return this.getToken(DatalogParser.OP_L, 0);
	};

	OP_EQUAL() {
	    return this.getToken(DatalogParser.OP_EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionComp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionComp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionComp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionCompContext = ExpressionCompContext;

class ExpressionMethodContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	METHOD_INVOCATION() {
	    return this.getToken(DatalogParser.METHOD_INVOCATION, 0);
	};

	LPARENS() {
	    return this.getToken(DatalogParser.LPARENS, 0);
	};

	RPARENS() {
	    return this.getToken(DatalogParser.RPARENS, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.COMMA);
	    } else {
	        return this.getToken(DatalogParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionMethodContext = ExpressionMethodContext;

class ExpressionTermContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	fact_term() {
	    return this.getTypedRuleContext(Fact_termContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionTermContext = ExpressionTermContext;

class ExpressionMultContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.mult = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OP_MUL() {
	    return this.getToken(DatalogParser.OP_MUL, 0);
	};

	OP_DIV() {
	    return this.getToken(DatalogParser.OP_DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionMult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionMult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionMult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionMultContext = ExpressionMultContext;

class ExpressionVariableContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(DatalogParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterExpressionVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitExpressionVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitExpressionVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionVariableContext = ExpressionVariableContext;

class SetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_set;
    }

	LSPARENS() {
	    return this.getToken(DatalogParser.LSPARENS, 0);
	};

	RSPARENS() {
	    return this.getToken(DatalogParser.RSPARENS, 0);
	};

	fact_term() {
	    return this.getTypedRuleContext(Fact_termContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DatalogParser.COMMA);
	    } else {
	        return this.getToken(DatalogParser.COMMA, i);
	    }
	};


	set_term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Set_termContext);
	    } else {
	        return this.getTypedRuleContext(Set_termContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitSet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitSet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_term;
    }

	fact_term() {
	    return this.getTypedRuleContext(Fact_termContext,0);
	};

	VARIABLE() {
	    return this.getToken(DatalogParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Fact_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_fact_term;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SetFactTermContext extends Fact_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	set() {
	    return this.getTypedRuleContext(SetContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterSetFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitSetFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitSetFactTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.SetFactTermContext = SetFactTermContext;

class SetTermContext extends Fact_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	set_term() {
	    return this.getTypedRuleContext(Set_termContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterSetTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitSetTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitSetTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.SetTermContext = SetTermContext;

class Set_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DatalogParser.RULE_set_term;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(DatalogParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterStringFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitStringFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitStringFactTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.StringFactTermContext = StringFactTermContext;

class BytesFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BYTES() {
	    return this.getToken(DatalogParser.BYTES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterBytesFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitBytesFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitBytesFactTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.BytesFactTermContext = BytesFactTermContext;

class BooleanFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN() {
	    return this.getToken(DatalogParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterBooleanFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitBooleanFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitBooleanFactTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.BooleanFactTermContext = BooleanFactTermContext;

class DateFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DATE() {
	    return this.getToken(DatalogParser.DATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterDateFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitDateFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitDateFactTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.DateFactTermContext = DateFactTermContext;

class NumberFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(DatalogParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.enterNumberFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogParserListener ) {
	        listener.exitNumberFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogParserVisitor ) {
	        return visitor.visitNumberFactTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.NumberFactTermContext = NumberFactTermContext;


DatalogParser.AuthorizerContext = AuthorizerContext; 
DatalogParser.Authorizer_elementContext = Authorizer_elementContext; 
DatalogParser.Origin_clauseContext = Origin_clauseContext; 
DatalogParser.Origin_elementContext = Origin_elementContext; 
DatalogParser.Signature_algContext = Signature_algContext; 
DatalogParser.BlockContext = BlockContext; 
DatalogParser.Block_elementContext = Block_elementContext; 
DatalogParser.Fact_or_ruleContext = Fact_or_ruleContext; 
DatalogParser.FactContext = FactContext; 
DatalogParser.Rule_Context = Rule_Context; 
DatalogParser.CheckContext = CheckContext; 
DatalogParser.PolicyContext = PolicyContext; 
DatalogParser.Rule_bodyContext = Rule_bodyContext; 
DatalogParser.Rule_body_elementContext = Rule_body_elementContext; 
DatalogParser.PredicateContext = PredicateContext; 
DatalogParser.ExpressionContext = ExpressionContext; 
DatalogParser.SetContext = SetContext; 
DatalogParser.TermContext = TermContext; 
DatalogParser.Fact_termContext = Fact_termContext; 
DatalogParser.Set_termContext = Set_termContext; 
