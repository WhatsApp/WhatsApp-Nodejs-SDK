---
id: start
title: .start
---

# WhatsApp.webhooks.start()
This starts the web server listening the defined port for webhook events. It handles both *GET* and *POST* requests made to the webhook endpoint path.

*GET* request is verified using the webhook verification token, a successful match sends back the `hub.challenge` to the Cloud API request in order to validate a webhook subscription. A successful verification string match sends back the challenge code with a `200` response. A verification string match failure results in a `401` status code response and your callback is called with an error message, a `401` value for the status code, and the request headers.

*POST* request are received and the payload is checked against for authenticity against the `x-hub-signature-256` using the shared app secret. A calculated `x-hub-signature-256` string match failure results in a `401`status code response being sent and your callback is called with an error message, a `401` value for the status code, the request headers, and the request body.

## Example:
Start the web server and print out valid message webhook event bodies.

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

    if( resp )
    {
        if( body?.entry[ 0 ].changes[ 0 ].field == "messages" && body.entry[ 0 ].changes[ 0 ].value.messages )
            console.log( `Messages Object: ${ JSON.stringify( body.entry[ 0 ].changes[ 0 ].value.messages ) }` );

        // Send a 200 so the webhooks service knows you received the message
        resp.writeHead( status_code );
        resp.end();
    }

    if( err )
    {
        console.log( `ERROR: ${ err }` );
        resp.end();
    }
}

wa.webhooks.start( webhook_callback_function );
```

## Arguments
1. `webhook_callback_function` : [Webhook_Callback_Function](../types/webhook_callback_function) — The callback that gets called during POST requests made to the webhook listener endpoint.

## Returns
boolean — the HTTP server running state.
