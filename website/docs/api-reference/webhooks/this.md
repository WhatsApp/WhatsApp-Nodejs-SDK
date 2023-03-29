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

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

async function custom_callback( status_code, req_headers, body, resp, err )
{
    console.log(
        `Incoming webhook response status code: ${ status_code }\n\nHeaders:
        ${ JSON.stringify( req_headers ) }`
    );

    // Send a 200 so the webhooks service knows you received the message
    if( resp )
    {
        if( body )
            console.log( `Body: ${ JSON.stringify( body ) }` );

        resp.writeHead( status_code, { "Content-Type": "text/plain" } );
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
1. `config` : [WA_Config_Type](../types/wa_config_type) — SDK configuration object.
2. `user_agent` : string — the user-agent header parameter to send in responses.

## Returns
Object — Webhooks class instance.
