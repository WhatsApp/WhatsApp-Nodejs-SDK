---
id: setPin
title: .setPin
---

# WhatsApp.twoStepVerification.setPin()
Sets the verification pin to the provided 6-digit number. Having a pin for use with two factor verification is required and cannot be disabled/removed.

## Example:
Set the two-step verification pin to `123456`.
```js
import WhatsApp from 'whatsapp';

const senderNumberId = 12345678901234567890;
const wa = new WhatsApp( senderNumberId );

wa.twoStepVerification.setPin( 123456 );
```

## Arguments
1. `pin` : number — The 6-digit pin code that will be used for future two-step verification.


## Returns
Promise — Server response object on success. A successful response body JSON will be of type [SetPinResponseObject](../types/SetPinResponseObject).
