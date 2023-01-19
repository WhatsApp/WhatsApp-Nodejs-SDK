/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { WA_Config_Type } from '@/config';
export declare const import_config: (
	sender_number_id?: number,
) => WA_Config_Type;
export declare const generate_x_hub_256_sig: (
	body: string,
	app_secret: string,
) => string;
