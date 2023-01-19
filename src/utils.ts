/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as crypto from 'crypto';
import { WA_Config_Type } from '@/config';
import { WA_Required_Config_Enum, WA_Config_Enum } from './types/enums';
import Logger from './logger';

const lib_name = 'UTILS';
const log_local = false;
const logger = new Logger(lib_name, process.env.DEBUG === 'true' || log_local);

const default_base_url = 'graph.facebook.com';
const default_listener_port = 3000;
const default_max_retries_after_wait = 30;
const default_request_timeout = 20000;

const empty_config_checker = (sender_number_id?: number) => {
	if (
		(process.env.WA_PHONE_NUMBER_ID === undefined ||
			process.env.WA_PHONE_NUMBER_ID === '') &&
		sender_number_id == undefined
	) {
		logger.log(
			`Environmental variable: WA_PHONE_NUMBER_ID and/or sender phone number id arguement is undefined.`,
		);
		throw new Error('Missing WhatsApp sender phone number Id.');
	}

	for (const value of Object.values(WA_Required_Config_Enum)) {
		logger.log(value + ' ---- ' + process.env[`${value}`]);
		if (
			process.env[`${value}`] === undefined ||
			process.env[`${value}`] === ''
		) {
			logger.log(`Environmental variable: ${value} is undefined`);
			throw new Error('Invalid configuration.');
		}
	}
};

export const import_config = (sender_number_id?: number) => {
	empty_config_checker(sender_number_id);

	const config: WA_Config_Type = {
		[WA_Config_Enum.Base_URL]: process.env.WA_BASE_URL || default_base_url,
		[WA_Config_Enum.App_Id]: process.env.M4D_APP_ID || '',
		[WA_Config_Enum.App_Secret]: process.env.M4D_APP_SECRET || '',
		[WA_Config_Enum.Phone_Number_Id]:
			sender_number_id || parseInt(process.env.WA_PHONE_NUMBER_ID || ''),
		[WA_Config_Enum.Business_Acct_Id]: process.env.WA_BUSINESS_ACCOUNT_ID || '',
		[WA_Config_Enum.API_Version]: process.env.CLOUD_API_VERSION || '',
		[WA_Config_Enum.Access_Token]: process.env.CLOUD_API_ACCESS_TOKEN || '',
		[WA_Config_Enum.Webhook_Endpoint]: process.env.WEBHOOK_ENDPOINT || '',
		[WA_Config_Enum.Webhook_Verification_Token]:
			process.env.WEBHOOK_VERIFICATION_TOKEN || '',
		[WA_Config_Enum.Listener_Port]:
			parseInt(process.env.LISTENER_PORT || '') || default_listener_port,
		[WA_Config_Enum.Max_Retries_After_Wait]:
			parseInt(process.env.MAX_RETRIES_AFTER_WAIT || '') ||
			default_max_retries_after_wait,
		[WA_Config_Enum.Request_Timeout]:
			parseInt(process.env.REQUEST_TIMEOUT || '') || default_request_timeout,
		[WA_Config_Enum.Debug]: process.env.DEBUG === 'true',
	};

	logger.log(
		`Configuration loaded for App Id ${config[WA_Config_Enum.App_Id]}`,
	);

	return config;
};

export const generate_x_hub_256_sig = (body: string, app_secret: string) => {
	return crypto
		.createHmac('sha256', app_secret)
		.update(body, 'utf-8')
		.digest('hex');
};
