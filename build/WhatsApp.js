"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== 'production' ||
    process.env.TS_NODE_DEV === 'true') {
    dotenv.config();
}
const utils_1 = require("./utils");
const version_1 = require("./version");
const logger_1 = require("./logger");
const requester_1 = require("./requester");
const messages_1 = require("./api/messages");
const webhooks_1 = require("./api/webhooks");
const enums_1 = require("./types/enums");
const lib_name = 'WHATSAPP';
const log_local = false;
const logger = new logger_1.default(lib_name, process.env.DEBUG === 'true' || log_local);
const header_prefix = 'WA_SDK';
class WhatsApp {
    constructor(sender_number_id) {
        this._version = version_1.SDK_Version;
        this._config = (0, utils_1.import_config)(sender_number_id);
        this._requester = new requester_1.default(this._config[enums_1.WA_Config_Enum.Base_URL], this._config[enums_1.WA_Config_Enum.API_Version], this._config[enums_1.WA_Config_Enum.Phone_Number_Id], this._config[enums_1.WA_Config_Enum.Access_Token], this._config[enums_1.WA_Config_Enum.Business_Acct_Id], this.user_agent());
        this.messages = new messages_1.default(this._config, this._requester);
        this.webhooks = new webhooks_1.default(this._config, this.user_agent());
        logger.log('WhatsApp Node.js SDK instantiated!');
    }
    version() {
        return this._version;
    }
    user_agent() {
        const user_agent_string = `${header_prefix}/${this.version()} (Node.js ${process.version})`;
        return user_agent_string;
    }
    update_timeout(ms) {
        this._config[enums_1.WA_Config_Enum.Request_Timeout] = ms;
        logger.log(`Updated request timeout to ${ms}ms`);
        return true;
    }
    update_sender_number_id(phone_number_id) {
        this._config[enums_1.WA_Config_Enum.Phone_Number_Id] = phone_number_id;
        logger.log(`Updated sender phone number id to ${phone_number_id}`);
        return true;
    }
    update_access_token(access_token) {
        this._config[enums_1.WA_Config_Enum.Access_Token] = access_token;
        logger.log(`Updated access token`);
        return true;
    }
}
exports.default = WhatsApp;
//# sourceMappingURL=WhatsApp.js.map