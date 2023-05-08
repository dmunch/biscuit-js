import { ILangError, LangErrorListener } from "./LangErrorListener";
import { CharStream, CommonTokenStream }  from 'antlr4';

import DatalogLexer from "./gen/DatalogLexer.js";
import DatalogParser from "./gen/DatalogParser.js";

export default class TodoLangLanguageService {
    validate(code: string): ILangError[] {
        const syntaxErrors: ILangError[] = this.parse(code);
        
        return syntaxErrors;
    }

    parse(code: string) : ILangError[] {
        const chars = new CharStream(code);
        const lexer = new DatalogLexer(chars);
        const langErrorsListner = new LangErrorListener();

        const tokenStream = new CommonTokenStream(lexer);
        const parser = new DatalogParser(tokenStream);
                
        lexer.removeErrorListeners()
        lexer.addErrorListener(langErrorsListner);

        parser.removeErrorListeners();
        parser.addErrorListener(langErrorsListner);
        
        const ast = parser.authorizer();

        const errors: ILangError[]  = langErrorsListner.getErrors();

        return errors;
    }
}