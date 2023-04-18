---
id: verifyCode
title: .verifyCode
---

# WhatsApp.phoneNumbers.verifyCode()
Verify a phone number using the code that was received earlier from a verification code request.

## Example:
Use the verification code "00000" that was received earlier to verify the number.

### Typescript
```js
import WhatsApp from 'whatsapp';

const senderNumberId = 12345678901234567890;
const wa = new WhatsApp( senderNumberId );

const body : VerifyCodeObject = {
    "code" : "00000"
}

wa.phoneNumbers.verifyCode( body );
```

### Javascript
```js
import WhatsApp from 'whatsapp';

const senderNumberId = 12345678901234567890;
const wa = new WhatsApp( senderNumberId );

const body = {
    "code" : "00000"
}

wa.phoneNumbers.verifyCode( body );
```

## Arguments
1. `body` : [VerifyCodeObject](../types/VerifyCodeObject) — Object specifying the method to receive the verification code ("SMS" or "VOICE") and the language.


## Returns
Promise — Server response object on success. A successful response body JSON will be of type [PhoneNumbersResponseObject](../types/PhoneNumbersResponseObject).
