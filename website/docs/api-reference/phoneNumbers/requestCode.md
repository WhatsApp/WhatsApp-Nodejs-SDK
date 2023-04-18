---
id: requestCode
title: .requestCode
---

# WhatsApp.phoneNumbers.requestCode()
Requests a verification code to be sent to number configured in the current WhatsApp client instance. Phone numbers can be verified using a code sent via either SMS or voice call in a specified language.

## Example:
Request a phone number verification code to be sent via SMS in the english language.

### Typescript
```ts
import WhatsApp from 'whatsapp';

const senderNumberId = 12345678901234567890;
const wa = new WhatsApp( senderNumberId );

const body : RequestCodeObject = {
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
1. `body` : [RequestCodeObject](../types/RequestCodeObject) — Object specifying the method to receive the verification code ("SMS" or "VOICE") and the language.


## Returns
Promise — Server response object on success. A successful response body JSON will be of type [PhoneNumbersResponseObject](../types/PhoneNumbersResponseObject).
