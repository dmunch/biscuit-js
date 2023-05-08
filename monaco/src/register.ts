import { DatalogTokensProvider } from "./DatalogTokensProvider.js";
import { DiagnosticsAdapter, WorkerAccessor } from "./DiagnosticsAdapter.js";
import { LangWorker } from "./LangWorker.js";
import { WorkerManager } from "./WorkerManager.js"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

const richLanguageConfiguration: monaco.languages.LanguageConfiguration = {
    // If we want to support code folding, brackets ... ( [], (), {}....), we can override some properties here
    // check the doc
};

export function registerDatalogLanguage(baseTheme: monaco.editor.BuiltinTheme, monacoEnvironment: monaco.Environment) {
    monaco.languages.register({id: 'bcdl'});
    monaco.languages.setTokensProvider("bcdl", new DatalogTokensProvider());
    /*
    (window as any).MonacoEnvironment = {
        getWorkerUrl: function (workerId: string, label: string) {
            if (label === 'bcdl')
                return "./datalogWorker.js";
            return './editor.worker.js';
        }
    }
    */

    // this is for setting up getWorkerUrl or getWorker, 
    // depending on the chosen bundler
    (window as any).MonacoEnvironment = monacoEnvironment;
    
    monaco.languages.onLanguage('bcdl', () => {        
        monaco.languages.setLanguageConfiguration('bcdl', richLanguageConfiguration);
        const client = new WorkerManager();
    
        const worker: WorkerAccessor = (...uris: monaco.Uri[]): Promise<LangWorker> => {
            return client.getLanguageServiceWorker(...uris);
        };

        new DiagnosticsAdapter(worker);
    });
    
    
    monaco.editor.defineTheme('datalog', {
        base: baseTheme,
        inherit: true,
        colors: {},
        rules: [
            {token: 'entity.name.type', foreground: "#4EC9B0"},
            {token: 'bytes', foreground: "#d6b9ae"},
            {token: 'error', foreground: "#FF0000"}
        ]
    });
}