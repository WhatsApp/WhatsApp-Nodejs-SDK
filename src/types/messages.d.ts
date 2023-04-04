/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BaseClass } from '@/base';
import {
	MessageTypesEnum,
	ComponentTypesEnum,
	LanguagesEnum,
	ParametersTypesEnum,
	CurrencyCodesEnum,
	ButtonTypesEnum,
	ButtonPositionEnum,
	InteractiveTypesEnum,
} from './enums';
import { GeneralRequestBody, RequesterResponseInterface } from './requester';

export declare type GeneralMessageBody = GeneralRequestBody & {
	/**
	 * The Meta messaging product name.
	 * @default 'whatsapp'
	 */
	messaging_product: 'whatsapp';
};

export declare type StatusObject = {
	status: 'read';
	message_id: string;
};

export declare type StatusRequestBody = GeneralMessageBody & StatusObject;

declare type ConTextObject = {
	message_id: string;
};

export declare type MessageRequestBody<T extends MessageTypesEnum> =
	GeneralMessageBody & {
		recipient_type?: string;
		to: string;
		context?: ConTextObject;
		type?: T;
	};

declare type MetaAudioMediaObject = {
	id: string;
	link?: never;
};

declare type HostedAudioMediaObject = {
	id?: never;
	link: string;
};

export declare type AudioMediaObject =
	| MetaAudioMediaObject
	| HostedAudioMediaObject;

export declare type AudioMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Audio> & {
		[MessageTypesEnum.Audio]: [AudioMediaObject];
	};

declare type AddressesObject = {
	street?: string;
	city?: string;
	state?: string;
	zip?: string;
	country?: string;
	country_code?: string;
	type?: 'HOME' | 'WORK' | string;
};

declare type EmailObject = {
	email?: string;
	type?: 'HOME' | 'WORK' | string;
};

declare type NameObject = {
	formatted_name: string;
	first_name?: string;
	last_name?: string;
	middle_name?: string;
	suffix?: string;
	prefix?: string;
};

declare type OrgObject = {
	company?: string;
	department?: string;
	title?: string;
};

declare type PhoneObject = {
	phone?: 'PHONE_NUMBER';
	type?: 'CELL' | 'MAIN' | 'IPHONE' | 'HOME' | 'WORK' | string;
	wa_id?: string;
};

declare type URLObject = {
	url?: string;
	type?: 'HOME' | 'WORK' | string;
};

export declare type ContactObject = {
	addresses?: AddressesObject[];
	birthday?: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
	emails?: EmailObject[];
	name: NameObject;
	org?: OrgObject;
	phones?: PhoneObject[];
	urls?: URLObject[];
};

export declare type ContactsMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Contacts> & {
		[MessageTypesEnum.Contacts]: [ContactObject];
	};

declare type MetaDocumentMediaObject = {
	id: string;
	link?: never;
	caption?: string;
	filename?: string;
};

declare type HostedDocumentMediaObject = {
	id?: never;
	link: string;
	caption?: string;
	filename?: string;
};

declare type DocumentMediaObject =
	| MetaDocumentMediaObject
	| HostedDocumentMediaObject;

export declare type DocumentMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Document> & {
		[MessageTypesEnum.Document]: [DocumentMediaObject];
	};

declare type MetaImageMediaObject = {
	id: string;
	link?: never;
	caption?: string;
};

declare type HostedImageMediaObject = {
	id?: never;
	link: string;
	caption?: string;
};

declare type ImageMediaObject = MetaImageMediaObject | HostedImageMediaObject;

export declare type ImageMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Image> & {
		[MessageTypesEnum.Image]: [ImageMediaObject];
	};

declare type ProductObject = {
	product_retailer_id: string;
};

declare type SimpleTextObject = {
	text: string;
};

declare type RowObject = {
	id: string;
	title: string;
	description?: string;
};

declare type MultiProductSectionObject = {
	product_items: ProductObject[];
	rows?: never;
	title?: string;
};

declare type ListSectionObject = {
	product_items?: never;
	rows: RowObject[];
	title?: string;
};

declare type SectionObject = MultiProductSectionObject | ListSectionObject;

declare type ButtonObject = {
	title: string;
	id: string;
};

declare type ReplyButtonObject = {
	type: 'reply';
	reply: ButtonObject;
};

declare type ActionObject = {
	button?: string;
	buttons?: ReplyButtonObject[];
	catalog_id?: string;
	product_retailer_id?: string;
	sections?: SectionObject;
};

declare type HeaderObject = {
	type: 'document' | 'image' | 'text' | 'video';
	document?: DocumentMediaObject;
	image?: ImageMediaObject;
	text?: string;
	video?: VideoMediaObject;
};

declare type ButtonInteractiveObject = {
	type: InteractiveTypesEnum.Button;
	body: SimpleTextObject;
	footer?: SimpleTextObject;
	header?: HeaderObject;
	action: ActionObject;
};

declare type ListInteractiveObject = {
	type: InteractiveTypesEnum.List;
	body: SimpleTextObject;
	footer?: SimpleTextObject;
	header?: HeaderObject;
	action: ActionObject;
};

