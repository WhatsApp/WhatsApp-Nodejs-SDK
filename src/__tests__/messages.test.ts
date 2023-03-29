/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import nock from 'nock';
import { WA_Config_Type } from '@/config';
import Messages_API from '../api/messages';
import WhatsApp from '../WhatsApp';

describe('WhatsApp Messages API', () => {
	const recipient = 1234;
	const sdk_config: WA_Config_Type = (global as any).sdk_config;
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
	process.env.REQUEST_TIMEOUT = sdk_config.REQUEST_TIMEOUT.toString();

	const wa = new WhatsApp();
	const base_path = `/${sdk_config.CLOUD_API_VERSION}/${sdk_config.WA_PHONE_NUMBER_ID}`;
	const default_messages_response_body = {
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
		expect(wa.messages).toBeInstanceOf(Messages_API);
	});

	it('Send text message', async () => {
		scope = nock(`https://${sdk_config.WA_BASE_URL}`)
			.post(`${base_path}/messages`)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(200, default_messages_response_body);

		const response = await wa.messages.text({ body: 'test' }, recipient);

		expect(await response.response_body_to_JSON()).toStrictEqual(
			default_messages_response_body,
		);
		scope.isDone();
	});

	it('Send meta-hosted audio message', async () => {
		scope = nock(`https://${sdk_config.WA_BASE_URL}`)
			.post(`${base_path}/messages`)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(200, default_messages_response_body);

		const meta_hosted_audio = {
			id: '123456abcde',
			caption: 'My audio file',
			filename: 'example.mp4',
		};

		const response = await wa.messages.audio(meta_hosted_audio, recipient);

		expect(await response.response_body_to_JSON()).toStrictEqual(
			default_messages_response_body,
		);
		scope.isDone();
	});

	it('Send self-hosted audio message', async () => {
		scope = nock(`https://${sdk_config.WA_BASE_URL}`)
			.post(`${base_path}/messages`)
			.delay(200)
			.delayBody(200)
			.delayConnection(200)
			.reply(200, default_messages_response_body);

		const self_hosted_audio = {
			link: new URL('https://example.com/example_1234.mp4').href,
			caption: 'My audio file',
			filename: 'example.mp4',
		};

		const response = await wa.messages.audio(self_hosted_audio, recipient);

		expect(await response.response_body_to_JSON()).toStrictEqual(
			default_messages_response_body,
		);
		scope.isDone();
	});
});
