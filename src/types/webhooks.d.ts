/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ServerResponse } from 'http';
import { IncomingHttpHeaders } from 'http';
import { WAConfigType } from '@/config';
import {
	ConversationTypesEnum,
	CurrencyCodesEnum,
	StatusEnum,
	VideoMediaTypesEnum,
	ReferralSourceTypesEnum,
	StickerMediaTypesEnum,
	WebhookTypesEnum,
	SystemChangeTypesEnum,
	ImageMediaTypesEnum,
	DocumentMediaTypesEnum,
} from './enums';
import { BaseClass } from '@/base';

declare type PricingObject = {
	category: ConversationTypesEnum;
	pricing_model: 'CBP';
};

declare type OriginObject = {
	type: ConversationTypesEnum;
};

declare type ConversationObject = {
	id: string;
	origin: OriginObject;
	expiration_timestamp: string;
};

declare type ErrorDataObject = {
	details: string;
};

declare type ErrorObject = {
	code: number;
	title: string;
	message: string;
	error_data: ErrorDataObject;
};

export declare type StatusesObject = {
	conversation: ConversationObject;
	errors: ErrorObject[];
	id: string;
	pricing: PricingObject;
	recipient_id: string;
	status: StatusEnum;
	timestamp: string;
};

declare type AudioObject = {
	id: string;
	mime_type: string;
};

declare type ButtonObject = {
	payload: string;
	text: string;
};

declare type ConTextObject = {
	forwarded: boolean;
	frequently_forwarded: boolean;
	from: string;
	id: string;
	referred_product: {
		catalog_id: string;
		product_retailer_id: string;
	};
};

declare type DocumentObject = {
	caption: string;
	filename: string;
	sha256: string;
	mime_type: DocumentMediaTypesEnum;
	id: string;
};

declare type IdentityObject = {
	acknowledged: string;
	created_timestamp: string;
	hash: string;
};

declare type ImageObject = {
	caption: string;
	sha256: string;
	id: string;
	mime_type: ImageMediaTypesEnum;
};

declare type ButtonReplyObject = {
	button_reply: {
		id: string;
		title: string;
	};
};

declare type ListReplyObject = {
	list_reply: {
		id: string;
		title: string;
		description: string;
	};
};

declare type InteractiveObject = {
	type: ButtonReplyObject | ListReplyObject;
};

declare type ProductItemsObject = {
	product_retailer_id: string;
	quantity: string;
	item_price: string;
	currency: CurrencyCodesEnum;
};

declare type Order_Object = {
	catalog_id: string;
	text: string;
	product_items: ProductItemsObject;
};

declare type ReferralObject = {
	source_url: URL;
	source_type: ReferralSourceTypesEnum;
	source_id: string;
	headline: string;
	body: string;
	media_type: ImageMediaTypesEnum | VideoMediaTypesEnum;
	image_url: URL;
	video_url: URL;
	thumbnail_url: URL;
};

declare type StickerObject = {
	mime_type: StickerMediaTypesEnum;
	sha256: string;
	id: string;
	animated: boolean;
};

declare type SystemObject = {
	body: string;
	identity: string;
	wa_id: string;
	type: SystemChangeTypesEnum;
	customer: string;
};

declare type TextObject = {
	body: string;
};

declare type VideoObject = {
	caption: string;
	filename: string;
	sha256: string;
	id: string;
	mime_type: VideoMediaTypesEnum;
};

export declare type MessagesObject = {
	audio?: AudioObject;
	button?: ButtonObject;
	context?: ConTextObject;
	document?: DocumentObject;
	errors: ErrorObject[];
	from: string;
	id: string;
	identity?: IdentityObject;
	image?: ImageObject;
	interactive?: InteractiveObject;
	order?: Order_Object;
	referral: ReferralObject;
	system?: SystemObject;
	text?: TextObject;
	timestamp: string;
	type: WebhookTypesEnum;
	video?: VideoObject;
};

declare type ProfileObject = {
	name: string;
};

declare type ContactObject = {
	wa_id: string;
	profile: ProfileObject;
};

declare type MetadataObject = {
	display_phone_number: string;
	phoneNumberId: string;
};

export declare type ValueObject = {
	messaging_product: 'whatsapp';
	contacts: ContactObject[];
	errors: ErrorObject[];
	messages: MessagesObject[];
	metadata: MetadataObject[];
	statuses: StatusesObject[];
};

declare type ChangesObject = {
	field: string;
	value: ValueObject;
};

declare type Entry_Object = {
	id: string;
	changes: ChangesObject[];
};

export declare type WebhookObject = {
	object: 'whatsapp_business_account';
	entry: Entry_Object[];
};

export declare type WebhookSubscribeQuery = {
	hub: {
		mode: 'subscribe';
		challenge: string;
		verify_token: string;
	};
};

export declare type WebhookCallback = (
	statusCode: number,
	headers: IncomingHttpHeaders,
	body?: WebhookObject,
	response?: ServerResponse,
	error?: Error,
) => any;

export declare class WebhooksClass extends BaseClass {
	constructor(config: WAConfigType, userAgent: string);
	start(cb: WebhookCallback): boolean;
	isStarted(): boolean;
	stop(cb: (err?: Error) => any): boolean;
}
