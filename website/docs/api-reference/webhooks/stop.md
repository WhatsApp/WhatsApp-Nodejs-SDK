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

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

async function webhook_callback_function( status_code, req_headers, body, resp, err )
{
    console.log(
        `Incoming webhook response status code: ${ status_code }\n\nHeaders:
        ${ JSON.stringify( req_headers ) }`
    );
}

function webhook_stop_check_callback( err )
{
    if( err )
        console.log(`Error stopping webhook web server: ${ JSON.stringify( err ) }` );
}

async function start(){
    if( await wa.webhooks.start( webhook_callback_function ) )
        wa.webhooks.stop( webhook_stop_check_callback );
}

```

## Arguments
1. `webhook_stop_cb_function` : function( Error ) — A function that's called if there is an error shutting down the HTTP web server.

## Returns
boolean — the HTTP server running state.
