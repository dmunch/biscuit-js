import { CharStream, Token, ErrorListener, RecognitionException }  from 'antlr4';
import { languages } from "monaco-editor";

import DatalogLexer from "./gen/DatalogLexer.js";

import TokensProvider = languages.TokensProvider;
import IState = languages.IState;
import IToken = languages.IToken;

class DatalogGrammarState implements IState {
    public isComment: boolean = false;

    constructor(isComment: boolean)
    {
        this.isComment = isComment;
    }
    clone(): IState {
        return new DatalogGrammarState(this.isComment);
    }

    equals(other: IState): boolean {
        var o = other as DatalogGrammarState;
        if(o == null)
        {
            return false;
        }

        return this.isComment == o.isComment;
    }
}

class DatalogToken implements IToken {
    scopes: string;
    startIndex: number;

    constructor(ruleName: String, startIndex: number) {
        this.scopes = ruleName.toLowerCase()+ ".bcdl";
        this.startIndex = startIndex;
    }
}

class ErrorCollectorListener extends ErrorListener<number> {
    errorStartingPoints : number[] = []

    syntaxError(recognizer: DatalogLexer, offendingSymbol: number, line: number, column: number, msg: string, e: RecognitionException | undefined) {                            
        this.errorStartingPoints.push(column)
    }
}


export class DatalogTokensProvider implements TokensProvider {
    keywords = new Set(['DENY', 'ALLOW', 'IF', 'ALL', 'CHECK', 'TRUSTING', 'PREVIOUS', 'AUTHORITY', 'ED25519', 'OR', 'AND']);
    constants = new Set(['STRING', 'NUMBER', 'BYTES', 'PUBLICKEYBYTES', 'BOOLEAN', 'DATE']);
    
    getInitialState(): languages.IState {
        return new DatalogGrammarState(false);
    }

    tokenize(line: string, state: languages.IState): languages.ILineTokens {
        let tokens: IToken[] = [];
        
        const chars = new CharStream(line);
        const lexer = new DatalogLexer(chars);
        
        lexer.removeErrorListeners();                
        let errorListener = new ErrorCollectorListener();
        lexer.addErrorListener(errorListener);

        let token;
        let newState = new DatalogGrammarState((state as DatalogGrammarState).isComment);
        
        while ((token = lexer.nextToken()) != null) {
            if (token.type == Token.EOF) {
                break;
            }
            let tokenTypeName = DatalogLexer.symbolicNames[token.type];
                    
            if(tokenTypeName == "DELIMITED_COMMENT_START"){                
                newState.isComment = true;
            }

            if(tokenTypeName == "DELIMITED_COMMENT_END") {
                newState.isComment = false;
                tokens.push(new DatalogToken("comment", token.start));
                continue;
            }
            
            if(newState.isComment) {
                tokens.push(new DatalogToken("comment", token.start));
                continue;
            }
            
            if(tokenTypeName != null) {
                if(this.keywords.has(tokenTypeName)) {
                    tokens.push(new DatalogToken("keyword", token.start));
                    continue;
                }
            }

            tokenTypeName = tokenTypeName == null ? "" : tokenTypeName;
            tokenTypeName = tokenTypeName == "NAME"  ? "entity.name.type" : tokenTypeName;
            tokenTypeName = tokenTypeName == "DATE"  ? "number" : tokenTypeName;
            tokenTypeName = tokenTypeName == "BOOLEAN"  ? "keyword" : tokenTypeName;
            tokenTypeName = tokenTypeName == "SINGLE_LINE_COMMENT"  ? "comment" : tokenTypeName;            
            tokenTypeName = tokenTypeName.toLocaleLowerCase();
                        
            tokens.push(new DatalogToken(tokenTypeName, token.start));            
        }
                
        for (let e of errorListener.errorStartingPoints) {
            tokens.push(new DatalogToken("error", e));
        }

        return {tokens: tokens, endState: newState};
    }

}