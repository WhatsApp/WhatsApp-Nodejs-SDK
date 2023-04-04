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
const enums_1 = require("../types/enums");
const utils_1 = require("../utils");
const httpsServer_1 = __importDefault(require("../httpsServer"));
const base_1 = __importDefault(require("./base"));
const logger_1 = __importDefault(require("../logger"));
const LIB_NAME = 'WEBHOOKS';
const LOG_LOCAL = true;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
class WebhooksAPI extends base_1.default {
  constructor(config, userAgent) {
    super(config);
    this.userAgent = userAgent;
  }
  start(cb) {
    this.server = new httpsServer_1.default(this.config[enums_1.WAConfigEnum.ListenerPort], (req, res) => {
      res.setHeader('User-Agent', this.userAgent);
      if (req.url) {
        const requestPath = new URL(req.url, `https://${req.headers.host}`);
        LOGGER.log(`received request (method: ${req.method}) for URL ${requestPath}`);
        if (requestPath.pathname == `/${this.config[enums_1.WAConfigEnum.WebhookEndpoint]}`) {
          if (req.method === 'GET') {
            if (requestPath.searchParams.get('hub.mode') == 'subscribe' && requestPath.searchParams.get('hub.verify_token') == this.config[enums_1.WAConfigEnum.WebhookVerificationToken]) {
              res.write(requestPath.searchParams.get('hub.challenge'));
              res.end();
              LOGGER.log(`webhook subscription request from ${requestPath.href} successfully verified`);
            } else {
              const errorMessage = `webhook subscription request from ${requestPath.href} has either missing or non-matching verify token`;
              const responseStatus = 401;
              LOGGER.log(errorMessage);
              res.writeHead(responseStatus);
              res.end();
              cb(responseStatus, req.headers, undefined, undefined, new Error(errorMessage));
            }
          } else if (req.method === 'POST' && req.headers['x-hub-signature-256']) {
            //Removing the prepended 'sha256=' string
            const xHubSignature = req.headers['x-hub-signature-256'].toString().replace('sha256=', '');
            let bodyBuf = [];
            req.on('data', chunk => {
              bodyBuf = bodyBuf + chunk; // linter bug where push() and "+=" throws an error
              if (bodyBuf.length > 1e6) req.destroy(); // close connection if payload is larger than 1MB for some reason
            });

            req.on('end', () => {
              const body = Buffer.concat(bodyBuf).toString();
              const generatedSignature = (0, utils_1.generateXHub256Sig)(body, this.config[enums_1.WAConfigEnum.AppSecret]);
              const cbBody = JSON.parse(body);
              if (generatedSignature == xHubSignature) {
                const responseStatus = 200;
                LOGGER.log('x-hub-signature-256 header matches generated signature');
                cb(responseStatus, req.headers, cbBody, res, undefined);
              } else {
                const errorMessage = "error: x-hub signature doesn't match";
                const responseStatus = 401;
                LOGGER.log(errorMessage);
                res.writeHead(responseStatus);
                res.end(errorMessage);
                cb(responseStatus, req.headers, cbBody, undefined, new Error(errorMessage));
              }
            });
            req.on('error', err => {
              const responseStatus = 500;
              cb(responseStatus, req.headers, undefined, res, err);
            });
          }
        }
      }
    });
    return this.isStarted();
  }
  isStarted() {
    return this.server.isListening();
  }
  stop(cb) {
    this.server.close(cb);
    return this.isStarted();
  }
}
exports.default = WebhooksAPI;
module.exports = exports.default;