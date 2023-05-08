//@ts-ignore
import * as worker from "monaco-editor/esm/vs/editor/editor.worker.js";
import * as monaco from "monaco-editor";

import { LangWorker } from './LangWorker';

self.onmessage = () => {
	worker.initialize((ctx: monaco.worker.IWorkerContext) => {
		return new LangWorker(ctx)
	});
};