---
id: update_access_token
title: .update_access_token
---

# WhatsApp.update_access_token()
Change the access token for making requests to the Cloud API. This will override the value originally read from the environmental variable.

## Example:
Change the access token to `1234abcd`:
```js
import WhatsApp from 'whatsapp';

const sender_number = 12345678901234567890;
const updated_access_token = "1234abcd";
const wa = new WhatsApp( sender_number );
const was_token_changed = wa.update_access_token( updated_access_token );
```

## Arguments
1. access_token : string — the access token (can be temporary access token or business user token).

## Returns
Boolean — the value was updated.
