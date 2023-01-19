/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Messages_API from './api/messages';
import { WhatsApp_Class } from '@/WhatsApp';
import Webhooks_API from './api/webhooks';
export default class WhatsApp implements WhatsApp_Class {
	private _config;
	private _version;
	private _requester;
	readonly messages: Messages_API;
	readonly webhooks: Webhooks_API;
	constructor(sender_number_id?: number);
	version(): string;
	private user_agent;
	update_timeout(ms: number): boolean;
	update_sender_number_id(phone_number_id: number): boolean;
	update_access_token(access_token: string): boolean;
}
