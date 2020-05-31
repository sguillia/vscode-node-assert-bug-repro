import * as vscode from 'vscode';
import * as assert from "assert";

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "node-bug" is now active!');

	try {
		// This will throw "call.getFileName is not a function"
		assert(0);
	} catch (e) {
		// Log the error, otherwise vscode will not print it in console
		console.error(e);

		/*
		TypeError: call.getFileName is not a function
	at getErrMessage (assert.js:270:25)
	at innerOk (assert.js:361:17)
	at ok (assert.js:381:3)
	at activate (/home/.../node-bug/out/extension.js:9:9)
	at Function._callActivateOptional (/usr/share/code-insiders/resources/app/out/vs/workbench/services/extensions/node/extensionHostProcess.js:841:509)
	at Function._callActivate (/usr/share/code-insiders/resources/app/out/vs/workbench/services/extensions/node/extensionHostProcess.js:841:160)
	at /usr/share/code-insiders/resources/app/out/vs/workbench/services/extensions/node/extensionHostProcess.js:839:960
	at processTicksAndRejections (internal/process/task_queues.js:93:5)
	at async Promise.all (index 15)
		*/
	}
}

export function deactivate() { }
