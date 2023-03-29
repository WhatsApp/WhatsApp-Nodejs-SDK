/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { WA_Config_Type } from '../types/config';
import WhatsApp from '../index';
import { SDK_Version } from '../version';

describe('WhatsApp SDK class', () => {
	const sdk_config: WA_Config_Type = (global as any).sdk_config;

	it('Instantiate the SDK', () => {
		process.env.WA_BASE_URL = sdk_config.WA_BASE_URL;
		process.env.M4D_APP_ID = sdk_config.M4D_APP_ID;
		process.env.M4D_APP_SECRET = sdk_config.M4D_APP_SECRET;
		process.env.WA_PHONE_NUMBER_ID = sdk_config.WA_PHONE_NUMBER_ID.toString();
		process.env.WA_BUSINESS_ACCOUNT_ID = sdk_config.WA_BUSINESS_ACCOUNT_ID;
		process.env.CLOUD_API_ACCESS_TOKEN = sdk_config.CLOUD_API_ACCESS_TOKEN;
		process.env.CLOUD_API_VERSION = sdk_config.CLOUD_API_VERSION;
		process.env.WEBHOOK_ENDPOINT = sdk_config.WEBHOOK_ENDPOINT;
		process.env.WEBHOOK_VERIFICATION_TOKEN =
			sdk_config.WEBHOOK_VERIFICATION_TOKEN;
		process.env.LISTENER_PORT = sdk_config.LISTENER_PORT.toString();
		process.env.DEBUG = sdk_config.DEBUG.toString();

		const wa = new WhatsApp();
		expect(wa).toBeInstanceOf(WhatsApp);
	});

	it('verify SDK version', () => {
		const wa = new WhatsApp();
		expect(wa.version()).toBe(SDK_Version);
	});

	it('update request timeout config', () => {
		const new_timeout = sdk_config.REQUEST_TIMEOUT + 1;

		const wa = new WhatsApp();

		expect(wa.update_timeout(new_timeout)).toBe(true);
	});

	it('update sender number id', () => {
		const new_number = 4;

		const wa = new WhatsApp();

		expect(wa.update_sender_number_id(new_number)).toBe(true);
	});

	it('update access token', () => {
		const new_access_token = 'accesstoken2';

		const wa = new WhatsApp();

		expect(wa.update_access_token(new_access_token)).toBe(true);
	});
});
