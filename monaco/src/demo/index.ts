
import { registerDatalogLanguage } from "../index"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

declare global {
    interface Window { datalogEditor: monaco.editor.IStandaloneCodeEditor; }
}

registerDatalogLanguage('vs-dark', { 
    getWorkerUrl: function (workerId: string, label: string) {
        if (label === 'bcdl')
            return "./datalogWorker.js";
        return './editor.worker.js';
    }
});

let editorDomElement = document.getElementById("editor");

if(editorDomElement != null) {
    let editor = monaco.editor.create(editorDomElement, {
        language: "bcdl",
        theme: "datalog",
        codeLens: false,    
        lineNumbers: "off",
        minimap: {
            enabled: false
        },
        scrollBeyondLastLine: false
    });
    window.datalogEditor = editor;
}