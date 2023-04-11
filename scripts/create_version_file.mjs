/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'graceful-fs';

const contents = `/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { semanticVersionString } from "./types/version";

export const SDKVersion: semanticVersionString = '${process.env.npm_package_version}';
`;
fs.writeFile('./src/version.ts', contents);
