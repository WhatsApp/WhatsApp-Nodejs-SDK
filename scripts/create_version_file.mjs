/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'graceful-fs';

const copyright_string =
	'/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n * All rights reserved.\n *\n * This source code is licensed under the license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n';

const contents = `${copyright_string}export const SDK_Version = '${process.env.npm_package_version}';`;

fs.writeFile('./src/version.ts', contents);
