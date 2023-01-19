/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as w from '@/webhooks';
import { WA_Config_Type } from '@/config';
import Base_API from './base';
export default class Webhooks_API extends Base_API implements w.Webhooks_Class {
	private _user_agent;
	private _server;
	constructor(config: WA_Config_Type, user_agent: string);
	start(cb: w.Webhook_Callback): boolean;
	is_started(): boolean;
	stop(cb: (err?: Error) => any): boolean;
}
