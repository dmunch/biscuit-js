lexer grammar DatalogLexer;
VARIABLE: '$'[a-zA-Z_:0-9]+;
STRING : '"' (~('"' | '\\' | '\r' | '\n') | '\\' ('"' | '\\'))*? '"';
NUMBER: '-'?[0-9]+;
BYTES: 'hex:'([a-f] | [0-9])+;
PUBLICKEYBYTES: '/'([a-f] | [0-9])+;
BOOLEAN: 'true' | 'false';
DATE: [0-9]* '-' [0-9] [0-9] '-' [0-9] [0-9] 'T' [0-9] [0-9] ':' [0-9] [0-9] ':' [0-9] [0-9] ( 'Z' | ( ('+' | '-') [0-9] [0-9] ':' [0-9] [0-9] ));

TRUSTING: 'trusting';
COMMA: ',';
SEMICOL: ';';
LPARENS: '(';
RPARENS: ')';

LSPARENS: '[';
RSPARENS: ']';

AUTHORITY: 'authority';
PREVIOUS: 'previous';
ED25519: 'ed25519';

RULEOP: '<-';

OP_NOT: '!';
OP_MUL: '*';
OP_DIV: '/';
OP_SUM: '+';
OP_SUB: '-';

OP_AND: '&&';
OP_OR: '||';

OP_G: '>';
OP_GE: '>=';
OP_L: '<';
OP_LE: '<=';
OP_EQUAL: '==';

CHECK: 'check';
IF: 'if';
ALL: 'all';
OR: 'or';

ALLOW: 'allow';
DENY: 'deny';

SINGLE_LINE_COMMENT:  '//' InputCharacter* -> channel(2);
DELIMITED_COMMENT_START: '/*' -> channel(2);
DELIMITED_COMMENT_END: '*/' -> channel(2);
DELIMITED_COMMENT:  DELIMITED_COMMENT_START  .*? DELIMITED_COMMENT_END -> channel(2);

METHOD_INVOCATION: '.' ([a-z] | [A-Z] ) ([a-z] | [A-Z] | [0-9] | '_' )*;
NAME: [a-zA-Z][a-zA-Z_:0-9]+;

fragment InputCharacter: ~[\r\n\u0085\u2028\u2029];

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines
ANY: . ;