/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

export declare class WhatsApp_Class {
	constructor(sender_number_id?: number);
	version: () => string;
	update_timeout(ms: number): boolean;
	update_sender_number_id(phone_number_id: number): boolean;
	update_access_token(access_token: string): boolean;
}
