/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type semanticVersionLabels = '-Alpha' | '-Beta' | '';
export type semanticVersionString =
	`${number}.${number}.${number}${semanticVersionLabels}`;
