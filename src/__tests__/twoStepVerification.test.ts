/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import nock from 'nock';
import { WAConfigType } from '../types/config';
import WhatsApp from '../WhatsApp';
import { SetPinResponseObject } from '../types/twoStepVerification';
import TwoStepVerificationAPI from '../api/twoStepVerification';

describe('WhatsApp Two-Step Verification API', () => {
	const sdkConfig: WAConfigType = (global as any).sdkConfig;
	process.env.WA_BASE_URL = sdkConfig.WA_BASE_URL;
	process.env.M4D_APP_ID = sdkConfig.M4D_APP_ID;
	process.env.M4D_APP_SECRET = sdkConfig.M4D_APP_SECRET;
	process.env.WA_PHONE_NUMBER_ID = sdkConfig.WA_PHONE_NUMBER_ID.toString();
	process.env.WA_BUSINESS_ACCOUNT_ID = sdkConfig.WA_BUSINESS_ACCOUNT_ID;
	process.env.CLOUD_API_ACCESS_TOKEN = sdkConfig.CLOUD_API_ACCESS_TOKEN;
	process.env.CLOUD_API_VERSION = sdkConfig.CLOUD_API_VERSION;
	process.env.WEBHOOK_ENDPOINT = sdkConfig.WEBHOOK_ENDPOINT;
	process.env.WEBHOOK_VERIFICATION_TOKEN = sdkConfig.WEBHOOK_VERIFICATION_TOKEN;
	process.env.LISTENER_PORT = sdkConfig.LISTENER_PORT.toString();
	process.env.DEBUG = sdkConfig.DEBUG.toString();
	process.env.REQUEST_TIMEOUT = sdkConfig.REQUEST_TIMEOUT.toString();

	const wa = new WhatsApp();
	const basePath = `/${sdkConfig.CLOUD_API_VERSION}/${sdkConfig.WA_PHONE_NUMBER_ID}`;
	const defaultTwoStepVerificationResponseObjectBody: SetPinResponseObject = {
		success: true,
	};

	let scope;

	afterEach(() => {
		nock.cleanAll();
		nock.restore();
		nock.activate();
	});

	it('messages class instance', () => {
		expect(wa.twoStepVerification).toBeInstanceOf(TwoStepVerificationAPI);
	});

	it('Set the two-step verification pin to 123456', async () => {
		scope = nock(`https://${sdkConfig.WA_BASE_URL}`)
			.post(`${basePath}/`)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(200, defaultTwoStepVerificationResponseObjectBody);

		const newPin = 123456;
		const response = await wa.twoStepVerification.setPin(newPin);

		expect(await response.responseBodyToJSON()).toStrictEqual(
			defaultTwoStepVerificationResponseObjectBody,
		);
		scope.isDone();
	});
});
