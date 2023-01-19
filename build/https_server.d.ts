/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import * as h from '@/https_server';
export default class HTTP_Server implements h.HTTP_Server_Class {
	private _sockets;
	private _server;
	private _listening;
	constructor(
		port: number,
		cb: (req: IncomingMessage, res: ServerResponse) => any,
	);
	is_listening(): boolean;
	close(cb?: (err?: Error) => any): void;
}
