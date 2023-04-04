---
id: text
title: .text
---

# WhatsApp.messages.text()
Send a WhatsApp text message.

## Example:
Send a text message to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const message =
{
    "body": "MESSAGE_CONTENT",
    "preview_url": false
};

wa.messages.text( message, 12345678901 );
```

## Arguments
1. `body` : [TextObject](../types/TextObject) — the object describing the text to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `replyMessageId` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
