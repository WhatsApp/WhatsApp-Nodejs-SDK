---
id: ActionObject
title: ActionObject
---

# Action Object
The object describing a actions taken for different types interactive messages. Different actions have different object requirements.

## Example
## Single product message
### Example
```json
{
    "catalog_id": "CATALOG_ID",
    "product_retailer_id": "ID_TEST_ITEM_1"
}
```

## Properties
1. `catalog_id` : string (optional) — unique identifier of the Facebook catalog linked to your WhatsApp Business Account. Required for single product messages and multi-product messages.
2. `product_retailer_id` : string (optional) — unique identifier of the product in a catalog. Required for Single Product Messages and Multi-Product Messages.

## Multi-product message
### Example
```json
{
    "catalog_id": "CATALOG_ID",
    "sections":
    [
        {
        "title": "section-title",
        "product_items":
        [
            { "product_retailer_id": "product-SKU-in-catalog" },
            { "product_retailer_id": "product-SKU-in-catalog" },

        ]
        },
        {
        "title": "section-title",
        "product_items":
        [
            { "product_retailer_id": "product-SKU-in-catalog" },
            { "product_retailer_id": "product-SKU-in-catalog" },
        ]
        }
    ]
}
```

## Properties
1. `catalog_id` : string — unique identifier of the Facebook catalog linked to your WhatsApp Business Account. Required for single product messages and multi-product messages.
2. `sections` : [Sections_Object](SectionObject)[] — array of sections for list message or multi-product messages. Minimum of 1, maximum of 10. See section object.

## List message
### Example
```json
{
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
```

## Properties
1. `button` : string — button content. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not.
2. `sections` : [Sections_Object](SectionObject)[] — array of sections for list message or multi-product messages. Minimum of 1, maximum of 10.

## Reply button
### Example
```json
{
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
```

## Properties
1. `button` : string — button content. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not.
2. `buttons` : [ReplyButtonObject](ReplyButtonObject)[] — array of reply buttons (maximum of 3, minimum of 1).
