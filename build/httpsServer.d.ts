/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
/// <reference types="node" />
import { IncomingMessage, Server, ServerResponse } from 'http';
import { Socket } from 'net';
import * as h from '@/httpsServer';
export default class Httpserver implements h.HttpserverClass {
	sockets: Set<Socket>;
	server: Server;
	listening: boolean;
	constructor(
		port: number,
		cb: (req: IncomingMessage, res: ServerResponse) => any,
	);
	isListening(): boolean;
	close(cb?: (err?: Error) => any): void;
}
