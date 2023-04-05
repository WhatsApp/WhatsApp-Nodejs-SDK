/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as dotenv from 'dotenv';
if (
	process.env.NODE_ENV !== 'production' ||
	process.env.TS_NODE_DEV === 'true'
) {
	dotenv.config();
}

import { WAConfigType } from './types/config';
import { importConfig } from './utils';
import { SDKVersion } from './version';
import Logger from './logger';
import Requester from './requester';
import MessagesAPI from './api/messages';
import { WhatsAppClass } from './types/WhatsApp';
import WebhooksAPI from './api/webhooks';
import { WAConfigEnum } from './types/enums';

const LIB_NAME = 'WHATSAPP';
const LOG_LOCAL = false;
const LOGGER = new Logger(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);

const headerPrefix = 'WA_SDK';

export default class WhatsApp implements WhatsAppClass {
	config: WAConfigType;
	sdkVersion: Readonly<string>;
	requester: Readonly<Requester>;

	readonly messages: MessagesAPI;
	readonly webhooks: WebhooksAPI;

	constructor(senderNumberId?: number) {
		this.sdkVersion = SDKVersion;
		this.config = importConfig(senderNumberId);
		this.requester = new Requester(
			this.config[WAConfigEnum.BaseURL],
			this.config[WAConfigEnum.APIVersion],
			this.config[WAConfigEnum.PhoneNumberId],
			this.config[WAConfigEnum.AccessToken],
			this.config[WAConfigEnum.BusinessAcctId],
			this.userAgent(),
		);

		this.messages = new MessagesAPI(this.config, this.requester);
		this.webhooks = new WebhooksAPI(this.config, this.userAgent());

		LOGGER.log('WhatsApp Node.js SDK instantiated!');
	}

	version(): string {
		return this.sdkVersion;
	}

	private userAgent(): string {
		const userAgentString = `${headerPrefix}/${this.version()} (Node.js ${
			process.version
		})`;
		return userAgentString;
	}

	updateTimeout(ms: number): boolean {
		this.config[WAConfigEnum.RequestTimeout] = ms;
		LOGGER.log(`Updated request timeout to ${ms}ms`);
		return true;
	}

	updateSenderNumberId(phoneNumberId: number): boolean {
		this.config[WAConfigEnum.PhoneNumberId] = phoneNumberId;
		LOGGER.log(`Updated sender phone number id to ${phoneNumberId}`);
		return true;
	}

	updateAccessToken(accessToken: string): boolean {
		this.config[WAConfigEnum.AccessToken] = accessToken;
		LOGGER.log(`Updated access token`);
		return true;
	}
}
