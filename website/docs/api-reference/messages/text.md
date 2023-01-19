---
id: text
title: .text
---

# WhatsApp.messages.text()
Send a WhatsApp text message.

## Example:
Send a text message to the phone number `12345678901`.
```js
const WhatsApp = require('whatsapp');

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

const message =
{
    "body": "MESSAGE_CONTENT",
    "preview_url": false
};

wa.messages.text( message, 12345678901 );
```

## Arguments
1. `body` : [Text_Object](../types/text_object) — the object describing the text to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `reply_message_id` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
