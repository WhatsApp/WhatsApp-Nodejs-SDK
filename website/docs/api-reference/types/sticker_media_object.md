---
id: StickerMediaObject
title: StickerMediaObject
---

# Sticker Media Object
The object required for sending a sticker message. Static and animated third-party outbound stickers are supported in addition to all types of inbound stickers. A static sticker needs to be 512x512 pixels and cannot exceed 100 KB. An animated sticker must be 512x512 pixels and cannot exceed 500 KB. Meta or self hosted options have different object requirements.

## Meta Hosted Image
This sticker must already exist.

### Example
```json
{
    "id" : "IMAGE_ID",
}
```

### Properties
1. `id` : string — the media object Id. This Id is returned in the response body when the sticker was first uploaded.

## Self Hosted Image
The sticker must be readily accessible by public addresses.

### Example
```js
{
    "link" : new URL( "https://www.example.com" ).href,
}
```

### Properties
1. `link` : string — link to the publicly hosted sticker.
