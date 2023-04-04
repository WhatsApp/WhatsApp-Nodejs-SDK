---
id: location
title: .location
---

# WhatsApp.messages.location()
Send a location message.

## Example:
Send the Meta headquarter location to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const meta_hq_location =
{
    "longitude": "37.4850729",
    "latitude": "-122.1527671",
    "name": "Meta Headquarters",
    "address": "1 Hacker Way, Menlo Park, CA 94025, USA"
};

wa.messages.location( meta_hq_location, 12345678901 );
```

## Arguments
1. `body` : [LocationObject](../types/LocationObject) — the object describing the location to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `replyMessageId` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
