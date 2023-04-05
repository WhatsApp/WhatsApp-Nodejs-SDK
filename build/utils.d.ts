/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { WAConfigType } from '@/config';
export declare const importConfig: (senderNumberId?: number) => WAConfigType;
export declare const generateXHub256Sig: (body: string, appSecret: string) => string;
