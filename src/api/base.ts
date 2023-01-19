/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Base_Class } from '@/base';
import { Requester_Class } from '@/requester';
import { WA_Config_Type } from '@/config';
import Logger from '../logger';

const lib_name = 'BASE_API';
const log_local = false;
const logger = new Logger(lib_name, process.env.DEBUG === 'true' || log_local);

export default class Base_API implements Base_Class {
	protected _client: Requester_Class;
	protected _config: WA_Config_Type;

	constructor(config: WA_Config_Type, HTTPS_Client?: Requester_Class) {
		if (HTTPS_Client) this._client = HTTPS_Client;
		this._config = config;

		logger.log(
			`Initialized with HTTPS_Client: ${HTTPS_Client ? 'true' : 'false'}`,
		);
	}
}
