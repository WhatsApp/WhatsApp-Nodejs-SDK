---
id: this
title: this
---

# Webhooks class
This is the webhooks class that is instantiated by the WhatsApp class. The webhooks class object can be referenced with <<SDK_NAMESPACE>>.webhooks to access the member functions.

## Example:
Start the web server and print out the response status code, request headers, and if it exists, the body.

```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

async function custom_callback( statusCode, reqHeaders, body, resp, err )
{
    console.log(
        `Incoming webhook response status code: ${ statusCode }\n\nHeaders:
        ${ JSON.stringify( reqHeaders ) }`
    );

    // Send a 200 so the webhooks service knows you received the message
    if( resp )
    {
        if( body )
            console.log( `Body: ${ JSON.stringify( body ) }` );

        resp.writeHead( statusCode, { "Content-Type": "text/plain" } );
        resp.end();
    }

    if( err )
    {
        console.log( `ERROR: ${ err }` );
        resp.end();
    }
}

wa.webhooks.start( custom_callback );
```

## Arguments
1. `config` : [WAConfigType](../types/WAConfigType) — SDK configuration object.
2. `userAgent` : string — the user-agent header parameter to send in responses.

## Returns
Object — Webhooks class instance.
