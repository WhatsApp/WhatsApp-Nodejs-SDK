/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IncomingMessage } from 'http';
import { request, Agent } from 'https';
import {
	HTTPS_Client_Class,
	HTTPS_Client_Response_Class,
	Request_Headers,
	Request_Data,
	Response_Headers,
	Response_JSON_Body,
} from '@/https_client';
import Logger from './logger';
import { HTTP_Methods_Enum } from './types/enums';

const lib_name = 'HTTPS_CLIENT';
const log_local = false;
const logger = new Logger(lib_name, process.env.DEBUG === 'true' || log_local);

export default class HTTPS_Client implements HTTPS_Client_Class {
	private _agent: Agent;

	constructor() {
		this._agent = new Agent({ keepAlive: true });
	}

	clear_sockets(): boolean {
		this._agent.destroy();
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

			logger.log({
				hostname: hostname,
				port: port,
				path,
				method,
				agent,
				headers,
			});

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
						logger.log(requestData);
						if (
							method === HTTP_Methods_Enum.Post ||
							method == HTTP_Methods_Enum.Put
						)
							req.write(requestData);
						req.end();
					});
				} else {
					if (
						method === HTTP_Methods_Enum.Post ||
						method == HTTP_Methods_Enum.Put
					)
						req.write(requestData);
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
				} catch (err) {
					reject(err);
				}
			});
		});
	}
}
