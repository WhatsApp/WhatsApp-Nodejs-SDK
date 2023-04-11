---
id: TextObject
title: TextObject
---

# Text Object
The object describing a text-based message.

## Example
```json
{
    "body": "MESSAGE_CONTENT",
    "preview_url": false
}
```

## Properties
1. `body` : string — text of the text message which can contain URLs which begin with http:// or https:// and formatting. See available formatting options [here](https://developers.facebook.com/docs/whatsapp/on-premises/reference/messages#formatting).
2. `preview_url` : boolean (optional) — if a link is in the text, setting this field to true includes a preview box with more information about the link.
