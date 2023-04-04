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
exports.HttpsClientResponse = void 0;
const https_1 = require("https");
const logger_1 = __importDefault(require("./logger"));
const enums_1 = require("./types/enums");
const LIB_NAME = 'HttpsClient';
const LOG_LOCAL = false;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
class HttpsClient {
  constructor() {
    this.agent = new https_1.Agent({
      keepAlive: true
    });
  }
  clearSockets() {
    this.agent.destroy();
    return true;
  }
  sendRequest(hostname, port, path, method, headers, timeout, requestData) {
    return __awaiter(this, void 0, void 0, function* () {
      const agent = this.agent;
      return new Promise((resolve, reject) => {
        const req = (0, https_1.request)({
          hostname: hostname,
          port: port,
          path: path,
          method: method,
          agent: agent,
          headers: headers
        });
        LOGGER.log({
          hostname: hostname,
          port: port,
          path,
          method,
          agent,
          headers
        });
        req.setTimeout(timeout, () => {
          // TODO: Handle timeout error with error handler CB and custom error code
          req.destroy();
        });
        req.on('response', resp => {
          resolve(new HttpsClientResponse(resp));
        });
        req.on('error', error => {
          reject(error);
        });
        req.once('socket', socket => {
          if (socket.connecting) {
            socket.once('secureConnect', () => {
              LOGGER.log(requestData);
              if (method === enums_1.HttpMethodsEnum.Post || method == enums_1.HttpMethodsEnum.Put) req.write(requestData);
              req.end();
            });
          } else {
            if (method === enums_1.HttpMethodsEnum.Post || method == enums_1.HttpMethodsEnum.Put) req.write(requestData);
            req.end();
          }
        });
      });
    });
  }
}
exports.default = HttpsClient;
class HttpsClientResponse {
  constructor(resp) {
    this.resp = resp;
    this.respStatusCode = resp.statusCode || 400;
    this.respHeaders = resp.headers || {};
  }
  statusCode() {
    return this.respStatusCode;
  }
  headers() {
    return this.respHeaders;
  }
  rawResponse() {
    return this.resp;
  }
  responseBodyToJSON() {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => {
        let response = '';
        this.resp.setEncoding('utf8');
        this.resp.on('data', chunk => {
          response += chunk.toString();
        });
        this.resp.once('end', () => {
          try {
            resolve(JSON.parse(response));
          } catch (err) {
            reject(err);
          }
        });
      });
    });
  }
}
exports.HttpsClientResponse = HttpsClientResponse;