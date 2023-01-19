"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const enums_1 = require("../types/enums");
const logger_1 = require("../logger");
const lib_name = 'MESSAGES_API';
const log_local = false;
const logger = new logger_1.default(lib_name, process.env.DEBUG === 'true' || log_local);
class Messages_API extends base_1.default {
    constructor() {
        super(...arguments);
        this._common_method = enums_1.HTTP_Methods_Enum.Post;
        this._common_endpoint = 'messages';
    }
    _body_builder(type, payload, to_number, reply_message_id) {
        const body = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: to_number,
            type: type,
            [type]: payload,
        };
        if (reply_message_id)
            body['context'] = { message_id: reply_message_id };
        return body;
    }
    _send(body) {
        return this._client.send_CAPI_request(this._common_method, this._common_endpoint, this._config[enums_1.WA_Config_Enum.Request_Timeout], body);
    }
    async audio(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Audio, body, recipient.toString(), reply_message_id)));
    }
    async contacts(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Contacts, body, recipient.toString(), reply_message_id)));
    }
    async document(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Document, body, recipient.toString(), reply_message_id)));
    }
    async image(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Image, body, recipient.toString(), reply_message_id)));
    }
    async interactive(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Interactive, body, recipient.toString(), reply_message_id)));
    }
    async location(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Location, body, recipient.toString(), reply_message_id)));
    }
    async sticker(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Sticker, body, recipient.toString(), reply_message_id)));
    }
    async template(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Template, body, recipient.toString(), reply_message_id)));
    }
    async text(body, recipient, reply_message_id) {
        logger.log(body);
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Text, body, recipient.toString(), reply_message_id)));
    }
    async video(body, recipient, reply_message_id) {
        return this._send(JSON.stringify(this._body_builder(enums_1.Message_Types_Enum.Video, body, recipient.toString(), reply_message_id)));
    }
    async status(body) {
        const mp = { messaging_product: 'whatsapp' };
        const send_body = Object.assign(mp, body);
        return this._send(JSON.stringify(send_body));
    }
}
exports.default = Messages_API;
//# sourceMappingURL=messages.js.map