/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (
	process.env.NODE_ENV !== 'production' ||
	process.env.TS_NODE_DEV === 'true'
) {
	import('dotenv').then((dotenv) => dotenv.config());
}

import { WAConfigType } from './types/config';
import { WhatsAppClass } from './types/WhatsApp';
import * as SDKEnums from './types/enums';
import { semanticVersionString } from './types/version';
import { importConfig } from './utils';
import { SDKVersion } from './version';
import Logger from './logger';
import Requester from './requester';
import MessagesAPI from './api/messages';
import PhoneNumbersAPI from './api/phoneNumbers';
import TwoStepVerificationAPI from './api/twoStepVerification';
import WebhooksAPI from './api/webhooks';

const LIB_NAME = 'WHATSAPP';
const LOG_LOCAL = false;
const LOGGER = new Logger(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);

const headerPrefix = 'WA_SDK';

export default class WhatsApp implements WhatsAppClass {
	config: WAConfigType;
	sdkVersion: Readonly<semanticVersionString>;
	requester: Readonly<Requester>;

	readonly messages: MessagesAPI;
	readonly phoneNumbers: PhoneNumbersAPI;
	readonly twoStepVerification: TwoStepVerificationAPI;
	readonly webhooks: WebhooksAPI;
	static readonly Enums = SDKEnums;

	constructor(senderNumberId?: number) {
		this.sdkVersion = SDKVersion;
		this.config = importConfig(senderNumberId);
		this.requester = new Requester(
			this.config[SDKEnums.WAConfigEnum.BaseURL],
			this.config[SDKEnums.WAConfigEnum.APIVersion],
			this.config[SDKEnums.WAConfigEnum.PhoneNumberId],
			this.config[SDKEnums.WAConfigEnum.AccessToken],
			this.config[SDKEnums.WAConfigEnum.BusinessAcctId],
			this.userAgent(),
		);

		this.messages = new MessagesAPI(this.config, this.requester);
		this.phoneNumbers = new PhoneNumbersAPI(this.config, this.requester);
		this.twoStepVerification = new TwoStepVerificationAPI(
			this.config,
			this.requester,
		);
		this.webhooks = new WebhooksAPI(
			this.config,
			this.requester,
			this.userAgent(),
		);

		LOGGER.log('WhatsApp Node.js SDK instantiated!');
	}

	version(): semanticVersionString {
		return this.sdkVersion;
	}

	private userAgent(): string {
		const userAgentString = `${headerPrefix}/${this.version()} (Node.js ${
			process.version
		})`;
		return userAgentString;
	}

	updateTimeout(ms: number): boolean {
		this.config[SDKEnums.WAConfigEnum.RequestTimeout] = ms;
		LOGGER.log(`Updated request timeout to ${ms}ms`);
		return true;
	}

	updateSenderNumberId(phoneNumberId: number): boolean {
		this.config[SDKEnums.WAConfigEnum.PhoneNumberId] = phoneNumberId;
		LOGGER.log(`Updated sender phone number id to ${phoneNumberId}`);
		return true;
	}

	updateAccessToken(accessToken: string): boolean {
		this.config[SDKEnums.WAConfigEnum.AccessToken] = accessToken;
		LOGGER.log(`Updated access token`);
		return true;
	}
}
