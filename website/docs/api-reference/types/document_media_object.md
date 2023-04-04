---
id: DocumentMediaObject
title: DocumentMediaObject
---

# Document Media Object
The object required for sending a document message. Can either be a self-hosted and publicly accessible document, or an existing Meta-hosted document in a supported format. Meta or self hosted options have different object requirements.

## Meta Hosted Document
This document must already exist.

### Example
```
{
    "id" : "DOCUMENT_ID",
    "caption" : "CAPTION",
    "filename" : "FILENAME.PDF"
}
```

### Properties
1. `id` : string — the document Id. This Id is returned in the response body when the document was first uploaded.
2. `caption` : string (optional) — text to be displayed with the document to describe the document.
3. `filename` : string (optional) - the display filename to override the default.

## Self Hosted Document
The image must be readily accessible by public addresses.

### Example
```json
{
    "link" : "https://www.example.com/DOCUMENT.PDF",
    "caption" : "CAPTION",
    "filename" : "FILENAME.PDF"
}
```

### Properties
1. `link` : string — the URL where the document is hosted.
2. `caption` : string (optional) — text to be displayed with the document to describe the document.
3. `filename` : string (optional) - the display filename to override the default.
