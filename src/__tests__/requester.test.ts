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

import requester from '../requester';

describe('HTTP requester tests', () => {
	const sdkConfig: WAConfigType = (global as any).sdkConfig;
	const basePath = `/${sdkConfig.CLOUD_API_VERSION}/${sdkConfig.WA_PHONE_NUMBER_ID}`;
	const request = new requester(
		sdkConfig.WA_BASE_URL,
		sdkConfig.CLOUD_API_VERSION,
		sdkConfig.WA_PHONE_NUMBER_ID,
		sdkConfig.CLOUD_API_ACCESS_TOKEN,
		sdkConfig.WA_BUSINESS_ACCOUNT_ID,
		'test-user-agent',
	);

	const default_response_body = { success: false };

	let scope;

	afterEach(() => {
		nock.cleanAll();
		nock.restore();
		nock.activate();
	});

	it('Send a unsupported endpoint request', async () => {
		scope = nock(`https://${sdkConfig.WA_BASE_URL}`)
			.get(/.*/)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(400, default_response_body);

		const response = await request.sendCAPIRequest(
			HttpMethodsEnum.Get,
			`${basePath}/test`,
			sdkConfig.REQUEST_TIMEOUT,
		);

		expect(response.statusCode()).toStrictEqual(400);
		const respBody = await response.responseBodyToJSON();
		expect(respBody).toStrictEqual(default_response_body);
		scope.isDone();
	});
});
