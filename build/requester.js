"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const logger_1 = __importDefault(require("./logger"));
const HttpsClient_1 = __importDefault(require("./HttpsClient"));
const LIB_NAME = 'REQUESTER';
const LOG_LOCAL = false;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
class Requester {
  constructor(host, apiVersion, phoneNumberId, accessToken, businessAcctId, userAgent) {
    this.protocol = 'https:';
    this.port = 443;
    this.client = new HttpsClient_1.default();
    this.host = host;
    this.apiVersion = apiVersion;
    this.phoneNumberId = phoneNumberId;
    this.accessToken = accessToken;
    this.businessAcctId = businessAcctId;
    this.userAgent = userAgent;
  }
  buildHeader(contentType) {
    const headers = {
      'Content-Type': contentType,
      'Authorization': `Bearer ${this.accessToken}`,
      'User-Agent': this.userAgent
    };
    return headers;
  }
  buildCAPIPath(endpoint) {
    return `/${this.apiVersion}/${this.phoneNumberId}/${endpoint}`;
  }
  sendCAPIRequest(method, endpoint, timeout, body) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentType = 'application/json';
      LOGGER.log(`${method} : ${this.protocol.toLowerCase()}//${this.host}:${this.port}/${this.buildCAPIPath(endpoint)}`);
      return yield this.client.sendRequest(this.host, this.port, this.buildCAPIPath(endpoint), method, this.buildHeader(contentType), timeout, method == 'POST' || method == 'PUT' ? body : undefined);
    });
  }
}
exports.default = Requester;
module.exports = exports.default;