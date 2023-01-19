/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Base_Class } from '@/base';
import {
	Message_Types_Enum,
	Component_Types_Enum,
	Languages_Enum,
	Parameters_Types_Enum,
	Currency_Codes_Enum,
	Button_Types_Enum,
	Button_Position_Enum,
	Interactive_Types_Enum,
} from './enums';
import {
	General_Request_Body,
	Requester_Response_Interface,
} from './requester';

export declare type General_Message_Body = General_Request_Body & {
	/**
	 * The Meta messaging product name.
	 * @default 'whatsapp'
	 */
	messaging_product: 'whatsapp';
};

export declare type Status_Object = {
	status: 'read';
	message_id: string;
};

export declare type Status_Request_Body = General_Message_Body & Status_Object;

declare type Context_Object = {
	message_id: string;
};

export declare type Message_Request_Body<T extends Message_Types_Enum> =
	General_Message_Body & {
		recipient_type?: string;
		to: string;
		context?: Context_Object;
		type?: T;
	};

declare type Meta_Audio_Media_Object = {
	id: string;
	link?: never;
};

declare type Hosted_Audio_Media_Object = {
	id?: never;
	link: string;
};

export declare type Audio_Media_Object =
	| Meta_Audio_Media_Object
	| Hosted_Audio_Media_Object;

export declare type Audio_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Audio> & {
		[Message_Types_Enum.Audio]: [Audio_Media_Object];
	};

declare type Addresses_Object = {
	street?: string;
	city?: string;
	state?: string;
	zip?: string;
	country?: string;
	country_code?: string;
	type?: 'HOME' | 'WORK' | string;
};

declare type Email_Object = {
	email?: string;
	type?: 'HOME' | 'WORK' | string;
};

declare type Name_Object = {
	formatted_name: string;
	first_name?: string;
	last_name?: string;
	middle_name?: string;
	suffix?: string;
	prefix?: string;
};

declare type Org_Object = {
	company?: string;
	department?: string;
	title?: string;
};

declare type Phone_Object = {
	phone?: 'PHONE_NUMBER';
	type?: 'CELL' | 'MAIN' | 'IPHONE' | 'HOME' | 'WORK' | string;
	wa_id?: string;
};

declare type URL_Object = {
	url?: string;
	type?: 'HOME' | 'WORK' | string;
};

export declare type Contact_Object = {
	addresses?: Addresses_Object[];
	birthday?: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
	emails?: Email_Object[];
	name: Name_Object;
	org?: Org_Object;
	phones?: Phone_Object[];
	urls?: URL_Object[];
};

export declare type Contacts_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Contacts> & {
		[Message_Types_Enum.Contacts]: [Contact_Object];
	};

declare type Meta_Document_Media_Object = {
	id: string;
	link?: never;
	caption?: string;
	filename?: string;
};

declare type Hosted_Document_Media_Object = {
	id?: never;
	link: string;
	caption?: string;
	filename?: string;
};

declare type Document_Media_Object =
	| Meta_Document_Media_Object
	| Hosted_Document_Media_Object;

export declare type Document_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Document> & {
		[Message_Types_Enum.Document]: [Document_Media_Object];
	};

declare type Meta_Image_Media_Object = {
	id: string;
	link?: never;
	caption?: string;
};

declare type Hosted_Image_Media_Object = {
	id?: never;
	link: string;
	caption?: string;
};

declare type Image_Media_Object =
	| Meta_Image_Media_Object
	| Hosted_Image_Media_Object;

export declare type Image_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Image> & {
		[Message_Types_Enum.Image]: [Image_Media_Object];
	};

declare type Product_Object = {
	product_retailer_id: string;
};

declare type Simple_Text_Object = {
	text: string;
};

declare type Row_Object = {
	id: string;
	title: string;
	description?: string;
};

declare type Multi_Product_Section_Object = {
	product_items: Product_Object[];
	rows?: never;
	title?: string;
};

declare type List_Section_Object = {
	product_items?: never;
	rows: Row_Object[];
	title?: string;
};

declare type Section_Object =
	| Multi_Product_Section_Object
	| List_Section_Object;

declare type Buttons_Object = {
	type: 'reply';
	title: string;
	id: string;
};

declare type Action_Object = {
	button?: string;
	buttons?: Buttons_Object[];
	catalog_id?: string;
	product_retailer_id?: string;
	sections?: Section_Object;
};

declare type Header_Object = {
	type: 'document' | 'image' | 'text' | 'video';
	document?: Document_Media_Object;
	image?: Image_Media_Object;
	text?: string;
	video?: Video_Media_Object;
};

declare type Button_Interactive_Object = {
	type: Interactive_Types_Enum.Button;
	body: Simple_Text_Object;
	footer?: Simple_Text_Object;
	header?: Header_Object;
	action: Action_Object;
};

declare type List_Interactive_Object = {
	type: Interactive_Types_Enum.List;
	body: Simple_Text_Object;
	footer?: Simple_Text_Object;
	header?: Header_Object;
	action: Action_Object;
};

