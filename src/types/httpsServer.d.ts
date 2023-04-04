/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import http from 'http';

export declare class HttpserverClass {
	constructor(
		port: number,
		cb: (req: http.IncomingMessage, res: http.ServerResponse) => any,
	);
	isListening: () => boolean;
	close: (cb: (err?: Error) => any) => void;
}
