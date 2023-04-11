/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import nock from 'nock';
import { WAConfigType } from '../types/config';
import MessagesAPI from '../api/messages';
import WhatsApp from '../WhatsApp';

describe('WhatsApp Messages API', () => {
	const testRecipient = 1234;
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
	const defaultMessagesResponseBody = {
		messaging_product: 'whatsapp',
		contacts: [{ input: '16505076520', wa_id: '16505076520' }],
		messages: [
			{
				id: 'wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA',
			},
		],
	};

	let scope;

	afterEach(() => {
		nock.cleanAll();
		nock.restore();
		nock.activate();
	});

	it('messages class instance', () => {
		expect(wa.messages).toBeInstanceOf(MessagesAPI);
	});

	it('Send text message', async () => {
		scope = nock(`https://${sdkConfig.WA_BASE_URL}`)
			.post(`${basePath}/messages`)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(200, defaultMessagesResponseBody);

		const response = await wa.messages.text({ body: 'test' }, testRecipient);

		expect(await response.responseBodyToJSON()).toStrictEqual(
			defaultMessagesResponseBody,
		);
		scope.isDone();
	});

	it('Send meta-hosted audio message', async () => {
		scope = nock(`https://${sdkConfig.WA_BASE_URL}`)
			.post(`${basePath}/messages`)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(200, defaultMessagesResponseBody);

		const meta_hosted_audio = {
			id: '123456abcde',
			caption: 'My audio file',
			filename: 'example.mp4',
		};

		const response = await wa.messages.audio(meta_hosted_audio, testRecipient);

		expect(await response.responseBodyToJSON()).toStrictEqual(
			defaultMessagesResponseBody,
		);
		scope.isDone();
	});

	it('Send self-hosted audio message', async () => {
		scope = nock(`https://${sdkConfig.WA_BASE_URL}`)
			.post(`${basePath}/messages`)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(200, defaultMessagesResponseBody);

		const selfHostedAudio = {
			link: new URL('https://example.com/example_1234.mp4').href,
			caption: 'My audio file',
			filename: 'example.mp4',
		};

		const response = await wa.messages.audio(selfHostedAudio, testRecipient);

		expect(await response.responseBodyToJSON()).toStrictEqual(
			defaultMessagesResponseBody,
		);
		scope.isDone();
	});
});
