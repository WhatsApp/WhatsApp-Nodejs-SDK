---
id: interactive
title: .interactive
---

# WhatsApp.messages.interactive()
Send an interactive message to prompt a recipient to select from provided options. There are 4 interactive message types:
- Reply buttons — this allows the recipient to select a specific option (up to 3) to respond with. Each individual button can be given a unique Id to systematically perform backend logic. One example is for multi-language support, while performing the same application operation based on the Id across all languages.
- List - this displays a list of selectable items that can be split into sections (maximum of 10). The recipient can selecting an item from the provided list.
- Product (aka single product) — displays a single product from the facebook store catalog along with customizable message fields.
- Product-list (aka multi-product) — displays several products from a facebook store catalog along with customizable message fields.

## Examples:

### Reply button
Send a message with two buttons to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const reply_btn_message =
{
    "type": "button",
    "body": {
        "text": "BUTTON_TEXT"
    },
    "action": {
        "buttons": [
        {
            "type": "reply",
            "reply": {
            "id": "UNIQUE_BUTTON_ID_1",
            "title": "BUTTON_TITLE_1"
            }
        },
        {
            "type": "reply",
            "reply": {
            "id": "UNIQUE_BUTTON_ID_2",
            "title": "BUTTON_TITLE_2"
            }
        }
        ]
    }
}

wa.messages.interactive( reply_btn_message, 12345678901 );
```

### List
Send a list message with two sections and two products per section to the phone number `12345678901`.

```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const list_message =
{
    "type": "list",
    "header": {
        "type": "text",
        "text": "HEADER_TEXT"
    },
    "body": {
        "text": "BODY_TEXT"
    },
    "footer": {
        "text": "FOOTER_TEXT"
    },
    "action": {
        "button": "BUTTON_TEXT",
        "sections": [
        {
            "title": "SECTION_1_TITLE",
            "rows": [
            {
                "id": "SECTION_1_ROW_1_ID",
                "title": "SECTION_1_ROW_1_TITLE",
                "description": "SECTION_1_ROW_1_DESCRIPTION"
            },
            {
                "id": "SECTION_1_ROW_2_ID",
                "title": "SECTION_1_ROW_2_TITLE",
                "description": "SECTION_1_ROW_2_DESCRIPTION"
            }
            ]
        },
        {
            "title": "SECTION_2_TITLE",
            "rows": [
            {
                "id": "SECTION_2_ROW_1_ID",
                "title": "SECTION_2_ROW_1_TITLE",
                "description": "SECTION_2_ROW_1_DESCRIPTION"
            },
            {
                "id": "SECTION_2_ROW_2_ID",
                "title": "SECTION_2_ROW_2_TITLE",
                "description": "SECTION_2_ROW_2_DESCRIPTION"
            }
            ]
        }
        ]
    }
}

wa.messages.interactive( list_message, 12345678901 );
```

### Single product
Send a single product message to the phone number `12345678901`.

```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const prod_message =
{
    "type": "product",
    "body": {
    "text": "optional body text"
    },
    "footer": {
    "text": "optional footer text"
    },
    "action": {
    "catalog_id": "CATALOG_ID",
    "product_retailer_id": "ID_TEST_ITEM_1"
    }
}

wa.messages.interactive( prod_message, 12345678901 );
```


### Mutli-product
Send a multi-product message with two sections and two products per section to the phone number `12345678901`.

```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const multi_prod_message =
{
    "type": "product_list",
    "header":{
        "type": "text",
        "text": "header-content"
    },
    "body": {
        "text": "body-content"
    },
    "footer": {
        "text": "footer-content"
    },
    "action": {
        "catalog_id": "CATALOG_ID",
        "sections": [
            {
            "title": "section-title",
            "product_items": [
                { "product_retailer_id": "product-SKU-in-catalog" },
                { "product_retailer_id": "product-SKU-in-catalog" },
                ...
            ]
            },
            {
            "title": "section-title",
            "product_items": [
                { "product_retailer_id": "product-SKU-in-catalog" },
                { "product_retailer_id": "product-SKU-in-catalog" },
                ...
            ]
            }
        ]
    }
}

wa.messages.interactive( multi_prod_message, 12345678901 );
```

## Arguments
1. `body` : [InteractiveObject](../types/InteractiveObject) — the object describing the interactive message to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `replyMessageId` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
