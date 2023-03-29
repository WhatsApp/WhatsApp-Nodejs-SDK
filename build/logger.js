"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
class Logger {
  constructor(name, debug) {
    this.name = name;
    this.debug = debug;
  }
  log(...data) {
    if (this.debug) {
      let prefix = `[ ${Date.now()} ]`;
      if (this.name) {
        prefix += ` - ${this.name}`;
      }
      console.log.apply(console, [prefix, ': ', ...data]);
    }
  }
}
exports.default = Logger;
module.exports = exports.default;