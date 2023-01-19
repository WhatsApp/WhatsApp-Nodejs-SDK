/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { WA_Config_Type } from '@/config';
import * as u from '../utils';

describe('Helper utilities', () => {
	const sdk_config: WA_Config_Type = (global as any).sdk_config;

	test('signature match', () => {
		const test_body_string = 'test';
		const known_signature =
			'0c61947b610d4f45e65f3d680e26027121ec2413e77598bcb6cfc6e0d9888221';

		expect(
			u.generate_x_hub_256_sig(test_body_string, sdk_config.M4D_APP_SECRET),
		).toStrictEqual(known_signature);
	});

	test('failed configuration import—sender number id', () => {
		expect(() => {
			u.import_config();
		}).toThrowError('Missing WhatsApp sender phone number Id.');
	});

	test('failed configuration import—', () => {
		process.env.WA_PHONE_NUMBER_ID = sdk_config.WA_PHONE_NUMBER_ID.toString();
		expect(() => {
			u.import_config();
		}).toThrowError('Invalid configuration.');
	});

	it('successful configuration import', () => {
		process.env.WA_BASE_URL = sdk_config.WA_BASE_URL;
		process.env.M4D_APP_ID = sdk_config.M4D_APP_ID;
		process.env.M4D_APP_SECRET = sdk_config.M4D_APP_SECRET;
		process.env.WA_BUSINESS_ACCOUNT_ID = sdk_config.WA_BUSINESS_ACCOUNT_ID;
		process.env.CLOUD_API_ACCESS_TOKEN = sdk_config.CLOUD_API_ACCESS_TOKEN;
		process.env.CLOUD_API_VERSION = sdk_config.CLOUD_API_VERSION;
		process.env.WEBHOOK_ENDPOINT = sdk_config.WEBHOOK_ENDPOINT;
		process.env.WEBHOOK_VERIFICATION_TOKEN =
			sdk_config.WEBHOOK_VERIFICATION_TOKEN;
		process.env.LISTENER_PORT = sdk_config.LISTENER_PORT.toString();
		process.env.DEBUG = sdk_config.DEBUG.toString();
		process.env.REQUEST_TIMEOUT = sdk_config.REQUEST_TIMEOUT.toString();
		expect(u.import_config()).toEqual(sdk_config);
	});
});
