/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as w from '@/webhooks';
import { WAConfigType } from '@/config';
import HttpsServer from '../httpsServer';
import BaseAPI from './base';
export default class WebhooksAPI extends BaseAPI implements w.WebhooksClass {
	userAgent: string;
	server: HttpsServer;
	constructor(config: WAConfigType, userAgent: string);
	start(cb: w.WebhookCallback): boolean;
	isStarted(): boolean;
	stop(cb: (err?: Error) => any): boolean;
}
