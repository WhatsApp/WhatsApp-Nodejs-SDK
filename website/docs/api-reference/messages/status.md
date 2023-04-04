---
id: status
title: .status
---

# WhatsApp.messages.status()
Mark a message as read.

## Example:
Listen for incoming message webhook events and mark as message as read once received.

```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

async function custom_callback( statusCode, reqHeaders, body, resp, err )
{
    // Send a 200 so the webhooks service knows you received the message
    if( resp )
    {
        resp.writeHead( statusCode );
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
1. `body` : [StatusObject](../types/StatusObject) — the object describing the message status update.

## Returns
Promise — Server response object on success.
