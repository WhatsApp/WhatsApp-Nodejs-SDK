---
id: webhook_callback_function
title: Webhook_Callback_Function
---

# Webhook Callback Function
The custom callback that is passed in to start the web server listening for webhook events. This receives all webhook events from the graph API, not just incoming messages. You are only able to respond to webhook events if they are a *POST* request and have a validated `x-hub-signature-256` string.

## Example
```js
async function custom_callback( status_code, request_headers, body, response, error )
{
    console.log(
        `Incoming webhook response status code: ${ status_code }\n\nHeaders:
        ${ JSON.stringify( request_headers ) }`
    );

    // Send a 200 so the webhooks service knows you received the message
    if( response )
    {
        if( body )
            console.log( `Body: ${ JSON.stringify( body ) }` );

        response.writeHead( status_code, { "Content-Type": "text/plain" } );
        response.end();
    }

    if( error )
    {
        console.log( `ERROR: ${ error }` );
    }
}
```

## Arguments
1. `status_code` : number — the response status code that was either sent or recommended to be sent in the callback response.
2. `request_headers` : HTTP request object — request headers object from the node HTTP library.
3. `body` : Webhook_Request_Body  (optional) — the Cloud API's webhook request body. Only exists if there was a body in the request.
4. `response` : HTTP response object (optional) — standard HTTP response object from the node HTTP library. Only exists if a response wasn't already sent (validated request).
5. `error` : Error (optional) — present when there are errors with the incoming request.
