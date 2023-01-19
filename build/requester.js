"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const https_client_1 = require("./https_client");
const lib_name = 'REQUESTER';
const log_local = false;
const logger = new logger_1.default(lib_name, process.env.DEBUG === 'true' || log_local);
class Requester {
    constructor(host, api_version, phone_number_id, access_token, business_acct_id, user_agent) {
        this._protocol = 'https:';
        this._port = 443;
        this._client = new https_client_1.default();
        this._host = host;
        this._api_version = api_version;
        this._phone_number_id = phone_number_id;
        this._access_token = access_token;
        this._business_acct_id = business_acct_id;
        this._user_agent = user_agent;
    }
    _build_header(content_type) {
        const headers = {
            'Content-Type': content_type,
            'Authorization': `Bearer ${this._access_token}`,
            'User-Agent': this._user_agent,
        };
        return headers;
    }
    _build_CAPI_path(endpoint) {
        return `/${this._api_version}/${this._phone_number_id}/${endpoint}`;
    }
    async send_CAPI_request(method, endpoint, timeout, body) {
        const content_type = 'application/json';
        logger.log(`${method} : ${this._protocol.toLowerCase()}//${this._host}:${this._port}/${this._build_CAPI_path(endpoint)}`);
        return await this._client.send_request(this._host, this._port, this._build_CAPI_path(endpoint), method, this._build_header(content_type), timeout, method == 'POST' || method == 'PUT' ? body : undefined);
    }
}
exports.default = Requester;
//# sourceMappingURL=requester.js.map