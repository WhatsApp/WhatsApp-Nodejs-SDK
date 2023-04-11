/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BaseClass } from './base';
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

export type GeneralMessageBody = GeneralRequestBody & {
	/**
	 * The Meta messaging product name.
	 * @default 'whatsapp'
	 */
	messaging_product: 'whatsapp';
};

export type StatusObject = {
	status: 'read';
	message_id: string;
};

export type StatusRequestBody = GeneralMessageBody & StatusObject;

type ConTextObject = {
	message_id: string;
};

export type MessageRequestBody<T extends MessageTypesEnum> =
	GeneralMessageBody & {
		recipient_type?: string;
		to: string;
		context?: ConTextObject;
		type?: T;
	};

type MetaAudioMediaObject = {
	id: string;
	link?: never;
};

type HostedAudioMediaObject = {
	id?: never;
	link: string;
};

export type AudioMediaObject = MetaAudioMediaObject | HostedAudioMediaObject;

export type AudioMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Audio> & {
		[MessageTypesEnum.Audio]: [AudioMediaObject];
	};

type AddressesObject = {
	street?: string;
	city?: string;
	state?: string;
	zip?: string;
	country?: string;
	country_code?: string;
	type?: 'HOME' | 'WORK' | string;
};

type EmailObject = {
	email?: string;
	type?: 'HOME' | 'WORK' | string;
};

type NameObject = {
	formatted_name: string;
	first_name?: string;
	last_name?: string;
	middle_name?: string;
	suffix?: string;
	prefix?: string;
};

type OrgObject = {
	company?: string;
	department?: string;
	title?: string;
};

type PhoneObject = {
	phone?: 'PHONE_NUMBER';
	type?: 'CELL' | 'MAIN' | 'IPHONE' | 'HOME' | 'WORK' | string;
	wa_id?: string;
};

type URLObject = {
	url?: string;
	type?: 'HOME' | 'WORK' | string;
};

export type ContactObject = {
	addresses?: AddressesObject[];
	birthday?: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
	emails?: EmailObject[];
	name: NameObject;
	org?: OrgObject;
	phones?: PhoneObject[];
	urls?: URLObject[];
};

export type ContactsMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Contacts> & {
		[MessageTypesEnum.Contacts]: [ContactObject];
	};

type MetaDocumentMediaObject = {
	id: string;
	link?: never;
	caption?: string;
	filename?: string;
};

type HostedDocumentMediaObject = {
	id?: never;
	link: string;
	caption?: string;
	filename?: string;
};

export type DocumentMediaObject =
	| MetaDocumentMediaObject
	| HostedDocumentMediaObject;

export type DocumentMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Document> & {
		[MessageTypesEnum.Document]: [DocumentMediaObject];
	};

type MetaImageMediaObject = {
	id: string;
	link?: never;
	caption?: string;
};

type HostedImageMediaObject = {
	id?: never;
	link: string;
	caption?: string;
};

export type ImageMediaObject = MetaImageMediaObject | HostedImageMediaObject;

export type ImageMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Image> & {
		[MessageTypesEnum.Image]: [ImageMediaObject];
	};

type ProductObject = {
	product_retailer_id: string;
};

type SimpleTextObject = {
	text: string;
};

type RowObject = {
	id: string;
	title: string;
	description?: string;
};

type MultiProductSectionObject = {
	product_items: ProductObject[];
	rows?: never;
	title?: string;
};

type ListSectionObject = {
	product_items?: never;
	rows: RowObject[];
	title?: string;
};

type SectionObject = MultiProductSectionObject | ListSectionObject;

type ButtonObject = {
	title: string;
	id: string;
};

type ReplyButtonObject = {
	type: 'reply';
	reply: ButtonObject;
};

type ActionObject = {
	button?: string;
	buttons?: ReplyButtonObject[];
	catalog_id?: string;
	product_retailer_id?: string;
	sections?: SectionObject;
};

type HeaderObject = {
	type: 'document' | 'image' | 'text' | 'video';
	document?: DocumentMediaObject;
	image?: ImageMediaObject;
	text?: string;
	video?: VideoMediaObject;
};

type ButtonInteractiveObject = {
	type: InteractiveTypesEnum.Button;
	body: SimpleTextObject;
	footer?: SimpleTextObject;
	header?: HeaderObject;
	action: ActionObject;
};

