/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { WAConfigType } from '../types/config';
import WhatsApp from '../index';
import { SDKVersion } from '../version';

describe('WhatsApp SDK class', () => {
	const sdkConfig: WAConfigType = (global as any).sdkConfig;

	it('Instantiate the SDK', () => {
		process.env.WA_BASE_URL = sdkConfig.WA_BASE_URL;
		process.env.M4D_APP_ID = sdkConfig.M4D_APP_ID;
		process.env.M4D_APP_SECRET = sdkConfig.M4D_APP_SECRET;
		process.env.WA_PHONE_NUMBER_ID = sdkConfig.WA_PHONE_NUMBER_ID.toString();
		process.env.WA_BUSINESS_ACCOUNT_ID = sdkConfig.WA_BUSINESS_ACCOUNT_ID;
		process.env.CLOUD_API_ACCESS_TOKEN = sdkConfig.CLOUD_API_ACCESS_TOKEN;
		process.env.CLOUD_API_VERSION = sdkConfig.CLOUD_API_VERSION;
		process.env.WEBHOOK_ENDPOINT = sdkConfig.WEBHOOK_ENDPOINT;
		process.env.WEBHOOK_VERIFICATION_TOKEN =
			sdkConfig.WEBHOOK_VERIFICATION_TOKEN;
		process.env.LISTENER_PORT = sdkConfig.LISTENER_PORT.toString();
		process.env.DEBUG = sdkConfig.DEBUG.toString();

		const wa = new WhatsApp();
		expect(wa).toBeInstanceOf(WhatsApp);
	});

	it('verify SDK version', () => {
		const wa = new WhatsApp();
		expect(wa.version()).toBe(SDKVersion);
	});

	it('update request timeout config', () => {
		const newTimeout = sdkConfig.REQUEST_TIMEOUT + 1;

		const wa = new WhatsApp();

		expect(wa.updateTimeout(newTimeout)).toBe(true);
	});

	it('update sender number id', () => {
		const newNumber = 4;

		const wa = new WhatsApp();

		expect(wa.updateSenderNumberId(newNumber)).toBe(true);
	});

	it('update access token', () => {
		const newAccessToken = 'accesstoken2';

		const wa = new WhatsApp();

		expect(wa.updateAccessToken(newAccessToken)).toBe(true);
	});
});
