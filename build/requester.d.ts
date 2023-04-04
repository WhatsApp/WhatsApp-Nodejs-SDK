/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import HttpsClient from './HttpsClient';
import { HttpMethodsEnum } from './types/enums';
import { RequesterClass, GeneralHeaderInterface } from '@/requester';
export default class Requester implements RequesterClass {
	client: Readonly<HttpsClient>;
	accessToken: Readonly<string>;
	phoneNumberId: Readonly<number>;
	businessAcctId: Readonly<string>;
	apiVersion: Readonly<string>;
	userAgent: Readonly<string>;
	host: Readonly<string>;
	protocol: Readonly<string>;
	port: Readonly<number>;
	constructor(
		host: string,
		apiVersion: string,
		phoneNumberId: number,
		accessToken: string,
		businessAcctId: string,
		userAgent: string,
	);
	buildHeader(contentType: string): GeneralHeaderInterface;
	buildCAPIPath(endpoint: string): string;
	sendCAPIRequest(
		method: HttpMethodsEnum,
		endpoint: string,
		timeout: number,
		body?: any,
	): Promise<import('./types/HttpsClient').HttpsClientResponseClass>;
}
