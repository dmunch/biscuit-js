import * as monaco from "monaco-editor";
import LanguageService from "./LanguageService";
import { ILangError } from "./LangErrorListener";

import IWorkerContext = monaco.worker.IWorkerContext;

export class LangWorker {

    private _ctx: IWorkerContext;
    private languageService: LanguageService;
    constructor(ctx: IWorkerContext) {
        this._ctx = ctx;
        this.languageService = new LanguageService();
    }

    doValidation(): Promise<ILangError[]> {
        const code = this.getTextDocument();
        return Promise.resolve(this.languageService.validate(code));
    }
    private getTextDocument(): string {
        const model = this._ctx.getMirrorModels()[0];// When there are multiple files open, this will be an array
        return model.getValue();
    }
}