/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RequesterClass } from './requester';
import { WAConfigType } from './config';

export declare class BaseClass {
	constructor(config: WAConfigType, HttpsClient?: RequesterClass);
}
