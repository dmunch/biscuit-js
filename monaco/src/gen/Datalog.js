// Generated from Datalog.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import DatalogListener from './DatalogListener.js';
import DatalogVisitor from './DatalogVisitor.js';

const serializedATN = [4,1,43,214,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,5,0,40,8,
0,10,0,12,0,43,9,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,54,8,2,10,2,12,
2,57,9,2,1,3,1,3,1,3,1,3,1,3,3,3,64,8,3,1,4,1,4,1,5,5,5,69,8,5,10,5,12,5,
72,9,5,1,6,1,6,1,6,3,6,77,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,5,7,86,8,7,10,
7,12,7,89,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,102,8,9,10,
9,12,9,105,9,9,1,10,1,10,1,10,1,10,1,10,5,10,112,8,10,10,10,12,10,115,9,
10,1,11,1,11,1,11,5,11,120,8,11,10,11,12,11,123,9,11,1,11,3,11,126,8,11,
1,12,1,12,3,12,130,8,12,1,13,1,13,1,13,1,13,1,13,5,13,137,8,13,10,13,12,
13,140,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,
153,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,5,14,173,8,14,10,14,12,14,176,9,14,3,14,178,8,14,
1,14,5,14,181,8,14,10,14,12,14,184,9,14,1,15,1,15,1,15,1,15,5,15,190,8,15,
10,15,12,15,193,9,15,3,15,195,8,15,1,15,1,15,1,16,1,16,3,16,201,8,16,1,17,
1,17,3,17,205,8,17,1,18,1,18,1,18,1,18,1,18,3,18,212,8,18,1,18,0,1,28,19,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,6,1,0,32,33,1,0,35,
36,1,0,20,21,1,0,22,23,1,0,24,25,1,0,26,30,226,0,41,1,0,0,0,2,46,1,0,0,0,
4,49,1,0,0,0,6,63,1,0,0,0,8,65,1,0,0,0,10,70,1,0,0,0,12,76,1,0,0,0,14,80,
1,0,0,0,16,92,1,0,0,0,18,96,1,0,0,0,20,106,1,0,0,0,22,116,1,0,0,0,24,129,
1,0,0,0,26,131,1,0,0,0,28,152,1,0,0,0,30,185,1,0,0,0,32,200,1,0,0,0,34,204,
1,0,0,0,36,211,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,
0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,0,0,1,45,1,1,0,0,
0,46,47,3,14,7,0,47,48,5,10,0,0,48,3,1,0,0,0,49,50,5,8,0,0,50,55,3,6,3,0,
51,52,5,9,0,0,52,54,3,6,3,0,53,51,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,
56,1,0,0,0,56,5,1,0,0,0,57,55,1,0,0,0,58,64,5,15,0,0,59,64,5,16,0,0,60,61,
3,8,4,0,61,62,5,5,0,0,62,64,1,0,0,0,63,58,1,0,0,0,63,59,1,0,0,0,63,60,1,
0,0,0,64,7,1,0,0,0,65,66,5,17,0,0,66,9,1,0,0,0,67,69,3,12,6,0,68,67,1,0,
0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,11,1,0,0,0,72,70,1,0,0,
0,73,77,3,18,9,0,74,77,3,14,7,0,75,77,3,16,8,0,76,73,1,0,0,0,76,74,1,0,0,
0,76,75,1,0,0,0,77,78,1,0,0,0,78,79,5,10,0,0,79,13,1,0,0,0,80,81,5,38,0,
0,81,82,5,13,0,0,82,87,3,34,17,0,83,84,5,9,0,0,84,86,3,34,17,0,85,83,1,0,
0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,
0,90,91,5,14,0,0,91,15,1,0,0,0,92,93,3,26,13,0,93,94,5,18,0,0,94,95,3,22,
11,0,95,17,1,0,0,0,96,97,5,31,0,0,97,98,7,0,0,0,98,103,3,22,11,0,99,100,
5,34,0,0,100,102,3,22,11,0,101,99,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,
0,103,104,1,0,0,0,104,19,1,0,0,0,105,103,1,0,0,0,106,107,7,1,0,0,107,108,
5,32,0,0,108,113,3,22,11,0,109,110,5,34,0,0,110,112,3,22,11,0,111,109,1,
0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,21,1,0,0,0,115,
113,1,0,0,0,116,121,3,24,12,0,117,118,5,9,0,0,118,120,3,24,12,0,119,117,
1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,125,1,0,0,0,
123,121,1,0,0,0,124,126,3,4,2,0,125,124,1,0,0,0,125,126,1,0,0,0,126,23,1,
0,0,0,127,130,3,26,13,0,128,130,3,28,14,0,129,127,1,0,0,0,129,128,1,0,0,
0,130,25,1,0,0,0,131,132,5,38,0,0,132,133,5,11,0,0,133,138,3,32,16,0,134,
135,5,9,0,0,135,137,3,32,16,0,136,134,1,0,0,0,137,140,1,0,0,0,138,136,1,
0,0,0,138,139,1,0,0,0,139,141,1,0,0,0,140,138,1,0,0,0,141,142,5,12,0,0,142,
27,1,0,0,0,143,144,6,14,-1,0,144,145,5,19,0,0,145,153,3,28,14,9,146,147,
5,11,0,0,147,148,3,28,14,0,148,149,5,12,0,0,149,153,1,0,0,0,150,153,3,34,
17,0,151,153,5,1,0,0,152,143,1,0,0,0,152,146,1,0,0,0,152,150,1,0,0,0,152,
151,1,0,0,0,153,182,1,0,0,0,154,155,10,6,0,0,155,156,7,2,0,0,156,181,3,28,
14,7,157,158,10,5,0,0,158,159,7,3,0,0,159,181,3,28,14,6,160,161,10,4,0,0,
161,162,7,4,0,0,162,181,3,28,14,5,163,164,10,3,0,0,164,165,7,5,0,0,165,181,
3,28,14,4,166,167,10,7,0,0,167,168,5,37,0,0,168,177,5,11,0,0,169,174,3,32,
16,0,170,171,5,9,0,0,171,173,3,32,16,0,172,170,1,0,0,0,173,176,1,0,0,0,174,
172,1,0,0,0,174,175,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,177,169,1,0,
0,0,177,178,1,0,0,0,178,179,1,0,0,0,179,181,5,12,0,0,180,154,1,0,0,0,180,
157,1,0,0,0,180,160,1,0,0,0,180,163,1,0,0,0,180,166,1,0,0,0,181,184,1,0,
0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,29,1,0,0,0,184,182,1,0,0,0,185,194,
5,13,0,0,186,191,3,34,17,0,187,188,5,9,0,0,188,190,3,36,18,0,189,187,1,0,
0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,195,1,0,0,0,193,
191,1,0,0,0,194,186,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,197,5,14,
0,0,197,31,1,0,0,0,198,201,3,34,17,0,199,201,5,1,0,0,200,198,1,0,0,0,200,
199,1,0,0,0,201,33,1,0,0,0,202,205,3,36,18,0,203,205,3,30,15,0,204,202,1,
0,0,0,204,203,1,0,0,0,205,35,1,0,0,0,206,212,5,6,0,0,207,212,5,2,0,0,208,
212,5,3,0,0,209,212,5,4,0,0,210,212,5,7,0,0,211,206,1,0,0,0,211,207,1,0,
0,0,211,208,1,0,0,0,211,209,1,0,0,0,211,210,1,0,0,0,212,37,1,0,0,0,22,41,
55,63,70,76,87,103,113,121,125,129,138,152,174,177,180,182,191,194,200,204,
211];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Datalog extends antlr4.Parser {

    static grammarFileName = "Datalog.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            "'trusting'", "','", "';'", "'('", "')'", "'['", 
                            "']'", "'authority'", "'previous'", "'ed25519'", 
                            "'<-'", "'!'", "'*'", "'/'", "'+'", "'-'", "'&&'", 
                            "'||'", "'>'", "'>='", "'<'", "'<='", "'=='", 
                            "'check'", "'if'", "'all'", "'or'", "'allow'", 
                            "'deny'", null, null, null, "'/*'", "'*/'" ];
    static symbolicNames = [ null, "VARIABLE", "STRING", "NUMBER", "BYTES", 
                             "PUBLICKEYBYTES", "BOOLEAN", "DATE", "TRUSTING", 
                             "COMMA", "SEMICOL", "LPARENS", "RPARENS", "LSPARENS", 
                             "RSPARENS", "AUTHORITY", "PREVIOUS", "ED25519", 
                             "RULEOP", "OP_NOT", "OP_MUL", "OP_DIV", "OP_SUM", 
                             "OP_SUB", "OP_AND", "OP_OR", "OP_G", "OP_GE", 
                             "OP_L", "OP_LE", "OP_EQUAL", "CHECK", "IF", 
                             "ALL", "OR", "ALLOW", "DENY", "METHOD_INVOCATION", 
                             "NAME", "SINGLE_LINE_COMMENT", "DELIMITED_COMMENT_START", 
                             "DELIMITED_COMMENT_END", "DELIMITED_COMMENT", 
                             "ANY" ];
    static ruleNames = [ "authorizer", "authorizer_element", "origin_clause", 
                         "origin_element", "signature_alg", "block", "block_element", 
                         "fact", "rule_", "check", "policy", "rule_body", 
                         "rule_body_element", "predicate", "expression", 
                         "set", "term", "fact_term", "set_term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Datalog.ruleNames;
        this.literalNames = Datalog.literalNames;
        this.symbolicNames = Datalog.symbolicNames;
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




	authorizer() {
	    let localctx = new AuthorizerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Datalog.RULE_authorizer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 38;
	            this.authorizer_element();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(Datalog.EOF);
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
	    this.enterRule(localctx, 2, Datalog.RULE_authorizer_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.fact();
	        this.state = 47;
	        this.match(Datalog.SEMICOL);
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
	    this.enterRule(localctx, 4, Datalog.RULE_origin_clause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(Datalog.TRUSTING);
	        this.state = 50;
	        this.origin_element();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 51;
	            this.match(Datalog.COMMA);
	            this.state = 52;
	            this.origin_element();
	            this.state = 57;
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
	    this.enterRule(localctx, 6, Datalog.RULE_origin_element);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            localctx = new OriginElementAuthorityContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.match(Datalog.AUTHORITY);
	            break;
	        case 16:
	            localctx = new OriginElementPreviousContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.match(Datalog.PREVIOUS);
	            break;
	        case 17:
	            localctx = new OriginElementPublicKeyContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.signature_alg();
	            this.state = 61;
	            this.match(Datalog.PUBLICKEYBYTES);
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
	    this.enterRule(localctx, 8, Datalog.RULE_signature_alg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(Datalog.ED25519);
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
	    this.enterRule(localctx, 10, Datalog.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31 || _la===38) {
	            this.state = 67;
	            this.block_element();
	            this.state = 72;
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
	    this.enterRule(localctx, 12, Datalog.RULE_block_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 73;
	            this.check();
	            break;

	        case 2:
	            this.state = 74;
	            this.fact();
	            break;

	        case 3:
	            this.state = 75;
	            this.rule_();
	            break;

	        }
	        this.state = 78;
	        this.match(Datalog.SEMICOL);
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
	    this.enterRule(localctx, 14, Datalog.RULE_fact);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(Datalog.NAME);
	        this.state = 81;
	        this.match(Datalog.LSPARENS);
	        this.state = 82;
	        this.fact_term();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 83;
	            this.match(Datalog.COMMA);
	            this.state = 84;
	            this.fact_term();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(Datalog.RSPARENS);
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
	    this.enterRule(localctx, 16, Datalog.RULE_rule_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.predicate();
	        this.state = 93;
	        this.match(Datalog.RULEOP);
	        this.state = 94;
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
	    this.enterRule(localctx, 18, Datalog.RULE_check);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(Datalog.CHECK);
	        this.state = 97;
	        localctx.kind = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
	            localctx.kind = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 98;
	        this.rule_body();
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 99;
	            this.match(Datalog.OR);
	            this.state = 100;
	            this.rule_body();
	            this.state = 105;
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
	    this.enterRule(localctx, 20, Datalog.RULE_policy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        localctx.kind = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
	            localctx.kind = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 107;
	        this.match(Datalog.IF);
	        this.state = 108;
	        this.rule_body();
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 109;
	            this.match(Datalog.OR);
	            this.state = 110;
	            this.rule_body();
	            this.state = 115;
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
	    this.enterRule(localctx, 22, Datalog.RULE_rule_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.rule_body_element();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 117;
	            this.match(Datalog.COMMA);
	            this.state = 118;
	            this.rule_body_element();
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 124;
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
	    this.enterRule(localctx, 24, Datalog.RULE_rule_body_element);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
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
	            this.state = 128;
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
	    this.enterRule(localctx, 26, Datalog.RULE_predicate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(Datalog.NAME);
	        this.state = 132;
	        this.match(Datalog.LPARENS);
	        this.state = 133;
	        this.term();
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 134;
	            this.match(Datalog.COMMA);
	            this.state = 135;
	            this.term();
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 141;
	        this.match(Datalog.RPARENS);
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
	    this.enterRecursionRule(localctx, 28, Datalog.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            localctx = new ExpressionUnaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 144;
	            this.match(Datalog.OP_NOT);
	            this.state = 145;
	            this.expression(9);
	            break;
	        case 11:
	            localctx = new ExpressionParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 146;
	            this.match(Datalog.LPARENS);
	            this.state = 147;
	            this.expression(0);
	            this.state = 148;
	            this.match(Datalog.RPARENS);
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
	            this.state = 150;
	            this.fact_term();
	            break;
	        case 1:
	            localctx = new ExpressionVariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(Datalog.VARIABLE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 180;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionMultContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, Datalog.RULE_expression);
	                    this.state = 154;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 155;
	                    localctx.mult = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===20 || _la===21)) {
	                        localctx.mult = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 156;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionAddContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, Datalog.RULE_expression);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 158;
	                    localctx.add = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===22 || _la===23)) {
	                        localctx.add = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 159;
	                    this.expression(6);
	                    break;

	                case 3:
	                    localctx = new ExpressionLogicContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, Datalog.RULE_expression);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 161;
	                    localctx.logic = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===24 || _la===25)) {
	                        localctx.logic = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 162;
	                    this.expression(5);
	                    break;

	                case 4:
	                    localctx = new ExpressionCompContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, Datalog.RULE_expression);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 164;
	                    localctx.comp = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2080374784) !== 0))) {
	                        localctx.comp = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 165;
	                    this.expression(4);
	                    break;

	                case 5:
	                    localctx = new ExpressionMethodContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, Datalog.RULE_expression);
	                    this.state = 166;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 167;
	                    this.match(Datalog.METHOD_INVOCATION);
	                    this.state = 168;
	                    this.match(Datalog.LPARENS);
	                    this.state = 177;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8414) !== 0)) {
	                        this.state = 169;
	                        this.term();
	                        this.state = 174;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        while(_la===9) {
	                            this.state = 170;
	                            this.match(Datalog.COMMA);
	                            this.state = 171;
	                            this.term();
	                            this.state = 176;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                        }
	                    }

	                    this.state = 179;
	                    this.match(Datalog.RPARENS);
	                    break;

	                } 
	            }
	            this.state = 184;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	    this.enterRule(localctx, 30, Datalog.RULE_set);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(Datalog.LSPARENS);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8412) !== 0)) {
	            this.state = 186;
	            this.fact_term();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===9) {
	                this.state = 187;
	                this.match(Datalog.COMMA);
	                this.state = 188;
	                this.set_term();
	                this.state = 193;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 196;
	        this.match(Datalog.RSPARENS);
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
	    this.enterRule(localctx, 32, Datalog.RULE_term);
	    try {
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	        case 6:
	        case 7:
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.fact_term();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.match(Datalog.VARIABLE);
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
	    this.enterRule(localctx, 34, Datalog.RULE_fact_term);
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	        case 6:
	        case 7:
	            localctx = new SetTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.set_term();
	            break;
	        case 13:
	            localctx = new SetFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
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
	    this.enterRule(localctx, 36, Datalog.RULE_set_term);
	    try {
	        this.state = 211;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            localctx = new BooleanFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.match(Datalog.BOOLEAN);
	            break;
	        case 2:
	            localctx = new StringFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
	            this.match(Datalog.STRING);
	            break;
	        case 3:
	            localctx = new NumberFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 208;
	            this.match(Datalog.NUMBER);
	            break;
	        case 4:
	            localctx = new BytesFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 209;
	            this.match(Datalog.BYTES);
	            break;
	        case 7:
	            localctx = new DateFactTermContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 210;
	            this.match(Datalog.DATE);
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

Datalog.EOF = antlr4.Token.EOF;
Datalog.VARIABLE = 1;
Datalog.STRING = 2;
Datalog.NUMBER = 3;
Datalog.BYTES = 4;
Datalog.PUBLICKEYBYTES = 5;
Datalog.BOOLEAN = 6;
Datalog.DATE = 7;
Datalog.TRUSTING = 8;
Datalog.COMMA = 9;
Datalog.SEMICOL = 10;
Datalog.LPARENS = 11;
Datalog.RPARENS = 12;
Datalog.LSPARENS = 13;
Datalog.RSPARENS = 14;
Datalog.AUTHORITY = 15;
Datalog.PREVIOUS = 16;
Datalog.ED25519 = 17;
Datalog.RULEOP = 18;
Datalog.OP_NOT = 19;
Datalog.OP_MUL = 20;
Datalog.OP_DIV = 21;
Datalog.OP_SUM = 22;
Datalog.OP_SUB = 23;
Datalog.OP_AND = 24;
Datalog.OP_OR = 25;
Datalog.OP_G = 26;
Datalog.OP_GE = 27;
Datalog.OP_L = 28;
Datalog.OP_LE = 29;
Datalog.OP_EQUAL = 30;
Datalog.CHECK = 31;
Datalog.IF = 32;
Datalog.ALL = 33;
Datalog.OR = 34;
Datalog.ALLOW = 35;
Datalog.DENY = 36;
Datalog.METHOD_INVOCATION = 37;
Datalog.NAME = 38;
Datalog.SINGLE_LINE_COMMENT = 39;
Datalog.DELIMITED_COMMENT_START = 40;
Datalog.DELIMITED_COMMENT_END = 41;
Datalog.DELIMITED_COMMENT = 42;
Datalog.ANY = 43;

Datalog.RULE_authorizer = 0;
Datalog.RULE_authorizer_element = 1;
Datalog.RULE_origin_clause = 2;
Datalog.RULE_origin_element = 3;
Datalog.RULE_signature_alg = 4;
Datalog.RULE_block = 5;
Datalog.RULE_block_element = 6;
Datalog.RULE_fact = 7;
Datalog.RULE_rule_ = 8;
Datalog.RULE_check = 9;
Datalog.RULE_policy = 10;
Datalog.RULE_rule_body = 11;
Datalog.RULE_rule_body_element = 12;
Datalog.RULE_predicate = 13;
Datalog.RULE_expression = 14;
Datalog.RULE_set = 15;
Datalog.RULE_term = 16;
Datalog.RULE_fact_term = 17;
Datalog.RULE_set_term = 18;

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
        this.ruleIndex = Datalog.RULE_authorizer;
    }

	EOF() {
	    return this.getToken(Datalog.EOF, 0);
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
        this.ruleIndex = Datalog.RULE_authorizer_element;
    }

	SEMICOL() {
	    return this.getToken(Datalog.SEMICOL, 0);
	};

	fact() {
	    return this.getTypedRuleContext(FactContext,0);
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
        this.ruleIndex = Datalog.RULE_origin_clause;
    }

	TRUSTING() {
	    return this.getToken(Datalog.TRUSTING, 0);
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
	        return this.getTokens(Datalog.COMMA);
	    } else {
	        return this.getToken(Datalog.COMMA, i);
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
        this.ruleIndex = Datalog.RULE_origin_element;
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
	    return this.getToken(Datalog.AUTHORITY, 0);
	};

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

Datalog.OriginElementAuthorityContext = OriginElementAuthorityContext;

class OriginElementPublicKeyContext extends Origin_elementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	signature_alg() {
	    return this.getTypedRuleContext(Signature_algContext,0);
	};

	PUBLICKEYBYTES() {
	    return this.getToken(Datalog.PUBLICKEYBYTES, 0);
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

Datalog.OriginElementPublicKeyContext = OriginElementPublicKeyContext;

class OriginElementPreviousContext extends Origin_elementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PREVIOUS() {
	    return this.getToken(Datalog.PREVIOUS, 0);
	};

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

Datalog.OriginElementPreviousContext = OriginElementPreviousContext;

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
        this.ruleIndex = Datalog.RULE_signature_alg;
    }

	ED25519() {
	    return this.getToken(Datalog.ED25519, 0);
	};

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
        this.ruleIndex = Datalog.RULE_block;
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
        this.ruleIndex = Datalog.RULE_block_element;
    }

	SEMICOL() {
	    return this.getToken(Datalog.SEMICOL, 0);
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
        this.ruleIndex = Datalog.RULE_fact;
    }

	NAME() {
	    return this.getToken(Datalog.NAME, 0);
	};

	LSPARENS() {
	    return this.getToken(Datalog.LSPARENS, 0);
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

	RSPARENS() {
	    return this.getToken(Datalog.RSPARENS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Datalog.COMMA);
	    } else {
	        return this.getToken(Datalog.COMMA, i);
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
        this.ruleIndex = Datalog.RULE_rule_;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	RULEOP() {
	    return this.getToken(Datalog.RULEOP, 0);
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
        this.ruleIndex = Datalog.RULE_check;
        this.kind = null;
    }

	CHECK() {
	    return this.getToken(Datalog.CHECK, 0);
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
	    return this.getToken(Datalog.IF, 0);
	};

	ALL() {
	    return this.getToken(Datalog.ALL, 0);
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Datalog.OR);
	    } else {
	        return this.getToken(Datalog.OR, i);
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
        this.ruleIndex = Datalog.RULE_policy;
        this.kind = null;
    }

	IF() {
	    return this.getToken(Datalog.IF, 0);
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
	    return this.getToken(Datalog.ALLOW, 0);
	};

	DENY() {
	    return this.getToken(Datalog.DENY, 0);
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Datalog.OR);
	    } else {
	        return this.getToken(Datalog.OR, i);
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
        this.ruleIndex = Datalog.RULE_rule_body;
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
	        return this.getTokens(Datalog.COMMA);
	    } else {
	        return this.getToken(Datalog.COMMA, i);
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
        this.ruleIndex = Datalog.RULE_rule_body_element;
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
        this.ruleIndex = Datalog.RULE_predicate;
    }

	NAME() {
	    return this.getToken(Datalog.NAME, 0);
	};

	LPARENS() {
	    return this.getToken(Datalog.LPARENS, 0);
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
	    return this.getToken(Datalog.RPARENS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Datalog.COMMA);
	    } else {
	        return this.getToken(Datalog.COMMA, i);
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
        this.ruleIndex = Datalog.RULE_expression;
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
	    return this.getToken(Datalog.OP_SUM, 0);
	};

	OP_SUB() {
	    return this.getToken(Datalog.OP_SUB, 0);
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

Datalog.ExpressionAddContext = ExpressionAddContext;

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
	    return this.getToken(Datalog.OP_OR, 0);
	};

	OP_AND() {
	    return this.getToken(Datalog.OP_AND, 0);
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

Datalog.ExpressionLogicContext = ExpressionLogicContext;

class ExpressionUnaryContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OP_NOT() {
	    return this.getToken(Datalog.OP_NOT, 0);
	};

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

Datalog.ExpressionUnaryContext = ExpressionUnaryContext;

class ExpressionParenthesesContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPARENS() {
	    return this.getToken(Datalog.LPARENS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPARENS() {
	    return this.getToken(Datalog.RPARENS, 0);
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

Datalog.ExpressionParenthesesContext = ExpressionParenthesesContext;

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
	    return this.getToken(Datalog.OP_GE, 0);
	};

	OP_LE() {
	    return this.getToken(Datalog.OP_LE, 0);
	};

	OP_G() {
	    return this.getToken(Datalog.OP_G, 0);
	};

	OP_L() {
	    return this.getToken(Datalog.OP_L, 0);
	};

	OP_EQUAL() {
	    return this.getToken(Datalog.OP_EQUAL, 0);
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

Datalog.ExpressionCompContext = ExpressionCompContext;

class ExpressionMethodContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	METHOD_INVOCATION() {
	    return this.getToken(Datalog.METHOD_INVOCATION, 0);
	};

	LPARENS() {
	    return this.getToken(Datalog.LPARENS, 0);
	};

	RPARENS() {
	    return this.getToken(Datalog.RPARENS, 0);
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
	        return this.getTokens(Datalog.COMMA);
	    } else {
	        return this.getToken(Datalog.COMMA, i);
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

Datalog.ExpressionMethodContext = ExpressionMethodContext;

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

Datalog.ExpressionTermContext = ExpressionTermContext;

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
	    return this.getToken(Datalog.OP_MUL, 0);
	};

	OP_DIV() {
	    return this.getToken(Datalog.OP_DIV, 0);
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

Datalog.ExpressionMultContext = ExpressionMultContext;

class ExpressionVariableContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(Datalog.VARIABLE, 0);
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

Datalog.ExpressionVariableContext = ExpressionVariableContext;

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
        this.ruleIndex = Datalog.RULE_set;
    }

	LSPARENS() {
	    return this.getToken(Datalog.LSPARENS, 0);
	};

	RSPARENS() {
	    return this.getToken(Datalog.RSPARENS, 0);
	};

	fact_term() {
	    return this.getTypedRuleContext(Fact_termContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Datalog.COMMA);
	    } else {
	        return this.getToken(Datalog.COMMA, i);
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
        this.ruleIndex = Datalog.RULE_term;
    }

	fact_term() {
	    return this.getTypedRuleContext(Fact_termContext,0);
	};

	VARIABLE() {
	    return this.getToken(Datalog.VARIABLE, 0);
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
        this.ruleIndex = Datalog.RULE_fact_term;
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

Datalog.SetFactTermContext = SetFactTermContext;

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

Datalog.SetTermContext = SetTermContext;

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
        this.ruleIndex = Datalog.RULE_set_term;
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
	    return this.getToken(Datalog.STRING, 0);
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

Datalog.StringFactTermContext = StringFactTermContext;

class BytesFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BYTES() {
	    return this.getToken(Datalog.BYTES, 0);
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

Datalog.BytesFactTermContext = BytesFactTermContext;

class BooleanFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN() {
	    return this.getToken(Datalog.BOOLEAN, 0);
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

Datalog.BooleanFactTermContext = BooleanFactTermContext;

class DateFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DATE() {
	    return this.getToken(Datalog.DATE, 0);
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

Datalog.DateFactTermContext = DateFactTermContext;

class NumberFactTermContext extends Set_termContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(Datalog.NUMBER, 0);
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

Datalog.NumberFactTermContext = NumberFactTermContext;


Datalog.AuthorizerContext = AuthorizerContext; 
Datalog.Authorizer_elementContext = Authorizer_elementContext; 
Datalog.Origin_clauseContext = Origin_clauseContext; 
Datalog.Origin_elementContext = Origin_elementContext; 
Datalog.Signature_algContext = Signature_algContext; 
Datalog.BlockContext = BlockContext; 
Datalog.Block_elementContext = Block_elementContext; 
Datalog.FactContext = FactContext; 
Datalog.Rule_Context = Rule_Context; 
Datalog.CheckContext = CheckContext; 
Datalog.PolicyContext = PolicyContext; 
Datalog.Rule_bodyContext = Rule_bodyContext; 
Datalog.Rule_body_elementContext = Rule_body_elementContext; 
Datalog.PredicateContext = PredicateContext; 
Datalog.ExpressionContext = ExpressionContext; 
Datalog.SetContext = SetContext; 
Datalog.TermContext = TermContext; 
Datalog.Fact_termContext = Fact_termContext; 
Datalog.Set_termContext = Set_termContext; 
