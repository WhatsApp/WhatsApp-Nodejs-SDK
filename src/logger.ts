/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LoggerInterface } from './types/logger';

export default class Logger implements LoggerInterface {
	private name: string;
	private debug: boolean | undefined;

	constructor(name: string, debug?: boolean) {
		this.name = name;
		this.debug = debug;
	}

	log(...data: any[]) {
		if (this.debug) {
			let prefix = `[ ${Date.now()} ]`;
			if (this.name) {
				prefix += ` - ${this.name}`;
			}
			console.log.apply(console, [prefix, ': ', ...data]);
		}
	}
}
