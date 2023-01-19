/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Requester_Response_Interface } from '@/requester';
import Base_API from './base';
import {
	Component_Types_Enum,
	HTTP_Methods_Enum,
	Message_Types_Enum,
	WA_Config_Enum,
} from '../types/enums';
import { Request_Data } from '@/https_client';
import * as m from '@/messages';
import Logger from '../logger';

const lib_name = 'MESSAGES_API';
const log_local = false;
const logger = new Logger(lib_name, process.env.DEBUG === 'true' || log_local);

export default class Messages_API extends Base_API implements m.Messages_Class {
	private readonly _common_method = HTTP_Methods_Enum.Post;
	private readonly _common_endpoint = 'messages';

	private _body_builder<
		T extends Message_Types_Enum,
		C extends Component_Types_Enum,
	>(
		type: T,
		payload:
			| m.Audio_Media_Object
			| [m.Contact_Object]
			| m.Document_Media_Object
			| m.Image_Media_Object
			| m.Interactive_Object
			| m.Location_Object
			| m.Message_Template_Object<C>
			| m.Sticker_Media_Object
			| m.Text_Object
			| m.Video_Media_Object,
		to_number: string,
		reply_message_id?: string,
	) {
		const body: m.Message_Request_Body<T> = {
			messaging_product: 'whatsapp',
			recipient_type: 'individual',
			to: to_number,
			type: type,
			[type]: payload,
		};

		if (reply_message_id) body['context'] = { message_id: reply_message_id };

		return body;
	}

	private _send(
		body: Request_Data,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._client.send_CAPI_request(
			this._common_method,
			this._common_endpoint,
			this._config[WA_Config_Enum.Request_Timeout],
			body,
		);
	}

	async audio(
		body: m.Audio_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Audio,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async contacts(
		body: [m.Contact_Object],
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Contacts,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async document(
		body: m.Document_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Document,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async image(
		body: m.Image_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Image,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async interactive(
		body: m.Interactive_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Interactive,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async location(
		body: m.Location_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Location,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async sticker(
		body: m.Sticker_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Sticker,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async template(
		body: m.Message_Template_Object<Component_Types_Enum>,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Template,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async text(
		body: m.Text_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		logger.log(body);
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Text,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async video(
		body: m.Video_Media_Object,
		recipient: number,
		reply_message_id?: string,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		return this._send(
			JSON.stringify(
				this._body_builder(
					Message_Types_Enum.Video,
					body,
					recipient.toString(),
					reply_message_id,
				),
			),
		);
	}

	async status(
		body: m.Status_Object,
	): Promise<Requester_Response_Interface<m.Messages_Response>> {
		const mp: m.General_Message_Body = { messaging_product: 'whatsapp' };
		const send_body: m.Status_Request_Body = Object.assign(mp, body);

		return this._send(JSON.stringify(send_body));
	}
}
