/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as nock from 'nock';
import { WA_Config_Type } from '@/config';
import { HTTP_Methods_Enum } from '../types/enums';

import requester from '../requester';

describe('HTTP requester tests', () => {
	const sdk_config: WA_Config_Type = (global as any).sdk_config;
	const base_path = `/${sdk_config.CLOUD_API_VERSION}/${sdk_config.WA_PHONE_NUMBER_ID}`;
	const request = new requester(
		sdk_config.WA_BASE_URL,
		sdk_config.CLOUD_API_VERSION,
		sdk_config.WA_PHONE_NUMBER_ID,
		sdk_config.CLOUD_API_ACCESS_TOKEN,
		sdk_config.WA_BUSINESS_ACCOUNT_ID,
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
		scope = nock(`https://${sdk_config.WA_BASE_URL}`)
			.get(/.*/)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(400, default_response_body);

		const response = await request.send_CAPI_request(
			HTTP_Methods_Enum.Get,
			`${base_path}/test`,
			sdk_config.REQUEST_TIMEOUT,
		);

		expect(response.status_code()).toStrictEqual(400);
		const resp_body = await response.response_body_to_JSON();
		expect(resp_body).toStrictEqual(default_response_body);
		scope.isDone();
	});
});
