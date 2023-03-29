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

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

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
1. `body` : [Location_Object](../types/location_object) — the object describing the location to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `reply_message_id` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
