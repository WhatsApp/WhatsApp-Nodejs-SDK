"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger");
const lib_name = 'BASE_API';
const log_local = false;
const logger = new logger_1.default(lib_name, process.env.DEBUG === 'true' || log_local);
class Base_API {
    constructor(config, HTTPS_Client) {
        if (HTTPS_Client)
            this._client = HTTPS_Client;
        this._config = config;
        logger.log(`Initialized with HTTPS_Client: ${HTTPS_Client ? 'true' : 'false'}`);
    }
}
exports.default = Base_API;
//# sourceMappingURL=base.js.map