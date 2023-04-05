/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { WAConfigType } from '@/config';
import Requester from './requester';
import MessagesAPI from './api/messages';
import { WhatsAppClass } from '@/WhatsApp';
import WebhooksAPI from './api/webhooks';
export default class WhatsApp implements WhatsAppClass {
    config: WAConfigType;
    sdkVersion: Readonly<string>;
    requester: Readonly<Requester>;
    readonly messages: MessagesAPI;
    readonly webhooks: WebhooksAPI;
    constructor(senderNumberId?: number);
    version(): string;
    private userAgent;
    updateTimeout(ms: number): boolean;
    updateSenderNumberId(phoneNumberId: number): boolean;
    updateAccessToken(accessToken: string): boolean;
}
