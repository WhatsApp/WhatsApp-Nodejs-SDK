/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	RequestHeaders,
	HttpsClientResponseClass,
	ResponseJSONBody,
} from './httpsClient';
import { HttpMethodsEnum } from './enums';

export type GeneralRequestBody = Record<string, any>;

export interface GeneralHeaderInterface extends RequestHeaders {
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

export interface RequesterResponseInterface<T extends ResponseJSONBody>
	extends HttpsClientResponseClass {
	responseBodyToJSON: () => Promise<T>;
}

export declare class RequesterClass {
	constructor(
		host: string,
		apiVersion: string,
		phoneNumberId: number,
		accessToken: string,
		businessAcctId: string,
		userAgent: string,
	);
	sendCAPIRequest: (
		method: HttpMethodsEnum,
		path: string,
		timeout: number,
		body?: any,
	) => Promise<RequesterResponseInterface<any>>;
}
