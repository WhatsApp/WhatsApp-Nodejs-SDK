---
id: receivingMessages
title: Receiving Messages
---

# Receiving WhatsApp Messages
The SDK provides a convenience method for creating a web server to receive incoming [Cloud API webhook notification](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/components) payloads and creating your own custom logic. This web server currently uses a single process and is not intended for multi-instance environments. You can use the utilities to build your own or contribute to this open source project.

## Prerequisites
1. Install [Node.js](https://nodejs.org/) version 16 or later.
2. A publicly accessible HTTPS (not HTTP) URL. For development, you can use tools such as [Ngrok](https://ngrok.io/) or [localtunnel](https://github.com/localtunnel/localtunnel) to route a tunnel to the listener port.
3. Have a working [quickstart](/) application.

## Configure
Open the *.env* file in the root directory, add the values for the following variables, and save after you're done:
1. **WEBHOOK_ENDPOINT** - The listener path for your application. Recommend setting the environmental variable to `webhook`.
2. **WEBHOOK_VERIFICATION_TOKEN** - This is a secret string that the Cloud API will send in it's subscribe message payload so you can verify it's a trusted source. Recommended you use a long string of alpha-numerics.
3. **LISTENER_PORT** - The network port the application will listen on. Leaving this empty will set it to the default port 3000.

The *.env* file should look like
```shell
# Your WhatsApp phone number Id.
WA_PHONE_NUMBER_ID=

# System user access token. Recommended: Do not use a temporary access token.
CLOUD_API_ACCESS_TOKEN=

# Cloud API version number.
CLOUD_API_VERSION=v16.0

# Customize your incoming webhook listener endpoint. Path should be https://{host}/{WEBHOOK_ENDPOINT}.
# A trailing slash is not added by default, so the variable should include that if it's required by your API gateway.
WEBHOOK_ENDPOINT=webhook/

# A custom verification token string to validate incoming webhook payloads.
# Needs to match webhook configuration.
WEBHOOK_VERIFICATION_TOKEN=1234567890abcd

# Override the default app listener port (optional & default 3000).
LISTENER_PORT=3000
```

## Code
Create a new file called *listen.js* file and add the following code`:

```js
import WhatsApp from "whatsapp";

const senderNumber = 12345678901234567890;
const wa = new WhatsApp();

function custom_callback ( statusCode, headers, body, resp, err )
{
    console.log(
        `Incoming webhook status code: ${ statusCode }\n\nHeaders:
        ${ JSON.stringify( headers ) }\n\nBody: ${ JSON.stringify( body ) }`
    );

    if( resp )
    {
        resp.writeHead(200, { "Content-Type": "text/plain" });
        resp.end();
    }

    if( err )
    {
        console.log( `ERROR: ${ err }` );
    }
}

wa.webhooks.start( custom_callback );
```

## Anatomy
The code above has a custom callback function that receives an several parameters, including the response object to respond back to the Cloud API, and starts the webhook listener. From top to bottom:
1. Creates a new instance of the WhatsApp SDK class.
2. Logs the status code of the request, the headers received, and the request body. You should see it print a status code of `200`.
3. After checking for the response body, it sends a `200` (success) back to the Cloud API for this request. This marks the message as delivered (see [messages.status()](./api-reference/messages/status) to also mark message as read) and the webhook service will not reattempt sending this message again.
4. Any errors are logged.
5. The webhooks listener is started. This accepts either a **GET** request or **POST**. Only post requests call the custom callback. GET requests are only for verifying subscription by the Cloud API.

## Run
Run your application by putting in the following command into terminal:
```
npm listen.js
```
The application will start the HTTP server. It's ready to verify subscription from the Cloud API, and then receive incoming messages and call the callback function.

## Setup
To have a valid HTTPS URL as required for this example, you can use a tool such as [ngrok](https://ngrok.io/) and tunnel requests from port 443 to the server listening port on 3000. To do this with ngrok, use the command `ngrok http 3000`. You'll receive a URL that you can register with the Cloud API to register your webhooks.

To finish webhook registration, follow the official docs using the **WEBHOOK_VERIFICATION_TOKEN** string that you set in your *.env* file and the URL for your webhook. The listener address will be similar to `https://<<YOUR_SUBDOMAIN>>.ngrok.io/webhook` (no trailing slash if set to just `webhook`). The server listens for the path set in the **WEBHOOK_ENDPOINT** environmental variable.

## Receive
Use your WhatsApp app (e.g. mobile, desktop, web, etc.) and send a message to the test number. Shortly after the message is sent, you should see the details of the incoming webhook request printed in terminal.
