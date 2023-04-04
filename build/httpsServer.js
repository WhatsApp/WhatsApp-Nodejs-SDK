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
const http_1 = require("http");
class Httpserver {
  constructor(port, cb) {
    this.listening = false;
    this.sockets = new Set();
    this.server = (0, http_1.createServer)(cb).listen(port);
    this.server.on('connection', socket => {
      this.sockets.add(socket);
      this.listening = true;
      this.server.once('close', () => {
        this.sockets.delete(socket);
        this.listening = false;
      });
    });
  }
  isListening() {
    return this.listening;
  }
  close(cb) {
    for (const socket of this.sockets) {
      socket.destroy();
      this.sockets.delete(socket);
    }
    this.server.close(cb);
  }
}
exports.default = Httpserver;
module.exports = exports.default;