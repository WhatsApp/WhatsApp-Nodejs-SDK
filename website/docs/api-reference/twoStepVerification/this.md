---
id: this
title: this
---

# Two-step verification class
This is the two-step verification class that is instantiated by the WhatsApp class. The two-step verification class object can be referenced with <<SDK_NAMESPACE>>.twoStepVerification to access the member functions.

## Example:
Set the two-step verification pin to `123456`.
```js
import WhatsApp from 'whatsapp';

const senderNumberId = 12345678901234567890;
const wa = new WhatsApp( senderNumberId );

wa.twoStepVerification.setPin( 123456 );
```

## Arguments
1. `config` : [WAConfigType](../types/WAConfigType) — SDK configuration object.
2. `HttpsClient` : RequesterClass — the HTTPS requester class object, including the HTTP client instance to make requests with.

## Returns
Object — Two-step verification class instance.
