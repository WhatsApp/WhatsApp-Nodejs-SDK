/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BaseClass } from './base';
import { LanguagesEnum, RequestCodeMethodsEnum } from './enums';
import { RequesterResponseInterface } from './requester';

export type RequestCodeObject = {
	code_method: RequestCodeMethodsEnum;
	language: LanguagesEnum;
};

type VerifyCodeString = `${number}`;

export type VerifyCodeObject = {
	code: VerifyCodeString;
};

export type PhoneNumbersResponseObject = {
	success: boolean;
};

export declare class phoneNumbersClass extends BaseClass {
	requestCode(
		body: RequestCodeObject,
	): Promise<RequesterResponseInterface<PhoneNumbersResponseObject>>;

	verifyCode(
		body: VerifyCodeObject,
	): Promise<RequesterResponseInterface<PhoneNumbersResponseObject>>;
}
