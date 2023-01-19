---
id: status
title: .status
---

# WhatsApp.messages.status()
Mark a message as read.

## Example:
Listen for incoming message webhook events and mark as message as read once received.

```js
const WhatsApp = require('whatsapp');

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

async function custom_callback( status_code, req_headers, body, resp, err )
{
    // Send a 200 so the webhooks service knows you received the message
    if( resp )
    {
        resp.writeHead( status_code );
        resp.end();
    }

    // Mark message as read
    if( body?.entry[ 0 ].changes[ 0 ].field == "messages" && body.entry[ 0 ].changes[ 0 ].value.messages )
    {
        message_status_read( body.entry[ 0 ].changes[ 0 ].value.messages[ 0 ].id );
    }
}

wa.webhooks.start( custom_callback );
```

## Arguments
1. `body` : [Status_Object](../types/status_object) — the object describing the message status update.

## Returns
Promise — Server response object on success.
