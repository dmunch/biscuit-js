import {DatalogTokensProvider} from "./DatalogTokensProvider"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

declare global {
    interface Window { datalogEditor: monaco.editor.IStandaloneCodeEditor; }
}

monaco.languages.register({id: 'bcdl'});
monaco.languages.setTokensProvider("bcdl", new DatalogTokensProvider());


monaco.editor.defineTheme('datalog', {
    base: 'vs-dark',
    inherit: true,
    colors: {},
    rules: [
        {token: 'entity.name.type', foreground: "#4EC9B0"},
        {token: 'bytes', foreground: "#d6b9ae"},
        {token: 'error', foreground: "#FF0000"}
    ]
});

let editorDomElement = document.getElementById("editor");

if(editorDomElement != null)
{
    
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
