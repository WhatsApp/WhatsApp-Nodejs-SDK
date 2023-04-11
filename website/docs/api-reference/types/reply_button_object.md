---
id: ReplyButtonObject
title: ReplyButtonObject
---

# Reply Buttons Object
The object describing a reply button's properties.

## Example
```json
{
    "type": "reply",
    "reply": {
        "id": "UNIQUE_BUTTON_ID_1",
        "title": "BUTTON_TITLE_1"
    }
}
```

## Properties
1. `type` : "reply" — only supported type is reply (for reply button).
2. `reply` : [ButtonObject](ButtonObject) — object describing the button.
