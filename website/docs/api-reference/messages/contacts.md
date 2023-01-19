---
id: contacts
title: .contacts
---

# WhatsApp.messages.contacts()
Send a message with contact(s) information.

## Example:
Send a contact to the phone number `12345678901`.
```js
const WhatsApp = require('whatsapp');

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

const contact =
[ {
    "addresses":
    [ {
        "street": "STREET",
        "city": "CITY",
        "state": "STATE",
        "zip": "ZIP",
        "country": "COUNTRY",
        "country_code": "COUNTRY_CODE",
        "type": "HOME"
    } ],
    "birthday": "YEAR_MONTH_DAY",
    "emails":
    [ {
        "email": "EMAIL",
        "type": "WORK"
    } ],
    "name":
    {
        "formatted_name": "NAME",
        "first_name": "FIRST_NAME",
        "last_name": "LAST_NAME",
        "middle_name": "MIDDLE_NAME",
        "suffix": "SUFFIX",
        "prefix": "PREFIX"
    },
    "org":
    {
        "company": "COMPANY",
        "department": "DEPARTMENT",
        "title": "TITLE"
    },
    "phones":
    [ {
        "phone": "PHONE_NUMBER",
        "type": "HOME"
    },
    {
        "phone": "PHONE_NUMBER",
        "type": "WORK",
        "wa_id": "PHONE_OR_WA_ID"
    } ],
    "urls":
    [ {
        "url": "URL",
        "type": "WORK"
    },
    {
        "url": "URL",
        "type": "HOME"
    } ]
} ];

wa.messages.contacts( contact, 12345678901 );
```

## Arguments
1. `body` : [Contact_Object](../types/contact_object)[] — array of contacts to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `reply_message_id` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
