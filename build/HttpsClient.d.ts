/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference types="node" />
/// <reference types="node" />
import { IncomingMessage } from 'http';
import { Agent } from 'https';
import { HttpsClientClass, HttpsClientResponseClass, RequestHeaders, RequestData, ResponseHeaders, ResponseJSONBody } from '@/HttpsClient';
export default class HttpsClient implements HttpsClientClass {
    agent: Agent;
    constructor();
    clearSockets(): boolean;
    sendRequest(hostname: string, port: number, path: string, method: string, headers: RequestHeaders, timeout: number, requestData?: RequestData): Promise<HttpsClientResponseClass>;
}
export declare class HttpsClientResponse implements HttpsClientResponseClass {
    resp: IncomingMessage;
    respStatusCode: number;
    respHeaders: ResponseHeaders;
    constructor(resp: IncomingMessage);
    statusCode(): number;
    headers(): ResponseHeaders;
    rawResponse(): IncomingMessage;
    responseBodyToJSON(): Promise<ResponseJSONBody>;
}
