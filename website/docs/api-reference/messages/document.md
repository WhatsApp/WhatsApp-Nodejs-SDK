---
id: document
title: .document
---

# WhatsApp.messages.document()
Send an existing self-hosted or Meta hosted document. Supported document formats:

- TXT
- PDF
- PPT or PPTX
- DOC or DOCX
- XLS or XLSX
- ODF or FODT
- ODP or FODP
- ODS or FODS

## Example:
Send a Meta-hosted message and then send an externally hosted document to the phone number `12345678901`.
```js
const WhatsApp = require('whatsapp');

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

const meta_hosted_document =
{
    "id" : "123456abcde",
    "caption" : "My important document",
    "filename" : "example.pdf"
};

const self_hosted_document =
{
    "link" : new URL( "https://example.com/example_1234.pdf" ).href,
    "caption" : "My important document",
    "filename" : "example.pdf"
};

await wa.messages.document( meta_hosted_document, 12345678901 );
wa.messages.document( self_hosted_document, 12345678901 );
```

## Arguments
1. `body` : [Document_Media_Object](../types/document_media_object) — the object describing the document to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `reply_message_id` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
