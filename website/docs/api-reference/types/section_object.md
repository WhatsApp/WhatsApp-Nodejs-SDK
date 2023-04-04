---
id: SectionObject
title: SectionObject
---

# Section Object
The object describing individual sections for list messages and multi-product messages. The two types have different object requirements.

## List messages
### Example
```json
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
}
```

### Properties
1. `rows` : [RowObject](RowObject) or undefined — array of *RowObject* for list message.
2. `title` : string (optional) — contact's last name.

### Multi-product messages
### Example
```json
{
    "title": "section-title",
    "product_items": [
        { "product_retailer_id": "product-SKU-in-catalog" },
        { "product_retailer_id": "product-SKU-in-catalog" }
    ]
}
```

### Properties
1. `product_items` : [ProductObject](ProductObject) or undefined — array of *ProductObject* for multi-product message.
2. `title` : string (optional) — contact's last name.
