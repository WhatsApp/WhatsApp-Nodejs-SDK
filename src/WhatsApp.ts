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

import { WA_Config_Type } from '@/config';
import { import_config } from './utils';
import { SDK_Version } from './version';
import Logger from './logger';
import Requester from './requester';
import Messages_API from './api/messages';
import { WhatsApp_Class } from '@/WhatsApp';
import Webhooks_API from './api/webhooks';
import { WA_Config_Enum } from './types/enums';

const lib_name = 'WHATSAPP';
const log_local = false;
const logger = new Logger(lib_name, process.env.DEBUG === 'true' || log_local);

const header_prefix = 'WA_SDK';

export default class WhatsApp implements WhatsApp_Class {
	private _config: WA_Config_Type;
	private _version: Readonly<string>;
	private _requester: Readonly<Requester>;

	readonly messages: Messages_API;
	readonly webhooks: Webhooks_API;

	constructor(sender_number_id?: number) {
		this._version = SDK_Version;
		this._config = import_config(sender_number_id);
		this._requester = new Requester(
			this._config[WA_Config_Enum.Base_URL],
			this._config[WA_Config_Enum.API_Version],
			this._config[WA_Config_Enum.Phone_Number_Id],
			this._config[WA_Config_Enum.Access_Token],
			this._config[WA_Config_Enum.Business_Acct_Id],
			this.user_agent(),
		);

		this.messages = new Messages_API(this._config, this._requester);
		this.webhooks = new Webhooks_API(this._config, this.user_agent());

		logger.log('WhatsApp Node.js SDK instantiated!');
	}

	version(): string {
		return this._version;
	}

	private user_agent(): string {
		const user_agent_string = `${header_prefix}/${this.version()} (Node.js ${
			process.version
		})`;
		return user_agent_string;
	}

	update_timeout(ms: number): boolean {
		this._config[WA_Config_Enum.Request_Timeout] = ms;
		logger.log(`Updated request timeout to ${ms}ms`);
		return true;
	}

	update_sender_number_id(phone_number_id: number): boolean {
		this._config[WA_Config_Enum.Phone_Number_Id] = phone_number_id;
		logger.log(`Updated sender phone number id to ${phone_number_id}`);
		return true;
	}

	update_access_token(access_token: string): boolean {
		this._config[WA_Config_Enum.Access_Token] = access_token;
		logger.log(`Updated access token`);
		return true;
	}
}
