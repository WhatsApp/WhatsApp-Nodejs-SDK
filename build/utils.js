"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateXHub256Sig = exports.importConfig = void 0;
const crypto = __importStar(require("crypto"));
const enums_1 = require("./types/enums");
const logger_1 = __importDefault(require("./logger"));
const LIB_NAME = 'UTILS';
const LOG_LOCAL = false;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
const DEFAULT_BASE_URL = 'graph.facebook.com';
const DEFAULT_LISTENER_PORT = 3000;
const DEFAULT_MAX_RETRIES_AFTER_WAIT = 30;
const DEFAULT_REQUEST_TIMEOUT = 20000;
const emptyConfigChecker = senderNumberId => {
  if ((process.env.WA_PHONE_NUMBER_ID === undefined || process.env.WA_PHONE_NUMBER_ID === '') && senderNumberId == undefined) {
    LOGGER.log(`Environmental variable: WA_PHONE_NUMBER_ID and/or sender phone number id arguement is undefined.`);
    throw new Error('Missing WhatsApp sender phone number Id.');
  }
  for (const value of Object.values(enums_1.WARequiredConfigEnum)) {
    LOGGER.log(value + ' ---- ' + process.env[`${value}`]);
    if (process.env[`${value}`] === undefined || process.env[`${value}`] === '') {
      LOGGER.log(`Environmental variable: ${value} is undefined`);
      throw new Error('Invalid configuration.');
    }
  }
};
const importConfig = senderNumberId => {
  emptyConfigChecker(senderNumberId);
  const config = {
    [enums_1.WAConfigEnum.BaseURL]: process.env.WA_BASE_URL || DEFAULT_BASE_URL,
    [enums_1.WAConfigEnum.AppId]: process.env.M4D_APP_ID || '',
    [enums_1.WAConfigEnum.AppSecret]: process.env.M4D_APP_SECRET || '',
    [enums_1.WAConfigEnum.PhoneNumberId]: senderNumberId || parseInt(process.env.WA_PHONE_NUMBER_ID || ''),
    [enums_1.WAConfigEnum.BusinessAcctId]: process.env.WA_BUSINESS_ACCOUNT_ID || '',
    [enums_1.WAConfigEnum.APIVersion]: process.env.CLOUD_API_VERSION || '',
    [enums_1.WAConfigEnum.AccessToken]: process.env.CLOUD_API_ACCESS_TOKEN || '',
    [enums_1.WAConfigEnum.WebhookEndpoint]: process.env.WEBHOOK_ENDPOINT || '',
    [enums_1.WAConfigEnum.WebhookVerificationToken]: process.env.WEBHOOK_VERIFICATION_TOKEN || '',
    [enums_1.WAConfigEnum.ListenerPort]: parseInt(process.env.LISTENER_PORT || '') || DEFAULT_LISTENER_PORT,
    [enums_1.WAConfigEnum.MaxRetriesAfterWait]: parseInt(process.env.MAX_RETRIES_AFTER_WAIT || '') || DEFAULT_MAX_RETRIES_AFTER_WAIT,
    [enums_1.WAConfigEnum.RequestTimeout]: parseInt(process.env.REQUEST_TIMEOUT || '') || DEFAULT_REQUEST_TIMEOUT,
    [enums_1.WAConfigEnum.Debug]: process.env.DEBUG === 'true'
  };
  LOGGER.log(`Configuration loaded for App Id ${config[enums_1.WAConfigEnum.AppId]}`);
  return config;
};
exports.importConfig = importConfig;
const generateXHub256Sig = (body, appSecret) => {
  return crypto.createHmac('sha256', appSecret).update(body, 'utf-8').digest('hex');
};
exports.generateXHub256Sig = generateXHub256Sig;