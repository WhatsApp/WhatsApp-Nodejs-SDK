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
const base_1 = __importDefault(require("./base"));
const enums_1 = require("../types/enums");
const logger_1 = __importDefault(require("../logger"));
const LIB_NAME = 'MESSAGES_API';
const LOG_LOCAL = false;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
class MessagesAPI extends base_1.default {
  constructor() {
    super(...arguments);
    this.commonMethod = enums_1.HttpMethodsEnum.Post;
    this.commonEndpoint = 'messages';
  }
  bodyBuilder(type, payload, toNumber, replyMessageId) {
    const body = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: toNumber,
      type: type,
      [type]: payload
    };
    if (replyMessageId) body['context'] = {
      message_id: replyMessageId
    };
    return body;
  }
  send(body) {
    return this.client.sendCAPIRequest(this.commonMethod, this.commonEndpoint, this.config[enums_1.WAConfigEnum.RequestTimeout], body);
  }
  audio(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Audio, body, recipient.toString(), replyMessageId)));
    });
  }
  contacts(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Contacts, body, recipient.toString(), replyMessageId)));
    });
  }
  document(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Document, body, recipient.toString(), replyMessageId)));
    });
  }
  image(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Image, body, recipient.toString(), replyMessageId)));
    });
  }
  interactive(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Interactive, body, recipient.toString(), replyMessageId)));
    });
  }
  location(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Location, body, recipient.toString(), replyMessageId)));
    });
  }
  sticker(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Sticker, body, recipient.toString(), replyMessageId)));
    });
  }
  template(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Template, body, recipient.toString(), replyMessageId)));
    });
  }
  text(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      LOGGER.log(body);
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Text, body, recipient.toString(), replyMessageId)));
    });
  }
  video(body, recipient, replyMessageId) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.send(JSON.stringify(this.bodyBuilder(enums_1.MessageTypesEnum.Video, body, recipient.toString(), replyMessageId)));
    });
  }
  status(body) {
    return __awaiter(this, void 0, void 0, function* () {
      const mp = {
        messaging_product: 'whatsapp'
      };
      const bodyToSend = Object.assign(mp, body);
      return this.send(JSON.stringify(bodyToSend));
    });
  }
}
exports.default = MessagesAPI;
module.exports = exports.default;