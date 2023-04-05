/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as crypto from 'crypto';
import { WAConfigType } from './types/config';
import { WARequiredConfigEnum, WAConfigEnum } from './types/enums';
import Logger from './logger';

const LIB_NAME = 'UTILS';
const LOG_LOCAL = false;
const LOGGER = new Logger(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);

const DEFAULT_BASE_URL = 'graph.facebook.com';
const DEFAULT_LISTENER_PORT = 3000;
const DEFAULT_MAX_RETRIES_AFTER_WAIT = 30;
const DEFAULT_REQUEST_TIMEOUT = 20000;

const emptyConfigChecker = (senderNumberId?: number) => {
	if (
		(process.env.WA_PHONE_NUMBER_ID === undefined ||
			process.env.WA_PHONE_NUMBER_ID === '') &&
		senderNumberId == undefined
	) {
		LOGGER.log(
			`Environmental variable: WA_PHONE_NUMBER_ID and/or sender phone number id arguement is undefined.`,
		);
		throw new Error('Missing WhatsApp sender phone number Id.');
	}

	for (const value of Object.values(WARequiredConfigEnum)) {
		LOGGER.log(value + ' ---- ' + process.env[`${value}`]);
		if (
			process.env[`${value}`] === undefined ||
			process.env[`${value}`] === ''
		) {
			LOGGER.log(`Environmental variable: ${value} is undefined`);
			throw new Error('Invalid configuration.');
		}
	}
};

export const importConfig = (senderNumberId?: number) => {
	emptyConfigChecker(senderNumberId);

	const config: WAConfigType = {
		[WAConfigEnum.BaseURL]: process.env.WA_BASE_URL || DEFAULT_BASE_URL,
		[WAConfigEnum.AppId]: process.env.M4D_APP_ID || '',
		[WAConfigEnum.AppSecret]: process.env.M4D_APP_SECRET || '',
		[WAConfigEnum.PhoneNumberId]:
			senderNumberId || parseInt(process.env.WA_PHONE_NUMBER_ID || ''),
		[WAConfigEnum.BusinessAcctId]: process.env.WA_BUSINESS_ACCOUNT_ID || '',
		[WAConfigEnum.APIVersion]: process.env.CLOUD_API_VERSION || '',
		[WAConfigEnum.AccessToken]: process.env.CLOUD_API_ACCESS_TOKEN || '',
		[WAConfigEnum.WebhookEndpoint]: process.env.WEBHOOK_ENDPOINT || '',
		[WAConfigEnum.WebhookVerificationToken]:
			process.env.WEBHOOK_VERIFICATION_TOKEN || '',
		[WAConfigEnum.ListenerPort]:
			parseInt(process.env.LISTENER_PORT || '') || DEFAULT_LISTENER_PORT,
		[WAConfigEnum.MaxRetriesAfterWait]:
			parseInt(process.env.MAX_RETRIES_AFTER_WAIT || '') ||
			DEFAULT_MAX_RETRIES_AFTER_WAIT,
		[WAConfigEnum.RequestTimeout]:
			parseInt(process.env.REQUEST_TIMEOUT || '') || DEFAULT_REQUEST_TIMEOUT,
		[WAConfigEnum.Debug]: process.env.DEBUG === 'true',
	};

	LOGGER.log(`Configuration loaded for App Id ${config[WAConfigEnum.AppId]}`);

	return config;
};

export const generateXHub256Sig = (body: string, appSecret: string) => {
	return crypto
		.createHmac('sha256', appSecret)
		.update(body, 'utf-8')
		.digest('hex');
};
