---
id: this
title: this
---

# Messages class
This is the messages class that is instantiated by the WhatsApp class. The messages class object can be referenced with <<SDK_NAMESPACE>>.messages to access the member functions.

## Example:
Send a text-only message to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );
wa.messages.text( { "body" : "MESSAGE_CONTENT" }, 12345678901 );
```

## Arguments
1. `config` : [WAConfigType](../types/WAConfigType) — SDK configuration object.
2. `HttpsClient` : RequesterClass — the HTTPS requester class object, including the HTTP client instance to make requests with.

## Returns
Object — Messages class instance.
