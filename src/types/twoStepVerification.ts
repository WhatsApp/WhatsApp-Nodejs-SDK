/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BaseClass } from './base';
import { RequesterResponseInterface } from './requester';

export type TwoStepVerificationObject = {
	pin: string;
};

export type SetPinResponseObject = {
	success: boolean;
};

export declare class TwoStepVerificationClass extends BaseClass {
	setPin(
		pin: number,
	): Promise<RequesterResponseInterface<SetPinResponseObject>>;
}
