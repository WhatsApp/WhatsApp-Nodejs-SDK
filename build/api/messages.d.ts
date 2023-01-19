/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Requester_Response_Interface } from '@/requester';
import Base_API from './base';
import { Component_Types_Enum } from '../types/enums';
import * as m from '@/messages';
export default class Messages_API extends Base_API implements m.Messages_Class {
	private readonly _common_method;
	private readonly _common_endpoint;
	private _body_builder;
	private _send;
	audio(
		body: m.Audio_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	contacts(
		body: [m.Contact_Object],
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	document(
		body: m.Document_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	image(
		body: m.Image_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	interactive(
		body: m.Interactive_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	location(
		body: m.Location_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	sticker(
		body: m.Sticker_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	template(
		body: m.Message_Template_Object<Component_Types_Enum>,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	text(
		body: m.Text_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	video(
		body: m.Video_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
	status(
		body: m.Status_Object,
	): Promise<Requester_Response_Interface<m.Messages_Response>>;
}
