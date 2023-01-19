/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IncomingMessage, ServerResponse } from 'http';
import * as w from '@/webhooks';
import { WA_Config_Type } from '@/config';
import { WA_Config_Enum } from '../types/enums';
import { generate_x_hub_256_sig } from '../utils';
import HTTPS_Server from '../https_server';
import Base_API from './base';
import Logger from '../logger';

const lib_name = 'WEBHOOKS';
const log_local = true;
const logger = new Logger(lib_name, process.env.DEBUG === 'true' || log_local);

export default class Webhooks_API extends Base_API implements w.Webhooks_Class {
	private _user_agent: string;
	private _server: HTTPS_Server;

	constructor(config: WA_Config_Type, user_agent: string) {
		super(config);
		this._user_agent = user_agent;
	}

	start(cb: w.Webhook_Callback): boolean {
		this._server = new HTTPS_Server(
			this._config[WA_Config_Enum.Listener_Port],
			(req: IncomingMessage, res: ServerResponse) => {
				res.setHeader('User-Agent', this._user_agent);

				if (req.url) {
					const request_path = new URL(req.url, `https://${req.headers.host}`);
					logger.log(
						`received request (method: ${req.method}) for URL ${request_path}`,
					);

					if (
						request_path.pathname ==
						`/${this._config[WA_Config_Enum.Webhook_Endpoint]}`
					) {
						if (req.method === 'GET') {
							if (
								request_path.searchParams.get('hub.mode') == 'subscribe' &&
								request_path.searchParams.get('hub.verify_token') ==
									this._config[WA_Config_Enum.Webhook_Verification_Token]
							) {
								res.write(request_path.searchParams.get('hub.challenge'));
								res.end();
								logger.log(
									`webhook subscription request from ${request_path.href} successfully verified`,
								);
							} else {
								const error_message = `webhook subscription request from ${request_path.href} has either missing or non-matching verify token`;
								const response_status = 401;

								logger.log(error_message);
								res.writeHead(response_status);
								res.end();
								cb(
									response_status,
									req.headers,
									undefined,
									undefined,
									new Error(error_message),
								);
							}
						} else if (
							req.method === 'POST' &&
							req.headers['x-hub-signature-256']
						) {
							//Removing the prepended 'sha256=' string
							const xHubSignature = req.headers['x-hub-signature-256']
								.toString()
								.replace('sha256=', '');

							let body_buf: Buffer[] = [];
							req.on('data', (chunk) => {
								body_buf = body_buf + chunk; // linter bug where push() and "+=" throws an error

								if (body_buf.length > 1e6) req.destroy(); // close connection if payload is larger than 1MB for some reason
							});

							req.on('end', () => {
								const body = Buffer.concat(body_buf).toString();

								const generated_signature = generate_x_hub_256_sig(
									body,
									this._config[WA_Config_Enum.App_Secret],
								);

								const cb_body: w.Webhook_Object = JSON.parse(body);

								if (generated_signature == xHubSignature) {
									const response_status = 200;
									logger.log(
										'x-hub-signature-256 header matches generated signature',
									);
									cb(response_status, req.headers, cb_body, res, undefined);
								} else {
									const error_message = "error: x-hub signature doesn't match";
									const response_status = 401;

									logger.log(error_message);
									res.writeHead(response_status);
									res.end(error_message);

									cb(
										response_status,
										req.headers,
										cb_body,
										undefined,
										new Error(error_message),
									);
								}
							});

							req.on('error', (err) => {
								const response_status = 500;
								cb(response_status, req.headers, undefined, res, err);
							});
						}
					}
				}
			},
		);

		return this.is_started();
	}

	is_started(): boolean {
		return this._server.is_listening();
	}

	stop(cb: (err?: Error) => any): boolean {
		this._server.close(cb);
		return this.is_started();
	}
}
