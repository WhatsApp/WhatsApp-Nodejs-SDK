/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Requester_Class } from '@/requester';
import { HTTPS_Client_Response } from './HTTPS_Client';
import { HTTP_Methods_Enum } from '@/enums';
export default class Requester implements Requester_Class {
	private _client;
	private _phone_number_id;
	private _business_acct_id;
	private _api_version;
	private _access_token;
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
	send_CAPI_request(
		method: HTTP_Methods_Enum,
		body: any,
		endpoint: string,
		timeout: number,
	): Promise<HTTPS_Client_Response>;
}
