---
id: ButtonObject
title: ButtonObject
---

# Reply Buttons Object
The object describing a reply button's properties.

## Example
```json
{
    "id": "UNIQUE_BUTTON_ID_1",
    "title": "BUTTON_TITLE_1"
}
```

## Properties
1. `title` : string — button title. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not. Maximum length of 20 characters.
2. `id` : string — unique identifier for your button. This Id is returned in the webhook when the button is clicked by the user. Maximum length of 256 characters.
