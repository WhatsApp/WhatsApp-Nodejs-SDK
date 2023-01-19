/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ServerResponse } from 'http';
import { IncomingHttpHeaders } from 'http';
import { WA_Config_Type } from '@/config';
import {
	Conversation_Types_Enum,
	Currency_Codes_Enum,
	Status_Enum,
	Video_Media_Types_Enum,
	Referral_Source_Types_Enum,
	Sticker_Media_Types_Enum,
	Webhook_Types_Enum,
	System_Change_Types_Enum,
	Image_Media_Types_Enum,
	Document_Media_Types_Enum,
} from './enums';
import { Base_Class } from '@/base';

declare type Pricing_Object = {
	category: Conversation_Types_Enum;
	pricing_model: 'CBP';
};

declare type Origin_Object = {
	type: Conversation_Types_Enum;
};

declare type Conversation_Object = {
	id: string;
	origin: Origin_Object;
	expiration_timestamp: string;
};

declare type Error_Data_Object = {
	details: string;
};

declare type Error_Object = {
	code: number;
	title: string;
	message: string;
	error_data: Error_Data_Object;
};

export declare type Statuses_Object = {
	conversation: Conversation_Object;
	errors: Error_Object[];
	id: string;
	pricing: Pricing_Object;
	recipient_id: string;
	status: Status_Enum;
	timestamp: string;
};

declare type Audio_Object = {
	id: string;
	mime_type: string;
};

declare type Button_Object = {
	payload: string;
	text: string;
};

declare type Context_Object = {
	forwarded: boolean;
	frequently_forwarded: boolean;
	from: string;
	id: string;
	referred_product: {
		catalog_id: string;
		product_retailer_id: string;
	};
};

declare type Document_Object = {
	caption: string;
	filename: string;
	sha256: string;
	mime_type: Document_Media_Types_Enum;
	id: string;
};

declare type Identity_Object = {
	acknowledged: string;
	created_timestamp: string;
	hash: string;
};

declare type Image_Object = {
	caption: string;
	sha256: string;
	id: string;
	mime_type: Image_Media_Types_Enum;
};

declare type Button_Reply_Object = {
	button_reply: {
		id: string;
		title: string;
	};
};

declare type List_Reply_Object = {
	list_reply: {
		id: string;
		title: string;
		description: string;
	};
};

declare type Interactive_Object = {
	type: Button_Reply_Object | List_Reply_Object;
};

declare type Product_Items_Object = {
	product_retailer_id: string;
	quantity: string;
	item_price: string;
	currency: Currency_Codes_Enum;
};

declare type Order_Object = {
	catalog_id: string;
	text: string;
	product_items: Product_Items_Object;
};

declare type Referral_Object = {
	source_url: URL;
	source_type: Referral_Source_Types_Enum;
	source_id: string;
	headline: string;
	body: string;
	media_type: Image_Media_Types_Enum | Video_Media_Types_Enum;
	image_url: URL;
	video_url: URL;
	thumbnail_url: URL;
};

declare type Sticker_Object = {
	mime_type: Sticker_Media_Types_Enum;
	sha256: string;
	id: string;
	animated: boolean;
};

declare type System_Object = {
	body: string;
	identity: string;
	wa_id: string;
	type: System_Change_Types_Enum;
	customer: string;
};

declare type Text_Object = {
	body: string;
};

declare type Video_Object = {
	caption: string;
	filename: string;
	sha256: string;
	id: string;
	mime_type: Video_Media_Types_Enum;
};

export declare type Messages_Object = {
	audio?: Audio_Object;
	button?: Button_Object;
	context?: Context_Object;
	document?: Document_Object;
	errors: Error_Object[];
	from: string;
	id: string;
	identity?: Identity_Object;
	image?: Image_Object;
	interactive?: Interactive_Object;
	order?: Order_Object;
	referral: Referral_Object;
	system?: System_Object;
	text?: Text_Object;
	timestamp: string;
	type: Webhook_Types_Enum;
	video?: Video_Object;
};

declare type Profile_Object = {
	name: string;
};

declare type Contact_Object = {
	wa_id: string;
	profile: Profile_Object;
};

declare type Metadata_Object = {
	display_phone_number: string;
	phone_number_id: string;
};

export declare type Value_Object = {
	messaging_product: 'whatsapp';
	contacts: Contact_Object[];
	errors: Error_Object[];
	messages: Messages_Object[];
	metadata: Metadata_Object[];
	statuses: Statuses_Object[];
};

declare type Changes_Object = {
	field: string;
	value: Value_Object;
};

declare type Entry_Object = {
	id: string;
	changes: Changes_Object[];
};

export declare type Webhook_Object = {
	object: 'whatsapp_business_account';
	entry: Entry_Object[];
};

export declare type Webhook_Subscribe_Query = {
	hub: {
		mode: 'subscribe';
		challenge: string;
		verify_token: string;
	};
};

export declare type Webhook_Callback = (
	status_code: number,
	headers: IncomingHttpHeaders,
	body?: Webhook_Object,
	response?: ServerResponse,
	error?: Error,
) => any;

export declare class Webhooks_Class extends Base_Class {
	constructor(config: WA_Config_Type, user_agent: string);
	start(cb: Webhook_Callback): boolean;
	is_started(): boolean;
	stop(cb: (err?: Error) => any): boolean;
}
