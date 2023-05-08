import * as monaco from "monaco-editor";
import { LangWorker } from './LangWorker';

import Uri = monaco.Uri;

export class WorkerManager {

	private worker: monaco.editor.MonacoWebWorker<LangWorker> | null;
	private workerClientProxy: Promise<LangWorker> | null;

	constructor() {
		this.worker = null;
        this.workerClientProxy = null;
	}

	private getClientproxy(): Promise<LangWorker> {

		if (!this.workerClientProxy) {
			this.worker = monaco.editor.createWebWorker<LangWorker>({				
				moduleId: 'LangWorker',
				label: 'bcdl',
				createData: {
					languageId: 'bcdl',
				}
			});

			this.workerClientProxy = <Promise<LangWorker>><any>this.worker.getProxy();
		}

		return this.workerClientProxy;
	}

	async getLanguageServiceWorker(...resources: Uri[]): Promise<LangWorker> {
		const _client: LangWorker = await this.getClientproxy();
		await this.worker!.withSyncedResources(resources)
		return _client;
	}
}