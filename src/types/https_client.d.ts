/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HTTP_Methods_Enum } from './enums';
import { IncomingMessage } from 'http';

export declare type Response_Header_Value = string | string[] | undefined;

export declare type Request_Headers = Record<
	string,
	string | number | string[]
>;

export declare type Response_Headers = Record<string, Response_Header_Value>;

export declare type Response_JSON_Body = Record<string, unknown>;

export declare type Request_Data = Record<string, unknown> | string;

export declare type Timeout_Error = TypeError & { code?: string };

export declare class HTTPS_Client_Response_Class {
	constructor(resp: IncomingMessage);
	status_code: () => number;
	headers: () => Response_Headers;
	raw_response: () => IncomingMessage;
	response_body_to_JSON: () => Promise<Response_JSON_Body>;
}

export declare class HTTPS_Client_Class {
	constructor();
	clear_sockets: () => boolean;
	send_request: (
		host: string,
		port: number,
		path: string,
		method: HTTP_Methods_Enum,
		headers: Request_Headers,
		timeout: number,
		data?: Request_Data,
	) => Promise<HTTPS_Client_Response_Class>;
}
