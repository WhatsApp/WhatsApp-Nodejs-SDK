/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	Request_Headers,
	HTTPS_Client_Response_Class,
	Response_JSON_Body,
} from '@/https_client';
import { HTTP_Methods_Enum } from './enums';

export declare type General_Request_Body = Record<string, any>;

export declare interface General_Header_Interface extends Request_Headers {
	/**
	 * Authorization token. This is required for all HTTP requests made to the graph API.
	 * @default 'Bearer '
	 */
	'Authorization': string;

	/**
	 * Content type of the message being sent. This is required for all HTTP requests made to the graph API.
	 * @default 'application/json'
	 */
	'Content-Type': string;

	/**
	 * User agent field sent in all requests. This is used to gather SDK usage metrics and help
	 * better triage support requests.
	 * @default `WA_SDK/${ SDK_version } (Node.js ${ process.version })`
	 */
	'User-Agent': string;
}

export declare interface Requester_Response_Interface<
	T extends Response_JSON_Body,
> extends HTTPS_Client_Response_Class {
	response_body_to_JSON: () => Promise<T>;
}

export declare class Requester_Class {
	constructor(
		host: string,
		api_version: string,
		phone_number_id: number,
		access_token: string,
		business_acct_id: string,
		user_agent: string,
	);
	send_CAPI_request: (
		method: HTTP_Methods_Enum,
		path: string,
		timeout: number,
		body?: any,
	) => Promise<Requester_Response_Interface<any>>;
}
