---
id: isStarted
title: .isStarted
---

# WhatsApp.webhooks.isStarted()
Gets the status of the webhook web server.

## Example:
Start the web server and check if it's running after 5 seconds from application start.

```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

async function webhookCallbackFunction( statusCode, reqHeaders, body, resp, err )
{
    console.log(
        `Incoming webhook response status code: ${ statusCode }\n\nHeaders:
        ${ JSON.stringify( reqHeaders ) }`
    );
}

async function check_status()
{
    setTimeout( () =>
    {
        console.log( `Webhook listener is running - ${ wa.webhooks.isStarted() }` );
    }, 5000 );
}

wa.webhooks.start( webhookCallbackFunction )
check_status();
```

## Returns
boolean — the HTTP server running state.
