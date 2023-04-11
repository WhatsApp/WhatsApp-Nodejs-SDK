---
id: HeaderObject
title: HeaderObject
---

# Header Object
The object describing the content displayed in the header of a message.

## Example
```json
{
    "type": "text",
    "text": "header-content"
}
```

## Properties
1. `type` : "document", "image", "text", or "video" — header type you would like to use.
    - *text* can be used with list messages, reply buttons, and multi-product messages.
    - *video* can be used with reply buttons.
    - *image* can be used with reply buttons.
    - *document* can be used with reply buttons.
2. `document` : [DocumentMediaObject](DocumentMediaObject) (optional) — the media object for this document. Required if type is *document*.
3. `image` : [ImageMediaObject](ImageMediaObject) (optional) — the media object for this image. Required if type is *image*.
4. `text` : string (optional) — text for the header. Formatting allows emojis, but not markdown. Maximum length: 60 characters.
5. `video` : [VideoMediaObject](VideoMediaObject) (optional) — the media object for this video. Required if type is *video*.
