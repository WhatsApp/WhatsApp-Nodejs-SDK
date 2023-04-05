/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { RequesterResponseInterface } from '@/requester';
import BaseAPI from './base';
import { ComponentTypesEnum, MessageTypesEnum } from '../types/enums';
import { RequestData } from '@/HttpsClient';
import * as m from '@/messages';
export default class MessagesAPI extends BaseAPI implements m.MessagesClass {
    private readonly commonMethod;
    private readonly commonEndpoint;
    bodyBuilder<T extends MessageTypesEnum, C extends ComponentTypesEnum>(type: T, payload: m.AudioMediaObject | [m.ContactObject] | m.DocumentMediaObject | m.ImageMediaObject | m.InteractiveObject | m.LocationObject | m.MessageTemplateObject<C> | m.StickerMediaObject | m.TextObject | m.VideoMediaObject, toNumber: string, replyMessageId?: string): m.MessageRequestBody<T>;
    send(body: RequestData): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    audio(body: m.AudioMediaObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    contacts(body: [m.ContactObject], recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    document(body: m.DocumentMediaObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    image(body: m.ImageMediaObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    interactive(body: m.InteractiveObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    location(body: m.LocationObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    sticker(body: m.StickerMediaObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    template(body: m.MessageTemplateObject<ComponentTypesEnum>, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    text(body: m.TextObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    video(body: m.VideoMediaObject, recipient: number, replyMessageId?: string): Promise<RequesterResponseInterface<m.MessagesResponse>>;
    status(body: m.StatusObject): Promise<RequesterResponseInterface<m.MessagesResponse>>;
}
