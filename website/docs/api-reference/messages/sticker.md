---
id: sticker
title: .sticker
---

# WhatsApp.messages.sticker()
Send an existing self-hosted or Meta hosted sticker. Static and animated third-party outbound stickers are supported in addition to all types of inbound stickers. A static sticker needs to be 512x512 pixels and cannot exceed 100 KB. An animated sticker must be 512x512 pixels and cannot exceed 500 KB. Meta or self hosted options have different object requirements Supported video formats:

- WEBP

## Example:
Send a Meta-hosted message and then send an externally hosted sticker to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const meta_hosted_sticker =
{
    "id" : "123456abcde",
};

const self_hosted_sticker =
{
    "link" : new URL( "https://example.com/example_1234.webp" ).href,
};

await wa.messages.sticker( meta_hosted_sticker, 12345678901 );
wa.messages.sticker( self_hosted_sticker, 12345678901 );
```

## Arguments
1. `body` : [StickerMediaObject](../types/StickerMediaObject) — the object describing the sticker to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `replyMessageId` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
