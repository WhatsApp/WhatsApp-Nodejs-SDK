/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { WA_Config_Enum } from './enums';

export declare type WA_Config_Type = {
	/**
	 * That base URL of the Cloud API, hosted by Meta.
	 * @default 'graph.facebook.com/'
	 */
	[WA_Config_Enum.Base_URL]: string;

	/**
	 * The Meta for Developers business application Id for this registered application.
	 */
	[WA_Config_Enum.App_Id]: string;

	/**
	 * The Meta for Developers business application secret for this registered application.
	 */
	[WA_Config_Enum.App_Secret]: string;

	/**
	 * The Meta for Developers phone number id used by the registered business.
	 */
	[WA_Config_Enum.Phone_Number_Id]: number;

	/**
	 * The Meta for Developers business id for the registered business.
	 */
	[WA_Config_Enum.Business_Acct_Id]: string;
	/**
	 * The version of the Cloud API being used. Starts with a "v" and follows the major number.
	 */
	[WA_Config_Enum.API_Version]: string;

	/**
	 * The access token to make calls on behalf of the signed in Meta for Developers account or business.
	 */
	[WA_Config_Enum.Access_Token]: string;

	/**
	 * The endpoint path (e.g. if the value here is webhook, the webhook URL would look like http/https://{host}/webhook).
	 */
	[WA_Config_Enum.Webhook_Endpoint]: string;

	/**
	 * The verification token that needs to match what is sent by the Cloud API webhook in order to subscribe.
	 */
	[WA_Config_Enum.Webhook_Verification_Token]: string;

	/**
	 * The listener port for the webhook web server.
	 */
	[WA_Config_Enum.Listener_Port]: number;

	/**
	 * To turn on global debugging of the logger to print verbose output across the APIs.
	 */
	[WA_Config_Enum.Debug]: boolean;

	/**
	 * The total number of times a request should be retried after the wait period if it fails.
	 */
	[WA_Config_Enum.Max_Retries_After_Wait]: number;

	/**
	 * The timeout period for a request to quit and destroy the attempt in ms.
	 */
	[WA_Config_Enum.Request_Timeout]: number;
};