declare type ProductInteractiveObject = {
	type: InteractiveTypesEnum.Product;
	body?: SimpleTextObject;
	footer?: SimpleTextObject;
	header?: HeaderObject;
	action: ActionObject;
};

declare type ProductListInteractiveObject = {
	type: InteractiveTypesEnum.ProductList;
	body: SimpleTextObject;
	footer?: SimpleTextObject;
	header: HeaderObject;
	action: ActionObject;
};

declare type InteractiveObject = {
	[MessageTypesEnum.Interactive]:
		| ButtonInteractiveObject
		| ListInteractiveObject
		| ProductInteractiveObject
		| ProductListInteractiveObject;
};

export declare type InteractiveMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Interactive> & InteractiveObject;

declare type MetaStickerMediaObject = {
	id: string;
	link?: never;
};

declare type HostedStickerMediaObject = {
	id?: never;
	link: string;
};

export declare type StickerMediaObject =
	| MetaStickerMediaObject
	| HostedStickerMediaObject;

export declare type StickerMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Sticker> & {
		[MessageTypesEnum.Sticker]: [StickerMediaObject];
	};

declare type ReActionObject = {
	message_id: string;
	emoji: string;
};

export declare type ReactionMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Reaction> & ReActionObject;

export declare type TextObject = {
	body: string;
	preview_url?: boolean;
};

export declare type TextMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Text> & {
		[MessageTypesEnum.Text]: [TextObject];
	};

declare type MetaHostedVideoMediaObject = {
	id: string;
	link?: never;
	caption?: string;
};

declare type SelfHostedVideoMediaObject = {
	id?: never;
	link: string;
	caption?: string;
};

declare type VideoMediaObject =
	| MetaHostedVideoMediaObject
	| SelfHostedVideoMediaObject;

export declare type VideoMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Video> & {
		[MessageTypesEnum.Video]: [VideoMediaObject];
	};

declare type LanguageObject = {
	policystring: 'deterministic';
	code: LanguagesEnum;
};

declare type ParametersObject<T extends ParametersTypesEnum> = {
	type: T;
};

declare type TextParametersObject = ParametersObject<ParametersTypesEnum.Text> &
	SimpleTextObject;

declare type CurrencyObject = {
	fallback_value: string;
	code: CurrencyCodesEnum;
	amount_1000: number;
};

declare type CurrencyParametersObject =
	ParametersObject<ParametersTypesEnum.Currency> & {
		currency: CurrencyObject;
	};

declare type DateTimeObject = {
	fallback_value: string;
};

declare type DateTimeParametersObject =
	ParametersObject<ParametersTypesEnum.Currency> & {
		date_time: CurrencyObject;
	};

declare type DocumentParametersObject =
	ParametersObject<ParametersTypesEnum.Document> & DocumentMediaObject;

declare type ImageParametersObject =
	ParametersObject<ParametersTypesEnum.Image> & ImageMediaObject;

declare type VideoParametersObject =
	ParametersObject<ParametersTypesEnum.Video> & VideoMediaObject;

declare type QuickReplyButtonParametersObject = {
	type: ParametersTypesEnum.Payload;
	payload: string;
};

declare type URLButtonParametersObject = SimpleTextObject & {
	type: ParametersTypesEnum.Text;
};

declare type ButtonParameterObject =
	| QuickReplyButtonParametersObject
	| URLButtonParametersObject;

declare type ComponentObject<T extends ComponentTypesEnum> = {
	type: T;
	parameters: (
		| CurrencyParametersObject
		| DateTimeParametersObject
		| DocumentParametersObject
		| ImageParametersObject
		| TextParametersObject
		| VideoParametersObject
	)[];
};

declare type ButtonComponentObject =
	ComponentObject<ComponentTypesEnum.Button> & {
		parameters: ButtonParameterObject;
		sub_type: ButtonTypesEnum;
		index: ButtonPositionEnum;
	};

export declare type MessageTemplateObject<T extends ComponentTypesEnum> = {
	name: string;
	language: LanguageObject;
	components?: (ComponentObject<T> | ButtonComponentObject)[];
};

export declare type MessageTemplateRequestBody<T extends ComponentTypesEnum> =
	MessageRequestBody<MessageTypesEnum.Template> & MessageTemplateObject<T>;

export declare type LocationObject = {
	longitude: number;
	latitude: number;
	name?: string;
	address?: string;
};

export declare type LocationMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Location> & {
		[MessageTypesEnum.Location]: [LocationObject];
	};

export declare type MessagesResponse = GeneralMessageBody & {
	contacts: [
		{
			input: string;
			wa_id: string;
		},
	];
	messages: [
		{
			id: string;
		},
	];
};

export declare class MessagesClass extends BaseClass {
	audio(
		body: AudioMediaObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	contacts(
		body: [ContactObject],
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	document(
		body: DocumentMediaObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	image(
		body: ImageMediaObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	interactive(
		body: InteractiveObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	location(
		body: LocationObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	status(
		body: StatusObject,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	sticker(
		body: StickerMediaObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	template(
		body: MessageTemplateObject<ComponentTypesEnum>,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	text(
		body: TextObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
	video(
		body: VideoMediaObject,
		recipient: number,
		replyMessageId?: string,
	): Promise<RequesterResponseInterface<MessagesResponse>>;
}
