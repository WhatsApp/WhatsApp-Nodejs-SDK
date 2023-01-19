/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Logger from './logger';
import HTTPS_Client from './https_client';
import { HTTP_Methods_Enum } from './types/enums';
import { Requester_Class, General_Header_Interface } from '@/requester';

const lib_name = 'REQUESTER';
const log_local = false;
const logger = new Logger(lib_name, process.env.DEBUG === 'true' || log_local);

export default class Requester implements Requester_Class {
	private _client: Readonly<HTTPS_Client>;
	private _access_token: Readonly<string>;
	private _phone_number_id: Readonly<number>;
	private _business_acct_id: Readonly<string>;
	private _api_version: Readonly<string>;
	private _user_agent: Readonly<string>;
	private _host: Readonly<string>;
	private _protocol: Readonly<string> = 'https:';
	private _port: Readonly<number> = 443;

	constructor(
		host: string,
		api_version: string,
		phone_number_id: number,
		access_token: string,
		business_acct_id: string,
		user_agent: string,
	) {
		this._client = new HTTPS_Client();
		this._host = host;
		this._api_version = api_version;
		this._phone_number_id = phone_number_id;
		this._access_token = access_token;
		this._business_acct_id = business_acct_id;
		this._user_agent = user_agent;
	}

	private _build_header(content_type: string): General_Header_Interface {
		const headers: General_Header_Interface = {
			'Content-Type': content_type,
			'Authorization': `Bearer ${this._access_token}`,
			'User-Agent': this._user_agent,
		};
		return headers;
	}

	private _build_CAPI_path(endpoint: string): string {
		return `/${this._api_version}/${this._phone_number_id}/${endpoint}`;
	}

	async send_CAPI_request(
		method: HTTP_Methods_Enum,
		endpoint: string,
		timeout: number,
		body?: any,
	) {
		const content_type = 'application/json';

		logger.log(
			`${method} : ${this._protocol.toLowerCase()}//${this._host}:${
				this._port
			}/${this._build_CAPI_path(endpoint)}`,
		);

		return await this._client.send_request(
			this._host,
			this._port,
			this._build_CAPI_path(endpoint),
			method,
			this._build_header(content_type),
			timeout,
			method == 'POST' || method == 'PUT' ? body : undefined,
		);
	}
}
