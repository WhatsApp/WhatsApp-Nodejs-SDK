/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Logger_Interface } from '@/logger';
export default class Logger implements Logger_Interface {
	private name;
	private debug;
	constructor(name: string, debug?: boolean);
	log(...data: any[]): void;
}
