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

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

async function webhookCallbackFunction( statusCode, reqHeaders, body, resp, err )
{
    console.log(
        `Incoming webhook response status code: ${ statusCode }\n\nHeaders:
        ${ JSON.stringify( reqHeaders ) }`
    );

    if( resp )
    {
        if( body?.entry[ 0 ].changes[ 0 ].field == "messages" && body.entry[ 0 ].changes[ 0 ].value.messages )
            console.log( `Messages Object: ${ JSON.stringify( body.entry[ 0 ].changes[ 0 ].value.messages ) }` );

        // Send a 200 so the webhooks service knows you received the message
        resp.writeHead( statusCode );
        resp.end();
    }

    if( err )
    {
        console.log( `ERROR: ${ err }` );
        resp.end();
    }
}

wa.webhooks.start( webhookCallbackFunction );
```

## Arguments
1. `webhookCallbackFunction` : [webhookCallbackFunction](../types/webhookCallbackFunction) — The callback that gets called during POST requests made to the webhook listener endpoint.

## Returns
boolean — the HTTP server running state.
