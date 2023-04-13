---
id: InteractiveObject
title: InteractiveObject
---

# Interactive Object
The object describing an interactive message. Each interactive object type has different object requirements.

## List
The object describing a list message interactive object.

### Example
```json
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
```

### Properties
1. `type` : "list" — interactive object type of *list*.
2. `body` : [SimpleTextObject](SimpleTextObject) — content of the message. Emojis and markdown are supported. Maximum length: 1024 characters.
3. `footer` : [SimpleTextObject](SimpleTextObject) (optional) — footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters.
4. `header` : [HeaderObject](HeaderObject) (optional) — header content displayed on top of a message.
5. `action` : [ActionObject](ActionObject#reply-button) — action you want the user to perform after reading the message.

## Multi-product
The object describing a multi-product interactive object.

### Example
```json
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
             { "product_retailer_id": "product-SKU-in-catalog" }
           ]
         },
         {
           "title": "section-title",
           "product_items": [
             { "product_retailer_id": "product-SKU-in-catalog" },
             { "product_retailer_id": "product-SKU-in-catalog" }
           ]
         }
       ]
     }
   }
```

### Properties
1. `type` : "product_list" — interactive object type of *product_list*.
2. `body` : [SimpleTextObject](SimpleTextObject) — content of the message. Emojis and markdown are supported. Maximum length: 1024 characters.
3. `footer` : [SimpleTextObject](SimpleTextObject) (optional) — footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters.
4. `header` : [HeaderObject](HeaderObject) — header content displayed on top of a message.
5. `action` : [ActionObject](ActionObject#reply-button) — action you want the user to perform after reading the message.

## Single product
The object describing a single product interactive object.

### Example
```json
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
```

### Properties
1. `type` : "product" — interactive object type of *product*.
2. `body` : [SimpleTextObject](SimpleTextObject) (optional) — content of the message. Emojis and markdown are supported. Maximum length: 1024 characters.
3. `footer` : [SimpleTextObject](SimpleTextObject) (optional) — footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters.
4. `header` : [HeaderObject](HeaderObject) (optional) — header content displayed on top of a message.
5. `action` : [ActionObject](ActionObject#reply-button) — action you want the user to perform after reading the message.

## Reply button
The object describing a reply button interactive object.

### Example
```json
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
```

### Properties
1. `type` : "button" — interactive object type of *button*.
2. `body` : [SimpleTextObject](SimpleTextObject) — content of the message. Emojis and markdown are supported. Maximum length: 1024 characters.
3. `footer` : [SimpleTextObject](SimpleTextObject) (optional) — footer content. Emojis, markdown, and links are supported. Maximum length: 60 characters.
4. `header` : [HeaderObject](HeaderObject) (optional) — header content displayed on top of a message.
5. `action` : [ActionObject](ActionObject#reply-button) — action you want the user to perform after reading the message.
