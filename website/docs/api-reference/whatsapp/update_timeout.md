---
id: update_timeout
title: .update_timeout
---

# WhatsApp.update_timeout()
Change the request timeout period from what was originally provided via environmental variables. Default request timeout is 20000ms.

## Example:
Change the request timeout period to 1.5 seconds:
```js
const WhatsApp = require('whatsapp');

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );
const was_timeout_changed = wa.update_timeout( 15000 );
```

## Arguments
1. ms : number - the timeout period for requests in milliseconds.

## Returns
Boolean — the value was updated.
