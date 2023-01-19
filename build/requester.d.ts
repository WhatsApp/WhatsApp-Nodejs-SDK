/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { HTTP_Methods_Enum } from './types/enums';
import { Requester_Class } from '@/requester';
export default class Requester implements Requester_Class {
	private _client;
	private _access_token;
	private _phone_number_id;
	private _business_acct_id;
	private _api_version;
	private _user_agent;
	private _host;
	private _protocol;
	private _port;
	constructor(
		host: string,
		api_version: string,
		phone_number_id: number,
		access_token: string,
		business_acct_id: string,
		user_agent: string,
	);
	private _build_header;
	private _build_CAPI_path;
	send_CAPI_request(
		method: HTTP_Methods_Enum,
		endpoint: string,
		timeout: number,
		body?: any,
	): Promise<import('./types/https_client').HTTPS_Client_Response_Class>;
}
