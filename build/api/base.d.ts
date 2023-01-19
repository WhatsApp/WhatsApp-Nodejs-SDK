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
export default class Base_API implements Base_Class {
	protected _client: Requester_Class;
	protected _config: WA_Config_Type;
	constructor(config: WA_Config_Type, HTTPS_Client?: Requester_Class);
}