declare type Product_Interactive_Object = {
	type: Interactive_Types_Enum.Product;
	body?: Simple_Text_Object;
	footer?: Simple_Text_Object;
	header?: Header_Object;
	action: Action_Object;
};

declare type Product_List_Interactive_Object = {
	type: Interactive_Types_Enum.Product_list;
	body: Simple_Text_Object;
	footer?: Simple_Text_Object;
	header: Header_Object;
	action: Action_Object;
};

declare type Interactive_Object = {
	[Message_Types_Enum.Interactive]:
		| Button_Interactive_Object
		| List_Interactive_Object
		| Product_Interactive_Object
		| Product_List_Interactive_Object;
};

export declare type Interactive_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Interactive> & Interactive_Object;

declare type Meta_Sticker_Media_Object = {
	id: string;
	link?: never;
};

declare type Hosted_Sticker_Media_Object = {
	id?: never;
	link: string;
};

export declare type Sticker_Media_Object =
	| Meta_Sticker_Media_Object
	| Hosted_Sticker_Media_Object;

export declare type Sticker_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Sticker> & {
		[Message_Types_Enum.Sticker]: [Sticker_Media_Object];
	};

declare type Reaction_Object = {
	message_id: string;
	emoji: string;
};

export declare type Reaction_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Reaction> & Reaction_Object;

export declare type Text_Object = {
	body: string;
	preview_url?: boolean;
};

export declare type Text_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Text> & {
		[Message_Types_Enum.Text]: [Text_Object];
	};

declare type Meta_Hosted_Video_Media_Object = {
	id: string;
	link?: never;
	caption?: string;
};

declare type Self_Hosted_Video_Media_Object = {
	id?: never;
	link: string;
	caption?: string;
};

declare type Video_Media_Object =
	| Meta_Hosted_Video_Media_Object
	| Self_Hosted_Video_Media_Object;

export declare type Video_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Video> & {
		[Message_Types_Enum.Video]: [Video_Media_Object];
	};

declare type Language_Object = {
	policystring: 'deterministic';
	code: Languages_Enum;
};

declare type Parameters_Object<T extends Parameters_Types_Enum> = {
	type: T;
};

declare type Text_Parameters_Object =
	Parameters_Object<Parameters_Types_Enum.Text> & Simple_Text_Object;

declare type Currency_Object = {
	fallback_value: string;
	code: Currency_Codes_Enum;
	amount_1000: number;
};

declare type Currency_Parameters_Object =
	Parameters_Object<Parameters_Types_Enum.Currency> & {
		currency: Currency_Object;
	};

declare type Date_Time_Object = {
	fallback_value: string;
};

declare type Date_Time_Parameters_Object =
	Parameters_Object<Parameters_Types_Enum.Currency> & {
		date_time: Currency_Object;
	};

declare type Document_Parameters_Object =
	Parameters_Object<Parameters_Types_Enum.Document> & Document_Media_Object;

declare type Image_Parameters_Object =
	Parameters_Object<Parameters_Types_Enum.Image> & Image_Media_Object;

declare type Video_Parameters_Object =
	Parameters_Object<Parameters_Types_Enum.Video> & Video_Media_Object;

declare type Quick_Reply_Button_Parameters_Object = {
	type: Parameters_Types_Enum.Payload;
	payload: string;
};

declare type URL_Button_Parameters_Object = Simple_Text_Object & {
	type: Parameters_Types_Enum.Text;
};

declare type Component_Object<T extends Component_Types_Enum> = {
	type: T;
	parameters: (
		| Currency_Parameters_Object
		| Date_Time_Parameters_Object
		| Document_Parameters_Object
		| Image_Parameters_Object
		| Text_Parameters_Object
		| Video_Parameters_Object
	)[];
};

declare type Button_Component_Object =
	Component_Object<Component_Types_Enum.Button> & {
		parameters:
			| Quick_Reply_Button_Parameters_Object
			| URL_Button_Parameters_Object;
		sub_type: Button_Types_Enum;
		index: Button_Position_Enum;
	};

export declare type Message_Template_Object<T extends Component_Types_Enum> = {
	name: string;
	language: Language_Object;
	components?: (Component_Object<T> | Button_Component_Object)[];
};

export declare type Message_Template_Request_Body<
	T extends Component_Types_Enum,
> = Message_Request_Body<Message_Types_Enum.Template> &
	Message_Template_Object<T>;

export declare type Location_Object = {
	longitude: number;
	latitude: number;
	name?: string;
	address?: string;
};

export declare type Location_Message_Request_Body =
	Message_Request_Body<Message_Types_Enum.Location> & {
		[Message_Types_Enum.Location]: [Location_Object];
	};

export declare type Messages_Response = General_Message_Body & {
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

export declare class Messages_Class extends Base_Class {
	audio(
		body: Audio_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	contacts(
		body: [Contact_Object],
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	document(
		body: Document_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	image(
		body: Image_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	interactive(
		body: Interactive_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	location(
		body: Location_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	status(
		body: Status_Object,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	sticker(
		body: Sticker_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	template(
		body: Message_Template_Object<Component_Types_Enum>,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	text(
		body: Text_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
	video(
		body: Video_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<Messages_Response>>;
}
