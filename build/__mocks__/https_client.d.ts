/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { IncomingMessage } from 'http';
import {
	HTTPS_Client_Class,
	HTTPS_Client_Response_Class,
	Request_Headers,
	Request_Data,
	Response_Headers,
	Response_JSON_Body,
} from '@/https_client';
export default class HTTPS_Client implements HTTPS_Client_Class {
	private _agent;
	constructor();
	clear_sockets(): boolean;
	send_request(
		hostname: string,
		port: number,
		path: string,
		method: string,
		headers: Request_Headers,
		timeout: number,
		requestData?: Request_Data,
	): Promise<HTTPS_Client_Response_Class>;
}
export declare class HTTPS_Client_Response
	implements HTTPS_Client_Response_Class
{
	private _resp;
	private _status_code;
	private _headers;
	constructor(resp: IncomingMessage);
	status_code(): number;
	headers(): Response_Headers;
	raw_response(): IncomingMessage;
	response_body_to_JSON(): Promise<Response_JSON_Body>;
}
