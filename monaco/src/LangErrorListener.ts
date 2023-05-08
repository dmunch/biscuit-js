import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";

export interface ILangError {
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
    message: string;
    code: string;
}

export class LangErrorListener implements ErrorListener<any>{
    private errors: ILangError[] = []
    syntaxError(recognizer: Recognizer<any>, offendingSymbol: any, line: number, charPositionInLine: number, message: string, e: RecognitionException | undefined): void {
        const offendingToken = offendingSymbol as Token;
        
        if(offendingToken != undefined) {
            this.errors.push(
                {
                    startLineNumber: offendingToken.line,
                    endLineNumber: offendingToken.line,
                    startColumn: offendingToken.column,
                    endColumn: offendingToken.column + offendingToken.text.length,
                    message,
                    code: "1" // This the error code you can customize them as you want
                }
            )
            return;
        }

        this.errors.push(
            {
                startLineNumber:line,
                endLineNumber: line,
                startColumn: charPositionInLine,
                endColumn: charPositionInLine+1,//Let's suppose the length of the error is only 1 char for simplicity
                message,
                code: "1" // This the error code you can customize them as you want
            }
        )
    }

    getErrors(): ILangError[] {
        return this.errors;
    }
}