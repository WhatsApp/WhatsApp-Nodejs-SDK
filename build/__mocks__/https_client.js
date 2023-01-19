"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPS_Client_Response = void 0;
const nock = require("nock");
const https_1 = require("https");
const enums_1 = require("../types/enums");
const default_success_response = { success: true };
const default_fail_response = { success: false };
const default_messages_response = {
    messaging_product: 'whatsapp',
    contacts: [
        {
            input: '16505076520',
            wa_id: '16505076520',
        },
    ],
    messages: [
        {
            id: 'wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcA',
        },
    ],
};
class HTTPS_Client {
    constructor() {
        const sdk_config = global.sdk_config;
        const base_path = `/${sdk_config.CLOUD_API_VERSION}/${sdk_config.WA_PHONE_NUMBER_ID}`;
        const scope = nock(`https://${sdk_config.WA_BASE_URL}`, {
            reqheaders: {
                authorization: `Bearer ${sdk_config.CLOUD_API_ACCESS_TOKEN}`,
            },
        })
            .get(`${base_path}/test`)
            .delay(200)
            .replyWithError(default_fail_response)
            .post(`${base_path}/messages`)
            .reply(200, default_messages_response)
            .post(`${base_path}/test`)
            .delay(200)
            .reply((uri, requestBody) => {
            return [200, requestBody];
        });
        this._agent = new https_1.Agent({ keepAlive: false });
    }
    clear_sockets() {
        nock.cleanAll();
        nock.restore();
        return true;
    }
    async send_request(hostname, port, path, method, headers, timeout, requestData) {
        const agent = this._agent;
        console.log(hostname, port, path, method, headers, timeout, requestData);
        return new Promise((resolve, reject) => {
            const req = (0, https_1.request)({
                hostname: hostname,
                port: port,
                path: path,
                method: method,
                agent: agent,
                headers: headers,
            });
            req.setTimeout(timeout, () => {
                // TODO: Handle timeout error with error handler CB and custom error code
                req.destroy();
            });
            req.on('response', (resp) => {
                resolve(new HTTPS_Client_Response(resp));
            });
            req.on('error', (error) => {
                reject(error);
            });
            req.once('socket', (socket) => {
                if (socket.connecting) {
                    socket.once('secureConnect', () => {
                        if (method !== enums_1.HTTP_Methods_Enum.Get)
                            req.write(requestData);
                        req.end();
                    });
                }
                else {
                    if (method !== enums_1.HTTP_Methods_Enum.Get)
                        req.write(requestData);
                    req.end();
                }
            });
        });
    }
}
exports.default = HTTPS_Client;
class HTTPS_Client_Response {
    constructor(resp) {
        this._resp = resp;
        this._status_code = resp.statusCode || 400;
        this._headers = resp.headers || {};
    }
    status_code() {
        return this._status_code;
    }
    headers() {
        return this._headers;
    }
    raw_response() {
        return this._resp;
    }
    async response_body_to_JSON() {
        return new Promise((resolve, reject) => {
            let response = '';
            this._resp.setEncoding('utf8');
            this._resp.on('data', (chunk) => {
                response += chunk.toString();
            });
            this._resp.once('end', () => {
                try {
                    resolve(JSON.parse(response));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
}
exports.HTTPS_Client_Response = HTTPS_Client_Response;
//# sourceMappingURL=https_client.js.map