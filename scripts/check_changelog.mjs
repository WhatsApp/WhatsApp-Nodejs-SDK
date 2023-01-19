/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'graceful-fs';

const linkRegex =
	/\[#(\d+)\]\(https:\/\/github.com\/WhatsApp\/Cloud-API-SDK-Nodejs\/(issues|pull)\/(\d+)\)/g;

const changelogPath = 'CHANGELOG';
const data = fs.readFileSync(changelogPath, 'utf-8');

let error = false;
let lineNumber = 1;
for (const line of data.split('\n')) {
	for (const match of line.matchAll(linkRegex))
		if (match[1] !== match[3]) {
			const column = match.index + 1;
			console.error(
				`${changelogPath}:${lineNumber}:${column}: error: ` +
					`Link is incorrect: ${match[0]}`,
			);
			error = true;
		}
	++lineNumber;
}

process.exit(error ? 1 : 0);
