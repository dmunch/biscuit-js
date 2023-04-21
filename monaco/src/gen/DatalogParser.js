// Generated from Datalog.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import DatalogListener from './DatalogListener.js';
import DatalogVisitor from './DatalogVisitor.js';

const serializedATN = [4,1,43,217,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,
1,0,5,0,43,8,0,10,0,12,0,46,9,0,1,1,1,1,1,1,1,1,1,1,3,1,53,8,1,1,2,1,2,1,
3,5,3,58,8,3,10,3,12,3,61,9,3,1,4,1,4,1,4,1,4,3,4,67,8,4,1,4,1,4,1,5,5,5,
72,8,5,10,5,12,5,75,9,5,1,6,1,6,1,6,3,6,80,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,
7,5,7,89,8,7,10,7,12,7,92,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
9,5,9,105,8,9,10,9,12,9,108,9,9,1,10,1,10,1,10,1,10,1,10,5,10,115,8,10,10,
10,12,10,118,9,10,1,11,1,11,1,11,5,11,123,8,11,10,11,12,11,126,9,11,1,11,
3,11,129,8,11,1,12,1,12,3,12,133,8,12,1,13,1,13,1,13,1,13,1,13,5,13,140,
8,13,10,13,12,13,143,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,3,14,156,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,176,8,14,10,14,12,14,179,9,
14,3,14,181,8,14,1,14,5,14,184,8,14,10,14,12,14,187,9,14,1,15,1,15,3,15,
191,8,15,1,16,1,16,3,16,195,8,16,1,17,1,17,1,17,1,17,1,17,3,17,202,8,17,
1,18,1,18,1,18,1,18,5,18,208,8,18,10,18,12,18,211,9,18,3,18,213,8,18,1,18,
1,18,1,18,0,1,28,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
0,6,1,0,11,12,1,0,14,15,1,0,17,18,1,0,19,20,1,0,21,22,1,0,23,27,232,0,38,
1,0,0,0,2,52,1,0,0,0,4,54,1,0,0,0,6,59,1,0,0,0,8,66,1,0,0,0,10,73,1,0,0,
0,12,79,1,0,0,0,14,83,1,0,0,0,16,95,1,0,0,0,18,99,1,0,0,0,20,109,1,0,0,0,
22,119,1,0,0,0,24,132,1,0,0,0,26,134,1,0,0,0,28,155,1,0,0,0,30,190,1,0,0,
0,32,194,1,0,0,0,34,201,1,0,0,0,36,203,1,0,0,0,38,39,5,1,0,0,39,44,3,2,1,
0,40,41,5,2,0,0,41,43,3,2,1,0,42,40,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,
44,45,1,0,0,0,45,1,1,0,0,0,46,44,1,0,0,0,47,53,5,3,0,0,48,53,5,4,0,0,49,
50,3,4,2,0,50,51,5,34,0,0,51,53,1,0,0,0,52,47,1,0,0,0,52,48,1,0,0,0,52,49,
1,0,0,0,53,3,1,0,0,0,54,55,5,5,0,0,55,5,1,0,0,0,56,58,3,8,4,0,57,56,1,0,
0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,7,1,0,0,0,61,59,1,0,0,0,
62,67,3,20,10,0,63,67,3,18,9,0,64,67,3,14,7,0,65,67,3,16,8,0,66,62,1,0,0,
0,66,63,1,0,0,0,66,64,1,0,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,69,5,6,0,0,
69,9,1,0,0,0,70,72,3,12,6,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,
74,1,0,0,0,74,11,1,0,0,0,75,73,1,0,0,0,76,80,3,18,9,0,77,80,3,14,7,0,78,
80,3,16,8,0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,81,1,0,0,0,81,82,
5,6,0,0,82,13,1,0,0,0,83,84,5,38,0,0,84,85,5,7,0,0,85,90,3,32,16,0,86,87,
5,2,0,0,87,89,3,32,16,0,88,86,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,
1,0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,8,0,0,94,15,1,0,0,0,95,96,3,
26,13,0,96,97,5,9,0,0,97,98,3,22,11,0,98,17,1,0,0,0,99,100,5,10,0,0,100,
101,7,0,0,0,101,106,3,22,11,0,102,103,5,13,0,0,103,105,3,22,11,0,104,102,
1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,19,1,0,0,0,108,
106,1,0,0,0,109,110,7,1,0,0,110,111,5,11,0,0,111,116,3,22,11,0,112,113,5,
13,0,0,113,115,3,22,11,0,114,112,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,
116,117,1,0,0,0,117,21,1,0,0,0,118,116,1,0,0,0,119,124,3,24,12,0,120,121,
5,2,0,0,121,123,3,24,12,0,122,120,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,
0,124,125,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,127,129,3,0,0,0,128,127,
1,0,0,0,128,129,1,0,0,0,129,23,1,0,0,0,130,133,3,26,13,0,131,133,3,28,14,
0,132,130,1,0,0,0,132,131,1,0,0,0,133,25,1,0,0,0,134,135,5,38,0,0,135,136,
5,7,0,0,136,141,3,30,15,0,137,138,5,2,0,0,138,140,3,30,15,0,139,137,1,0,
0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,
141,1,0,0,0,144,145,5,8,0,0,145,27,1,0,0,0,146,147,6,14,-1,0,147,148,5,16,
0,0,148,156,3,28,14,9,149,150,5,7,0,0,150,151,3,28,14,0,151,152,5,8,0,0,
152,156,1,0,0,0,153,156,3,32,16,0,154,156,5,30,0,0,155,146,1,0,0,0,155,149,
1,0,0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,185,1,0,0,0,157,158,10,6,0,0,
158,159,7,2,0,0,159,184,3,28,14,7,160,161,10,5,0,0,161,162,7,3,0,0,162,184,
3,28,14,6,163,164,10,4,0,0,164,165,7,4,0,0,165,184,3,28,14,5,166,167,10,
3,0,0,167,168,7,5,0,0,168,184,3,28,14,4,169,170,10,7,0,0,170,171,5,37,0,
0,171,180,5,7,0,0,172,177,3,30,15,0,173,174,5,2,0,0,174,176,3,30,15,0,175,
173,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,181,1,0,
0,0,179,177,1,0,0,0,180,172,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,
184,5,8,0,0,183,157,1,0,0,0,183,160,1,0,0,0,183,163,1,0,0,0,183,166,1,0,
0,0,183,169,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,
29,1,0,0,0,187,185,1,0,0,0,188,191,3,32,16,0,189,191,5,30,0,0,190,188,1,
0,0,0,190,189,1,0,0,0,191,31,1,0,0,0,192,195,3,34,17,0,193,195,3,36,18,0,
194,192,1,0,0,0,194,193,1,0,0,0,195,33,1,0,0,0,196,202,5,35,0,0,197,202,
5,31,0,0,198,202,5,32,0,0,199,202,5,33,0,0,200,202,5,36,0,0,201,196,1,0,
0,0,201,197,1,0,0,0,201,198,1,0,0,0,201,199,1,0,0,0,201,200,1,0,0,0,202,
35,1,0,0,0,203,212,5,28,0,0,204,209,3,32,16,0,205,206,5,2,0,0,206,208,3,
34,17,0,207,205,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,
210,213,1,0,0,0,211,209,1,0,0,0,212,204,1,0,0,0,212,213,1,0,0,0,213,214,
1,0,0,0,214,215,5,29,0,0,215,37,1,0,0,0,23,44,52,59,66,73,79,90,106,116,
124,128,132,141,155,177,180,183,185,190,194,201,209,212];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DatalogParser extends antlr4.Parser {

    static grammarFileName = "Datalog.g4";
    static literalNames = [ null, "'trusting'", "','", "'authority'", "'previous'", 
                            "'ed25519'", "';'", "'('", "')'", "'<-'", "'check'", 
                            "'if'", "'all'", "'or'", "'allow'", "'deny'", 
                            "'!'", "'*'", "'/'", "'+'", "'-'", "'||'", "'&&'", 
                            "'>='", "'<='", "'>'", "'<'", "'=='", "'['", 
                            "']'", null, null, null, null, null, null, null, 
                            null, null, null, "'/*'", "'*/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "VARIABLE", 
                             "STRING", "NUMBER", "BYTES", "PUBLICKEYBYTES", 
                             "BOOLEAN", "DATE", "METHOD_INVOCATION", "NAME", 
                             "SINGLE_LINE_COMMENT", "DELIMITED_COMMENT_START", 
                             "DELIMITED_COMMENT_END", "DELIMITED_COMMENT", 
                             "WS" ];
    static ruleNames = [ "origin_clause", "origin_element", "signature_alg", 
                         "authorizer", "authorizer_element", "block", "block_element", 
                         "fact", "rule_", "check", "policy", "rule_body", 
                         "rule_body_element", "predicate", "expression", 
                         "term", "fact_term", "set_term", "set" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DatalogParser.ruleNames;
        this.literalNames = DatalogParser.literalNames;
        this.symbolicNames = DatalogParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 14:
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




	origin_clause() {
	    let localctx = new Origin_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DatalogParser.RULE_origin_clause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(DatalogParser.T__0);
	        this.state = 39;
	        this.origin_element();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 40;
	            this.match(DatalogParser.T__1);
	            this.state = 41;
	            this.origin_element();
	            this.state = 46;
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
	    this.enterRule(localctx, 2, DatalogParser.RULE_origin_element);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            localctx = new OriginElementAuthorityContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(DatalogParser.T__2);
	            break;
	        case 4:
	            localctx = new OriginElementPreviousContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.match(DatalogParser.T__3);
	            break;
	        case 5:
	            localctx = new OriginElementPublicKeyContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.signature_alg();
	            this.state = 50;
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
	    this.enterRule(localctx, 4, DatalogParser.RULE_signature_alg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(DatalogParser.T__4);
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



	authorizer() {
	    let localctx = new AuthorizerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DatalogParser.RULE_authorizer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 268435505) !== 0)) {
	            this.state = 56;
	            this.authorizer_element();
	            this.state = 61;
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



	authorizer_element() {
	    let localctx = new Authorizer_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DatalogParser.RULE_authorizer_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 62;
	            this.policy();
	            break;

	        case 2:
	            this.state = 63;
	            this.check();
	            break;

	        case 3:
	            this.state = 64;
	            this.fact();
	            break;

	        case 4:
	            this.state = 65;
	            this.rule_();
	            break;

	        }
	        this.state = 68;
	        this.match(DatalogParser.T__5);
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10 || _la===38) {
	            this.state = 70;
	            this.block_element();
	            this.state = 75;
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
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 76;
	            this.check();
	            break;

	        case 2:
	            this.state = 77;
	            this.fact();
	            break;

	        case 3:
	            this.state = 78;
	            this.rule_();
	            break;

	        }
	        this.state = 81;
	        this.match(DatalogParser.T__5);
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
	    this.enterRule(localctx, 14, DatalogParser.RULE_fact);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(DatalogParser.NAME);
	        this.state = 84;
	        this.match(DatalogParser.T__6);
	        this.state = 85;
	        this.fact_term();
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 86;
	            this.match(DatalogParser.T__1);
	            this.state = 87;
	            this.fact_term();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this.match(DatalogParser.T__7);
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
	    this.enterRule(localctx, 16, DatalogParser.RULE_rule_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.predicate();
	        this.state = 96;
	        this.match(DatalogParser.T__8);
	        this.state = 97;
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
	    this.enterRule(localctx, 18, DatalogParser.RULE_check);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(DatalogParser.T__9);
	        this.state = 100;
	        localctx.kind = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	            localctx.kind = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 101;
	        this.rule_body();
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 102;
	            this.match(DatalogParser.T__12);
	            this.state = 103;
	            this.rule_body();
	            this.state = 108;
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
	    this.enterRule(localctx, 20, DatalogParser.RULE_policy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        localctx.kind = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	            localctx.kind = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 110;
	        this.match(DatalogParser.T__10);
	        this.state = 111;
	        this.rule_body();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 112;
	            this.match(DatalogParser.T__12);
	            this.state = 113;
	            this.rule_body();
	            this.state = 118;
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
	    this.enterRule(localctx, 22, DatalogParser.RULE_rule_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.rule_body_element();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 120;
	            this.match(DatalogParser.T__1);
	            this.state = 121;
	            this.rule_body_element();
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 127;
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
	    this.enterRule(localctx, 24, DatalogParser.RULE_rule_body_element);
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.predicate();
	            break;
	        case 7:
	        case 16:
	        case 28:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
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
	    this.enterRule(localctx, 26, DatalogParser.RULE_predicate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(DatalogParser.NAME);
	        this.state = 135;
	        this.match(DatalogParser.T__6);
	        this.state = 136;
	        this.term();
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 137;
	            this.match(DatalogParser.T__1);
	            this.state = 138;
	            this.term();
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 144;
	        this.match(DatalogParser.T__7);
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
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, DatalogParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new ExpressionUnaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 147;
	            this.match(DatalogParser.T__15);
	            this.state = 148;
	            this.expression(9);
	            break;
	        case 7:
	            localctx = new ExpressionParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.match(DatalogParser.T__6);
	            this.state = 150;
	            this.expression(0);
	            this.state = 151;
	            this.match(DatalogParser.T__7);
	            break;
	        case 28:
	        case 31:
	        case 32:
	        case 33:
	        case 35:
	        case 36:
	            localctx = new ExpressionTermContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.fact_term();
	            break;
	        case 30:
	            localctx = new ExpressionVariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 154;
	            this.match(DatalogParser.VARIABLE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 185;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 183;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionMultContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 158;
	                    localctx.mult = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                        localctx.mult = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 159;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionAddContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 161;
	                    localctx.add = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                        localctx.add = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 162;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new ExpressionLogicContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 164;
	                    localctx.logic = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.logic = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 165;
	                    this.expression(5);
	                    break;

	                case 4:
	                    localctx = new ExpressionCompContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 166;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 167;
	                    localctx.comp = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 260046848) !== 0))) {
	                        localctx.comp = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 168;
	                    this.expression(4);
	                    break;

	                case 5:
	                    localctx = new ExpressionMethodContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, DatalogParser.RULE_expression);
	                    this.state = 169;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 170;
	                    this.match(DatalogParser.METHOD_INVOCATION);
	                    this.state = 171;
	                    this.match(DatalogParser.T__6);
	                    this.state = 180;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 445) !== 0)) {
	                        this.state = 172;
	                        this.term();
	                        this.state = 177;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        while(_la===2) {
	                            this.state = 173;
	                            this.match(DatalogParser.T__1);
	                            this.state = 174;
	                            this.term();
	                            this.state = 179;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                        }
	                    }

	                    this.state = 182;
	                    this.match(DatalogParser.T__7);
	                    break;

	                } 
	            }
	            this.state = 187;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DatalogParser.RULE_term);
	    try {
	        this.state = 190;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 31:
	        case 32:
	        case 33:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 188;
	            this.fact_term();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
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
	    this.enterRule(localctx, 32, DatalogParser.RULE_fact_term);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	        case 32:
	        case 33:
	        case 35:
	        case 36:
	            localctx = new SetTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            this.set_term();
	            break;
	        case 28:
	            localctx = new SetFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
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
	    this.enterRule(localctx, 34, DatalogParser.RULE_set_term);
	    try {
	        this.state = 201;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            localctx = new BooleanFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 196;
	            this.match(DatalogParser.BOOLEAN);
	            break;
	        case 31:
	            localctx = new StringFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 197;
	            this.match(DatalogParser.STRING);
	            break;
	        case 32:
	            localctx = new NumberFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 198;
	            this.match(DatalogParser.NUMBER);
	            break;
	        case 33:
	            localctx = new BytesFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 199;
	            this.match(DatalogParser.BYTES);
	            break;
	        case 36:
	            localctx = new DateFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 200;
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



	set() {
	    let localctx = new SetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DatalogParser.RULE_set);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(DatalogParser.T__27);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 441) !== 0)) {
	            this.state = 204;
	            this.fact_term();
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 205;
	                this.match(DatalogParser.T__1);
	                this.state = 206;
	                this.set_term();
	                this.state = 211;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 214;
	        this.match(DatalogParser.T__28);
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
DatalogParser.T__0 = 1;
DatalogParser.T__1 = 2;
DatalogParser.T__2 = 3;
DatalogParser.T__3 = 4;
DatalogParser.T__4 = 5;
DatalogParser.T__5 = 6;
DatalogParser.T__6 = 7;
DatalogParser.T__7 = 8;
DatalogParser.T__8 = 9;
DatalogParser.T__9 = 10;
DatalogParser.T__10 = 11;
DatalogParser.T__11 = 12;
DatalogParser.T__12 = 13;
DatalogParser.T__13 = 14;
DatalogParser.T__14 = 15;
DatalogParser.T__15 = 16;
DatalogParser.T__16 = 17;
DatalogParser.T__17 = 18;
DatalogParser.T__18 = 19;
DatalogParser.T__19 = 20;
DatalogParser.T__20 = 21;
DatalogParser.T__21 = 22;
DatalogParser.T__22 = 23;
DatalogParser.T__23 = 24;
DatalogParser.T__24 = 25;
DatalogParser.T__25 = 26;
DatalogParser.T__26 = 27;
DatalogParser.T__27 = 28;
DatalogParser.T__28 = 29;
DatalogParser.VARIABLE = 30;
DatalogParser.STRING = 31;
DatalogParser.NUMBER = 32;
DatalogParser.BYTES = 33;
DatalogParser.PUBLICKEYBYTES = 34;
DatalogParser.BOOLEAN = 35;
DatalogParser.DATE = 36;
DatalogParser.METHOD_INVOCATION = 37;
DatalogParser.NAME = 38;
DatalogParser.SINGLE_LINE_COMMENT = 39;
DatalogParser.DELIMITED_COMMENT_START = 40;
DatalogParser.DELIMITED_COMMENT_END = 41;
DatalogParser.DELIMITED_COMMENT = 42;
DatalogParser.WS = 43;

DatalogParser.RULE_origin_clause = 0;
DatalogParser.RULE_origin_element = 1;
DatalogParser.RULE_signature_alg = 2;
DatalogParser.RULE_authorizer = 3;
DatalogParser.RULE_authorizer_element = 4;
DatalogParser.RULE_block = 5;
DatalogParser.RULE_block_element = 6;
DatalogParser.RULE_fact = 7;
DatalogParser.RULE_rule_ = 8;
DatalogParser.RULE_check = 9;
DatalogParser.RULE_policy = 10;
DatalogParser.RULE_rule_body = 11;
DatalogParser.RULE_rule_body_element = 12;
DatalogParser.RULE_predicate = 13;
DatalogParser.RULE_expression = 14;
DatalogParser.RULE_term = 15;
DatalogParser.RULE_fact_term = 16;
DatalogParser.RULE_set_term = 17;
DatalogParser.RULE_set = 18;

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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterOrigin_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitOrigin_clause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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


	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterOriginElementAuthority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitOriginElementAuthority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterOriginElementPublicKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitOriginElementPublicKey(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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


	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterOriginElementPrevious(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitOriginElementPrevious(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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


	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterSignature_alg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitSignature_alg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
	        return visitor.visitSignature_alg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
	    if(listener instanceof DatalogListener ) {
	        listener.enterAuthorizer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitAuthorizer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	policy() {
	    return this.getTypedRuleContext(PolicyContext,0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	fact() {
	    return this.getTypedRuleContext(FactContext,0);
	};

	rule_() {
	    return this.getTypedRuleContext(Rule_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterAuthorizer_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitAuthorizer_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
	        return visitor.visitAuthorizer_element(this);
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	fact() {
	    return this.getTypedRuleContext(FactContext,0);
	};

	rule_() {
	    return this.getTypedRuleContext(Rule_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterBlock_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitBlock_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
	        return visitor.visitBlock_element(this);
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterFact(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitFact(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	rule_body() {
	    return this.getTypedRuleContext(Rule_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitRule_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterCheck(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitCheck(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterPolicy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitPolicy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	origin_clause() {
	    return this.getTypedRuleContext(Origin_clauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterRule_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitRule_body(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterRule_body_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitRule_body_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitPredicate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionAdd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionLogic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionLogic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionParentheses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionParentheses(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionComp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionComp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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

	enterRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionMult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionMult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterExpressionVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitExpressionVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
	        return visitor.visitExpressionVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.ExpressionVariableContext = ExpressionVariableContext;

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
	    if(listener instanceof DatalogListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterSetFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitSetFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterSetTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitSetTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterStringFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitStringFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterBytesFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitBytesFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterBooleanFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitBooleanFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterDateFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitDateFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterNumberFactTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitNumberFactTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
	        return visitor.visitNumberFactTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DatalogParser.NumberFactTermContext = NumberFactTermContext;

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

	fact_term() {
	    return this.getTypedRuleContext(Fact_termContext,0);
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
	    if(listener instanceof DatalogListener ) {
	        listener.enterSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DatalogListener ) {
	        listener.exitSet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DatalogVisitor ) {
	        return visitor.visitSet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DatalogParser.Origin_clauseContext = Origin_clauseContext; 
DatalogParser.Origin_elementContext = Origin_elementContext; 
DatalogParser.Signature_algContext = Signature_algContext; 
DatalogParser.AuthorizerContext = AuthorizerContext; 
DatalogParser.Authorizer_elementContext = Authorizer_elementContext; 
DatalogParser.BlockContext = BlockContext; 
DatalogParser.Block_elementContext = Block_elementContext; 
DatalogParser.FactContext = FactContext; 
DatalogParser.Rule_Context = Rule_Context; 
DatalogParser.CheckContext = CheckContext; 
DatalogParser.PolicyContext = PolicyContext; 
DatalogParser.Rule_bodyContext = Rule_bodyContext; 
DatalogParser.Rule_body_elementContext = Rule_body_elementContext; 
DatalogParser.PredicateContext = PredicateContext; 
DatalogParser.ExpressionContext = ExpressionContext; 
DatalogParser.TermContext = TermContext; 
DatalogParser.Fact_termContext = Fact_termContext; 
DatalogParser.Set_termContext = Set_termContext; 
DatalogParser.SetContext = SetContext; 
