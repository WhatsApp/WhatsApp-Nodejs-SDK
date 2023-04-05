/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { WAConfigEnum } from './enums';

export type WAConfigType = {
	/**
	 * That base URL of the Cloud API, hosted by Meta.
	 * @default 'graph.facebook.com/'
	 */
	[WAConfigEnum.BaseURL]: string;

	/**
	 * The Meta for Developers business application Id for this registered application.
	 */
	[WAConfigEnum.AppId]: string;

	/**
	 * The Meta for Developers business application secret for this registered application.
	 */
	[WAConfigEnum.AppSecret]: string;

	/**
	 * The Meta for Developers phone number id used by the registered business.
	 */
	[WAConfigEnum.PhoneNumberId]: number;

	/**
	 * The Meta for Developers business id for the registered business.
	 */
	[WAConfigEnum.BusinessAcctId]: string;
	/**
	 * The version of the Cloud API being used. Starts with a "v" and follows the major number.
	 */
	[WAConfigEnum.APIVersion]: string;

	/**
	 * The access token to make calls on behalf of the signed in Meta for Developers account or business.
	 */
	[WAConfigEnum.AccessToken]: string;

	/**
	 * The endpoint path (e.g. if the value here is webhook, the webhook URL would look like http/https://{host}/webhook).
	 */
	[WAConfigEnum.WebhookEndpoint]: string;

	/**
	 * The verification token that needs to match what is sent by the Cloud API webhook in order to subscribe.
	 */
	[WAConfigEnum.WebhookVerificationToken]: string;

	/**
	 * The listener port for the webhook web server.
	 */
	[WAConfigEnum.ListenerPort]: number;

	/**
	 * To turn on global debugging of the logger to print verbose output across the APIs.
	 */
	[WAConfigEnum.Debug]: boolean;

	/**
	 * The total number of times a request should be retried after the wait period if it fails.
	 */
	[WAConfigEnum.MaxRetriesAfterWait]: number;

	/**
	 * The timeout period for a request to quit and destroy the attempt in ms.
	 */
	[WAConfigEnum.RequestTimeout]: number;
};
