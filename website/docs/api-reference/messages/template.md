---
id: template
title: .template
---

# WhatsApp.messages.template()
Send an existing approved and enabled message template. This request dynamically fills out a message template with provided component parameters.

## Example:
Send a template message called "Subscribe" in the en_US language with a parameter to fill dynamic text in the body to the recipient `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const newsletter_subscription_body =
{
    "name": "Subscribe",
    "language":
    {
        "policy": "deterministic",
        "code": "en_US"
    },
    "components":
    [
        {
        "type": "body",
        "parameters": [
            {
            "type": "text",
            "text": "newsletter"
            }
        ]
        }
    ]
};

await wa.messages.template( newsletter_subscription_body, 12345678901 );
```

## Arguments
1. `body` : [Template_Object](../types/TemplateObject) — the object describing the template to use and any components to dynamically fill the parameters with.
2. `recipient` : number — the recipient's phone number with country code.
3. `replyMessageId` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
