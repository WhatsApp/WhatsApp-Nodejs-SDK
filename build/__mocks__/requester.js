"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPS_Client_1 = require("./HTTPS_Client");
const HTTPS_Client_2 = require("./HTTPS_Client");
class Requester {
    constructor(host, api_version, phone_number_id, access_token, business_acct_id, user_agent) {
        this._protocol = 'https:';
        this._port = 443;
        this._client = new HTTPS_Client_2.default();
        this._phone_number_id = phone_number_id;
        this._api_version = api_version;
        this._access_token = access_token;
        this._business_acct_id = business_acct_id;
    }
    async send_CAPI_request(method, body, endpoint, timeout) {
        const response = new HTTPS_Client_1.HTTPS_Client_Response(method, endpoint, {}, body);
        let resp_body;
        switch (endpoint) {
            case 'messages':
                resp_body = {
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
                break;
            case 'verify_code':
                resp_body = {
                    success: true,
                };
                break;
            default:
                response.status_code = jest.fn(() => {
                    return 400;
                });
                resp_body = {
                    error: {
                        message: `Unknown path components: /${endpoint}`,
                        type: 'OAuthException',
                        code: 2500,
                        fbtrace_id: 'asdf_asdfASd',
                    },
                };
        }
        response.response_to_JSON = jest.fn(() => Promise.resolve(resp_body));
        return response;
    }
}
exports.default = Requester;
//# sourceMappingURL=requester.js.map