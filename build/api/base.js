"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const logger_1 = __importDefault(require("../logger"));
const LIB_NAME = 'BaseAPI';
const LOG_LOCAL = false;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
class BaseAPI {
  constructor(config, HttpsClient) {
    if (HttpsClient) this.client = HttpsClient;
    this.config = config;
    LOGGER.log(`Initialized with HTTPSClient: ${HttpsClient ? 'true' : 'false'}`);
  }
}
exports.default = BaseAPI;
module.exports = exports.default;