/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import nock from 'nock';
import { WA_Config_Type } from '@/config';
import { HTTP_Methods_Enum } from '../types/enums';

// jest.mock('../https_client', () => require('../__mocks__/https_client'));
import HTTPS_Client from '../https_client';
import { NoParamCallback } from 'fs';

describe('HTTPS client tests', () => {
	const sdk_config: WA_Config_Type = (global as any).sdk_config;
	const base_path = `/${sdk_config.CLOUD_API_VERSION}/${sdk_config.WA_PHONE_NUMBER_ID}`;
	const req_headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${sdk_config.CLOUD_API_ACCESS_TOKEN}`,
	};
	const client = new HTTPS_Client();
	let scope;

	afterEach(() => {
		nock.restore();
	});

	it('Send a POST request', async () => {
		scope = nock(`https://${sdk_config.WA_BASE_URL}`, {
			reqheaders: {
				authorization: `Bearer ${sdk_config.CLOUD_API_ACCESS_TOKEN}`,
			},
		})
			.post(/.*/)
			.delayConnection(100)
			.delay(200)
			.reply((uri, res_body) => {
				return [200, res_body];
			});
		const req_body = { test_key: 'test_value' };

		const response = await client.send_request(
			sdk_config.WA_BASE_URL,
			443,
			`${base_path}/test`,
			HTTP_Methods_Enum.Post,
			req_headers,
			sdk_config.REQUEST_TIMEOUT,
			JSON.stringify(req_body),
		);

		expect(response.status_code()).toEqual(200);
		const resp_body = await response.response_body_to_JSON();
		expect(resp_body).toStrictEqual(req_body);
		scope.isDone();
	});
});
