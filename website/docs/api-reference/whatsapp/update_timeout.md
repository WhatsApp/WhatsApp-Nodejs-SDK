---
id: updateTimeout
title: .updateTimeout
---

# WhatsApp.updateTimeout()
Change the request timeout period from what was originally provided via environmental variables. Default request timeout is 20000ms.

## Example:
Change the request timeout period to 1.5 seconds:
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );
const was_timeout_changed = wa.updateTimeout( 15000 );
```

## Arguments
1. ms : number - the timeout period for requests in milliseconds.

## Returns
Boolean — the value was updated.
