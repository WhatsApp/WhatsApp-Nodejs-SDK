---
id: ImageMediaObject
title: ImageMediaObject
---

# Image Media Object
The object required for sending an image message. Can either be a self-hosted and publicly accessible image, or an existing Meta-hosted image in a supported format. Meta or self hosted options have different object requirements.

## Meta Hosted Image
This image must already exist in PNG or JPG format.

### Example
```json
{
    "id" : "IMAGE_ID",
    "caption" : "CAPTION"
}
```

### Properties
1. `id` : string — the image Id. This Id is returned in the response body when the image was first uploaded.
2. `caption` : string (optional) — text to be displayed with the image to describe the image.

## Self Hosted Image
The image must be readily accessible by public addresses and in PNG or JPG format.

### Example
```js
{
    "link" : new URL( "https://www.example.com" ).href,
    "caption" : "CAPTION"
}
```

### Properties
1. `link` :  string — link to the publicly hosted image.
2. `caption` : string (optional) — text to be displayed with the image to describe the image.
