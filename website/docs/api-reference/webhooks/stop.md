---
id: stop
title: .stop
---

# WhatsApp.webhooks.stop()
This stops the web server listening the defined port for webhook events.

## Example:
Start the web server and then stop it if it's running.

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

function webhook_stop_check_callback( err )
{
    if( err )
        console.log(`Error stopping webhook web server: ${ JSON.stringify( err ) }` );
}

async function start(){
    if( await wa.webhooks.start( webhookCallbackFunction ) )
        wa.webhooks.stop( webhook_stop_check_callback );
}

```

## Arguments
1. `webhook_stop_cb_function` : function( Error ) — A function that's called if there is an error shutting down the HTTP web server.

## Returns
boolean — the HTTP server running state.
