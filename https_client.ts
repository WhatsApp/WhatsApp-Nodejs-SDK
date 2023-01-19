/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as nock from 'nock';
import { IncomingMessage } from 'http';
import { request, Agent } from 'https';
import { WA_Config_Type } from '@/config';
import { HTTP_Methods_Enum } from '../types/enums';

import {
	HTTPS_Client_Class,
	HTTPS_Client_Response_Class,
	Request_Headers,
	Request_Data,
	Response_Headers,
	Response_JSON_Body,
} from '@/https_client';

const default_fail_response = { success: false };
const default_messages_response = {
	messaging_product: 'whatsapp',
	contacts: [
		{
			input: '16505076520',
			wa_id: '16505076520',
		},
	],
	messages: [
		{
			id: 'wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA',
		},
	],
};

const sdk_config: WA_Config_Type = (global as any).sdk_config;
const base_path = `/${sdk_config.CLOUD_API_VERSION}/${sdk_config.WA_PHONE_NUMBER_ID}`;

const scope = nock(`https://${sdk_config.WA_BASE_URL}`, {
	reqheaders: {
		Authorization: `Bearer ${sdk_config.CLOUD_API_ACCESS_TOKEN}`,
	},
})
	.get(`${base_path}/test`)
	.delay(200)
	.replyWithError(default_fail_response)
	.post(`${base_path}/messages`)
	.reply(200, default_messages_response)
	.post(`${base_path}/test`)
	.delay(200)
	.reply((uri, requestBody) => {
		return [200, requestBody];
	});

export default class HTTPS_Client implements HTTPS_Client_Class {
	private _agent: Agent;

	constructor() {
		this._agent = new Agent({ keepAlive: false });
	}

	clear_sockets(): boolean {
		nock.cleanAll();
		nock.restore();
		return true;
	}

	async send_request(
		hostname: string,
		port: number,
		path: string,
		method: string,
		headers: Request_Headers,
		timeout: number,
		requestData?: Request_Data,
	): Promise<HTTPS_Client_Response_Class> {
		const agent = this._agent;

		return new Promise<HTTPS_Client_Response_Class>((resolve, reject) => {
			const req = request({
				hostname: hostname,
				port: port,
				path: path,
				method: method,
				agent: agent,
				headers: headers,
			});

			console.log(hostname);
			console.log(port);
			console.log(path);
			console.log(headers);
			console.log(requestData);

			console.log(req.method);
			console.log(req.protocol);
			console.log(req.host);
			console.log(req.socket);

			req.setTimeout(timeout, () => {
				// TODO: Handle timeout error with error handler CB and custom error code
				req.destroy();
			});

			req.on('response', (resp) => {
				resolve(new HTTPS_Client_Response(resp));
			});

			req.on('error', (error) => {
				reject(error);
			});

			req.once('socket', (socket) => {
				if (socket.connecting) {
					socket.once('secureConnect', () => {
						if (method !== HTTP_Methods_Enum.Get) req.write(requestData);
						req.end();
					});
				} else {
					if (method !== HTTP_Methods_Enum.Get) req.write(requestData);
					req.end();
				}
			});
		});
	}
}

export class HTTPS_Client_Response implements HTTPS_Client_Response_Class {
	private _resp: IncomingMessage;
	private _status_code: number;
	private _headers: Response_Headers;

	constructor(resp: IncomingMessage) {
		this._resp = resp;
		this._status_code = resp.statusCode || 400;
		this._headers = resp.headers || {};
	}

	status_code(): number {
		return this._status_code;
	}

	headers(): Response_Headers {
		return this._headers;
	}

	raw_response(): IncomingMessage {
		return this._resp;
	}

	async response_body_to_JSON(): Promise<Response_JSON_Body> {
		return new Promise((resolve, reject) => {
			let response = '';

			this._resp.setEncoding('utf8');
			this._resp.on('data', (chunk) => {
				response += chunk.toString();
			});
			this._resp.once('end', () => {
				try {
					resolve(JSON.parse(response));
				} catch (e) {
					reject(e);
				}
			});
		});
	}
}