type ListInteractiveObject = {
	type: InteractiveTypesEnum.List;
	body: SimpleTextObject;
	footer?: SimpleTextObject;
	header?: HeaderObject;
	action: ActionObject;
};

type ProductInteractiveObject = {
	type: InteractiveTypesEnum.Product;
	body?: SimpleTextObject;
	footer?: SimpleTextObject;
	header?: HeaderObject;
	action: ActionObject;
};

type ProductListInteractiveObject = {
	type: InteractiveTypesEnum.ProductList;
	body: SimpleTextObject;
	footer?: SimpleTextObject;
	header: HeaderObject;
	action: ActionObject;
};

export type InteractiveObject =
	| ButtonInteractiveObject
	| ListInteractiveObject
	| ProductInteractiveObject
	| ProductListInteractiveObject;

export type InteractiveMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Interactive> & {
		[MessageTypesEnum.Interactive]: InteractiveObject;
	};

type MetaStickerMediaObject = {
	id: string;
	link?: never;
};

type HostedStickerMediaObject = {
	id?: never;
	link: string;
};

export type StickerMediaObject =
	| MetaStickerMediaObject
	| HostedStickerMediaObject;

export type StickerMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Sticker> & {
		[MessageTypesEnum.Sticker]: [StickerMediaObject];
	};

type ReActionObject = {
	message_id: string;
	emoji: string;
};

export type ReactionMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Reaction> & ReActionObject;

export type TextObject = {
	body: string;
	preview_url?: boolean;
};

export type TextMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Text> & {
		[MessageTypesEnum.Text]: [TextObject];
	};

type MetaHostedVideoMediaObject = {
	id: string;
	link?: never;
	caption?: string;
};

type SelfHostedVideoMediaObject = {
	id?: never;
	link: string;
	caption?: string;
};

export type VideoMediaObject =
	| MetaHostedVideoMediaObject
	| SelfHostedVideoMediaObject;

export type VideoMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Video> & {
		[MessageTypesEnum.Video]: [VideoMediaObject];
	};

type LanguageObject = {
	policy: 'deterministic';
	code: LanguagesEnum;
};

type ParametersObject<T extends ParametersTypesEnum> = {
	type: T;
};

type TextParametersObject = ParametersObject<ParametersTypesEnum.Text> &
	SimpleTextObject;

type CurrencyObject = {
	fallback_value: string;
	code: CurrencyCodesEnum;
	amount_1000: number;
};

type CurrencyParametersObject =
	ParametersObject<ParametersTypesEnum.Currency> & {
		currency: CurrencyObject;
	};

type DateTimeObject = {
	fallback_value: string;
};

type DateTimeParametersObject =
	ParametersObject<ParametersTypesEnum.Currency> & {
		date_time: CurrencyObject;
	};

type DocumentParametersObject = ParametersObject<ParametersTypesEnum.Document> &
	DocumentMediaObject;

type ImageParametersObject = ParametersObject<ParametersTypesEnum.Image> &
	ImageMediaObject;

type VideoParametersObject = ParametersObject<ParametersTypesEnum.Video> &
	VideoMediaObject;

type QuickReplyButtonParametersObject = {
	type: ParametersTypesEnum.Payload;
	payload: string;
};

type URLButtonParametersObject = SimpleTextObject & {
	type: ParametersTypesEnum.Text;
};

type ButtonParameterObject =
	| QuickReplyButtonParametersObject
	| URLButtonParametersObject;

type ComponentObject<T extends ComponentTypesEnum> = {
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

type ButtonComponentObject = ComponentObject<ComponentTypesEnum.Button> & {
	parameters: ButtonParameterObject;
	sub_type: ButtonTypesEnum;
	index: ButtonPositionEnum;
};

export type MessageTemplateObject<T extends ComponentTypesEnum> = {
	name: string;
	language: LanguageObject;
	components?: (ComponentObject<T> | ButtonComponentObject)[];
};

export type MessageTemplateRequestBody<T extends ComponentTypesEnum> =
	MessageRequestBody<MessageTypesEnum.Template> & MessageTemplateObject<T>;

export type LocationObject = {
	longitude: number;
	latitude: number;
	name?: string;
	address?: string;
};

export type LocationMessageRequestBody =
	MessageRequestBody<MessageTypesEnum.Location> & {
		[MessageTypesEnum.Location]: [LocationObject];
	};

export type MessagesResponse = GeneralMessageBody & {
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
