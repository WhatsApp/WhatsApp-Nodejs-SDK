/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createServer, IncomingMessage, Server, ServerResponse } from 'http';
import { Socket } from 'net';
import * as h from '@/https_server';

export default class HTTP_Server implements h.HTTP_Server_Class {
	private _sockets: Set<Socket>;
	private _server: Server;
	private _listening = false;

	constructor(
		port: number,
		cb: (req: IncomingMessage, res: ServerResponse) => any,
	) {
		this._sockets = new Set();
		this._server = createServer(cb).listen(port);

		this._server.on('connection', (socket: Socket) => {
			this._sockets.add(socket);
			this._listening = true;

			this._server.once('close', () => {
				this._sockets.delete(socket);
				this._listening = false;
			});
		});
	}

	public is_listening() {
		return this._listening;
	}

	public close(cb?: (err?: Error) => any) {
		for (const socket of this._sockets) {
			socket.destroy();
			this._sockets.delete(socket);
		}

		this._server.close(cb);
	}
}
