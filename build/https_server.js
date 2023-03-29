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
class HTTP_Server {
  constructor(port, cb) {
    this._listening = false;
    this._sockets = new Set();
    this._server = (0, http_1.createServer)(cb).listen(port);
    this._server.on('connection', socket => {
      this._sockets.add(socket);
      this._listening = true;
      this._server.once('close', () => {
        this._sockets.delete(socket);
        this._listening = false;
      });
    });
  }
  is_listening() {
    return this._listening;
  }
  close(cb) {
    for (const socket of this._sockets) {
      socket.destroy();
      this._sockets.delete(socket);
    }
    this._server.close(cb);
  }
}
exports.default = HTTP_Server;
module.exports = exports.default;