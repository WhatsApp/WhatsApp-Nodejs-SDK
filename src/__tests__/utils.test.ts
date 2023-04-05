/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { WAConfigType } from '../types/config';
import * as u from '../utils';

describe('Helper utilities', () => {
	const sdkConfig: WAConfigType = (global as any).sdkConfig;

	test('signature match', () => {
		const testBodyString = 'test';
		const knownSignature =
			'0c61947b610d4f45e65f3d680e26027121ec2413e77598bcb6cfc6e0d9888221';

		expect(
			u.generateXHub256Sig(testBodyString, sdkConfig.M4D_APP_SECRET),
		).toStrictEqual(knownSignature);
	});

	test('failed configuration import—sender number id', () => {
		expect(() => {
			u.importConfig();
		}).toThrowError('Missing WhatsApp sender phone number Id.');
	});

	test('failed configuration import—', () => {
		process.env.WA_PHONE_NUMBER_ID = sdkConfig.WA_PHONE_NUMBER_ID.toString();
		expect(() => {
			u.importConfig();
		}).toThrowError('Invalid configuration.');
	});

	it('successful configuration import', () => {
		process.env.WA_BASE_URL = sdkConfig.WA_BASE_URL;
		process.env.M4D_APP_ID = sdkConfig.M4D_APP_ID;
		process.env.M4D_APP_SECRET = sdkConfig.M4D_APP_SECRET;
		process.env.WA_BUSINESS_ACCOUNT_ID = sdkConfig.WA_BUSINESS_ACCOUNT_ID;
		process.env.CLOUD_API_ACCESS_TOKEN = sdkConfig.CLOUD_API_ACCESS_TOKEN;
		process.env.CLOUD_API_VERSION = sdkConfig.CLOUD_API_VERSION;
		process.env.WEBHOOK_ENDPOINT = sdkConfig.WEBHOOK_ENDPOINT;
		process.env.WEBHOOK_VERIFICATION_TOKEN =
			sdkConfig.WEBHOOK_VERIFICATION_TOKEN;
		process.env.LISTENER_PORT = sdkConfig.LISTENER_PORT.toString();
		process.env.DEBUG = sdkConfig.DEBUG.toString();
		process.env.REQUEST_TIMEOUT = sdkConfig.REQUEST_TIMEOUT.toString();
		expect(u.importConfig()).toEqual(sdkConfig);
	});
});
