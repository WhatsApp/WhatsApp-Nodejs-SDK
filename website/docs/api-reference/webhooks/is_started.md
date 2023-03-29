---
id: is_started
title: .is_started
---

# WhatsApp.webhooks.is_started()
Gets the status of the webhook web server.

## Example:
Start the web server and check if it's running after 5 seconds from application start.

```js
import WhatsApp from 'whatsapp';

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

async function webhook_callback_function( status_code, req_headers, body, resp, err )
{
    console.log(
        `Incoming webhook response status code: ${ status_code }\n\nHeaders:
        ${ JSON.stringify( req_headers ) }`
    );
}

async function check_status()
{
    setTimeout( () =>
    {
        console.log( `Webhook listener is running - ${ wa.webhooks.is_started() }` );
    }, 5000 );
}

wa.webhooks.start( webhook_callback_function )
check_status();
```

## Returns
boolean — the HTTP server running state.
