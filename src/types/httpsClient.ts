/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HttpMethodsEnum } from './enums';
import { IncomingMessage } from 'http';

export type ResponseHeaderValue = string | string[] | undefined;

export type RequestHeaders = Record<string, string | number | string[]>;

export type ResponseHeaders = Record<string, ResponseHeaderValue>;

export type ResponseJSONBody = Record<string, unknown>;

export type RequestData = Record<string, unknown> | string;

export type TimeoutError = TypeError & { code?: string };

export declare class HttpsClientResponseClass {
	constructor(resp: IncomingMessage);
	statusCode: () => number;
	headers: () => ResponseHeaders;
	rawResponse: () => IncomingMessage;
	responseBodyToJSON: () => Promise<ResponseJSONBody>;
}

export declare class HttpsClientClass {
	constructor();
	clearSockets: () => boolean;
	sendRequest: (
		host: string,
		port: number,
		path: string,
		method: HttpMethodsEnum,
		headers: RequestHeaders,
		timeout: number,
		data?: RequestData,
	) => Promise<HttpsClientResponseClass>;
}
