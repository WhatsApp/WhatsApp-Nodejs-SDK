---
id: reply_buttons_object
title: Reply_Buttons_Object
---

# Reply Buttons Object
The object describing a reply button's properties name.

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
2. `title` : string — button title. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not. Maximum length of 20 characters.
3. `id` : string — unique identifier for your button. This Id is returned in the webhook when the button is clicked by the user. Maximum length of 256 characters.
