parser grammar DatalogParser;
options { tokenVocab=DatalogLexer; }

authorizer: (authorizer_element)* EOF;
authorizer_element: ( fact_or_rule | policy | check ) SEMICOL;

origin_clause: TRUSTING origin_element (COMMA origin_element)*;
origin_element
    : AUTHORITY #originElementAuthority
    | PREVIOUS #originElementPrevious
    | signature_alg  PUBLICKEYBYTES #originElementPublicKey
    ;

signature_alg: ED25519;

block: (block_element)*;
block_element: ( check | fact | fact_or_rule) SEMICOL;

// decision if this is a fact or rule needs to be taken based on semantic
// check of the AST
// same goes for variables being not allowed in simple facts
fact_or_rule: NAME LPARENS term (COMMA term)*  RPARENS (RULEOP rule_body)?;

fact: NAME LPARENS fact_term (COMMA fact_term)* RPARENS;
rule_: predicate RULEOP rule_body;

check: CHECK kind=(IF | ALL) rule_body (OR rule_body)*;
policy: kind=(ALLOW | DENY) IF rule_body (OR rule_body)*;

rule_body: rule_body_element (COMMA rule_body_element)* (origin_clause)?;
rule_body_element: predicate | expression;
predicate: NAME LPARENS term (COMMA term)* RPARENS;

expression
    : OP_NOT expression #expressionUnary
    | LPARENS expression RPARENS #expressionParentheses
    | expression METHOD_INVOCATION LPARENS (term ( COMMA term)* )? RPARENS #expressionMethod
    | expression mult=(OP_MUL| OP_DIV) expression #expressionMult
    | expression add=(OP_SUM | OP_SUB) expression #expressionAdd
    | expression logic=(OP_OR | OP_AND) expression #expressionLogic
    | expression comp=(OP_GE | OP_LE | OP_G | OP_L | OP_EQUAL) expression #expressionComp
    | fact_term #expressionTerm
    | VARIABLE #expressionVariable
    ;

set: LSPARENS (fact_term (COMMA set_term)* )? RSPARENS;

term: fact_term | VARIABLE;
fact_term: set_term #setTerm
    | set #setFactTerm;
set_term: BOOLEAN #booleanFactTerm
    | STRING #stringFactTerm
    | NUMBER #numberFactTerm
    | BYTES #bytesFactTerm
    | DATE #dateFactTerm;
