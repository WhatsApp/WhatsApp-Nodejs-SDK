---
id: this
title: this
---

# Phone numbers class
This is the phone numbers class that is instantiated by the WhatsApp class. The phone numbers class object can be referenced with <<SDK_NAMESPACE>>.phoneNumbers to access the member functions.

## Example:
Request a phone number verification code to be sent via SMS in the english language.

### Typescript
```ts
import WhatsApp from 'whatsapp';

const senderNumberId = 12345678901234567890;
const wa = new WhatsApp( senderNumberId );

const body = {
    "code_method" : WhatsApp.Enum.RequestCodeMethodsEnum.Sms,
    "language" : WhatsApp.Enum.English
}

wa.phoneNumbers.requestCode( body );
```

### Javascript
```js
import WhatsApp from 'whatsapp';

const senderNumberId = 12345678901234567890;
const wa = new WhatsApp( senderNumberId );

const body = {
    "code_method" : "SMS",
    "language" : "en"
}

wa.phoneNumbers.requestCode( body );
```

## Arguments
1. `config` : [WAConfigType](../types/WAConfigType) — SDK configuration object.
2. `HttpsClient` : RequesterClass — the HTTPS requester class object, including the HTTP client instance to make requests with.

## Returns
Object — Phone numbers class instance.
