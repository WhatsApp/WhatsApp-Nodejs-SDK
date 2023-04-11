---
id: this
title: this
---

# WhatsApp class
This is the main class that is instantiated to create a client for the SDK. Configuration is set via environmental variables. Applications that are built in development mode can use a *.env* file located in the root of their project, but production applications must have these environmental variables set through other mechanisms before runtime.

## Example:
Create a new SDK client for the WhatsApp sender phone number Id `12345678901234567890`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );
```

## Arguments
1. `senderNumberId` : number (optional) — The phone number Id of the sender registered in the Cloud API, including the country code (without any symbols). This is not required if `WA_PHONE_NUMBER_ID` is available as an environmental variable (e.g. set in your *.env* file), but is required if it is omitted there. This allows a single app to send using multiple registered numbers.

## Returns
Object — WhatsApp class instance.
