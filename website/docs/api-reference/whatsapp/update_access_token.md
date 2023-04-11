---
id: updateAccessToken
title: .updateAccessToken
---

# WhatsApp.updateAccessToken()
Change the access token for making requests to the Cloud API. This will override the value originally read from the environmental variable.

## Example:
Change the access token to `1234abcd`:
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const updated_accessToken = "1234abcd";
const wa = new WhatsApp( senderNumber );
const was_token_changed = wa.updateAccessToken( updated_accessToken );
```

## Arguments
1. accessToken : string — the access token (can be temporary access token or business user token).

## Returns
Boolean — the value was updated.
