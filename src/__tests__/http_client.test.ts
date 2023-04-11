/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import nock from 'nock';
import { WAConfigType } from '../types/config';
import { HttpMethodsEnum } from '../types/enums';

import HttpsClient from '../httpsClient';
import { NoParamCallback } from 'fs';

describe('HTTPS client tests', () => {
	const sdkConfig: WAConfigType = (global as any).sdkConfig;
	const basePath = `/${sdkConfig.CLOUD_API_VERSION}/${sdkConfig.WA_PHONE_NUMBER_ID}`;
	const reqHeaders = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${sdkConfig.CLOUD_API_ACCESS_TOKEN}`,
	};
	const client = new HttpsClient();
	let scope;

	afterEach(() => {
		nock.restore();
	});

	it('Send a POST request', async () => {
		scope = nock(`https://${sdkConfig.WA_BASE_URL}`, {
			reqheaders: {
				authorization: `Bearer ${sdkConfig.CLOUD_API_ACCESS_TOKEN}`,
			},
		})
			.post(/.*/)
			.delayConnection(100)
			.delay(200)
			.reply((uri, res_body) => {
				return [200, res_body];
			});
		const reqBody = { testKey: 'testValue' };

		const response = await client.sendRequest(
			sdkConfig.WA_BASE_URL,
			443,
			`${basePath}/test`,
			HttpMethodsEnum.Post,
			reqHeaders,
			sdkConfig.REQUEST_TIMEOUT,
			JSON.stringify(reqBody),
		);

		expect(response.statusCode()).toEqual(200);
		const respBody = await response.responseBodyToJSON();
		expect(respBody).toStrictEqual(reqBody);
		scope.isDone();
	});
});
