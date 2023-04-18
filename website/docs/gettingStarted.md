---
id: quickstart
title: Quickstart
slug: /
tags:
  - Getting started
---

# WhatsApp Business Platform Node.js SDK Quickstart

Learn how to quickly set up and use the Cloud API, hosted by Meta, Node.js SDK to send a message. In this quickstart, you'll only be sending messages via the Cloud API. Receiving messages involves setting up webhooks. For a more comprehensive baseline example to start from, you can use the [WhatsApp Node.js Project Template](https://github.com/WhatsApp/WhatsApp-Nodejs-Project-Template) instead of this quickstart.

## Prerequisites
Before you begin:

1. Install [Node.js](https://nodejs.org/) version 16 or later.
2. Complete the steps in the [official docs](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#set-up-developer-assets) for getting started with the Cloud API. Stop once you've [sent a test message](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#sent-test-message).
3. Respond to that message with anything. This puts the conversation into a [user-initiated conversations](https://developers.facebook.com/docs/whatsapp/conversation-types) session, which allows other messages to be received via API calls for 24-hours.

## Create
Open a new terminal window. Create a new directory for your project and then go to that directory.

```shell
mkdir wa_quickstart
cd ./wa_quickstart
```

Use the npm command to create a simple project definition file (package.json).

```shell
npm init --yes
```

Install the WhatsApp Business Platform Node.js SDK for the Cloud API, hosted by Meta.

```shell
npm install whatsapp
```

## Configure
Create a *.env* file in the root directory, add the values for the following variables, and save after you're done.
1. **WA_PHONE_NUMBER_ID** - Your phone number Id, located in the App Dashboard in the *WhatsApp* dropdown menu > *Getting started* > *Phone number ID*.
2. **CLOUD_API_ACCESS_TOKEN** - You can use the readily provided temporary access token or [system user access token](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started/#system-user-access-tokens) for this exercise. This is also located in the App Dashboard in the *WhatsApp* dropdown menu > *Getting started* > *Temporary access token*.
3. **CLOUD_API_VERSION** - Set this to the [latest version](https://developers.facebook.com/docs/graph-api/guides/versioning#latest) of the graph API.

The *.env* file should look like
```shell
# Your WhatsApp phone number Id (sender).
WA_PHONE_NUMBER_ID=

# System user access token. Recommended: Do not use a temporary access token.
CLOUD_API_ACCESS_TOKEN=

# Cloud API version number.
CLOUD_API_VERSION=v16.0
```

## Code
In your project directory, create a file named *start.js* with the following content with the sender number and recipient number:
```js
import WhatsApp from 'whatsapp';

// Your test sender phone number
const wa = new WhatsApp( <<SENDER_NUMBER>> );

// Enter the recipient phone number
const recipient_number = <<RECIPIENT_NUMBER>>;

async function send_message()
{
    try{
        const sent_text_message = wa.messages.text( { "body" : "Hello world" }, recipient_number );

        await sent_text_message.then( ( res ) =>
        {
            console.log( res.rawResponse() );
        } );
    }
    catch( e )
    {
        console.log( JSON.stringify( e ) );
    }
}

send_message();
```

## Anatomy
What the code above is doing is:
1. Creating a new instance of the WhatsApp class. This automatically reads from the *.env* file that was edited.
2. Sending a text type message with the text "Hello world" to the WhatsApp recipient.
3. After the message is sent, it logs the raw response body from the response object to stdout.
4. If there was an error in the request, it will log those to stdout. Look for the "details" value for a human-readable explanation for the error if the Cloud API sent a response.

## Run
Run your application by putting in the following command into terminal:
```shell
npm start.js
```

:::note
Verify that the test recipient has received the message and the Cloud API shows a *statusCode* of `200` response. If you received a `200` from the Cloud API, but did not receive the message in WhatsApp, your conversation may have gone beyond the 24-hour user-initiated conversation session. Simply resend a message from the recipient WhatsApp app and then restart your quickstart app to send a new message to the recipient.
:::
