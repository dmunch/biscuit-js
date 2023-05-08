import * as monaco from "monaco-editor";
import { LangWorker  } from "./LangWorker";
//import { WorkerAccessor } from "./setup";

import { ILangError } from "./LangErrorListener";

export type WorkerAccessor = (...uris: monaco.Uri[]) => Promise<LangWorker>;

export class DiagnosticsAdapter {
    constructor(private worker: WorkerAccessor) {
        const onModelAdd = (model: monaco.editor.IModel): void => {
            let handle: any;
            model.onDidChangeContent(() => {
                // here we are Debouncing the user changes, so everytime a new change is done, we wait 500ms before validating
                // otherwise if the user is still typing, we cancel the
                clearTimeout(handle);
                handle = setTimeout(() => this.validate(model.uri), 500);
            });

            this.validate(model.uri);
        };
        monaco.editor.onDidCreateModel(onModelAdd);
        monaco.editor.getModels().forEach(onModelAdd);
    }
    private async validate(resource: monaco.Uri): Promise<void> {
        // get the worker proxy
        const worker = await this.worker(resource)
        // call the validate methode proxy from the langaueg service and get errors
        const errorMarkers = await worker.doValidation();
        // get the current model(editor or file) which is only one
        const model = monaco.editor.getModel(resource);

        if(model == null){
            return;
        }

        // add the error markers and underline them with severity of Error
        monaco.editor.setModelMarkers(model, 'bcdl', errorMarkers.map(toDiagnostics));
    }
}
function toDiagnostics(error: ILangError): monaco.editor.IMarkerData {
    return {
        ...error,
        severity: monaco.MarkerSeverity.Error,
    };
}