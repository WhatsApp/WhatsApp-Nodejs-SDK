---
id: image
title: .image
---

# WhatsApp.messages.image()
Send an existing self-hosted or Meta hosted image. Image must be of format:

- PNG
- JPG

## Example:
Send a Meta-hosted message and then send an externally hosted image to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const sender_number_1 = 12345678901234567890;
const wa = new WhatsApp( sender_number_1 );

const meta_hosted_image =
{
    "id" : "123456abcde",
    "caption" : "My image"
};

const self_hosted_image =
{
    "link" : new URL( "https://example.com/example.png" ).href,
    "caption" : "My image"
};

await wa.messages.image( meta_hosted_image, 12345678901 );
wa.messages.image( self_hosted_image, 12345678901 );
```

## Arguments
1. `body` : [Image_Media_Object](../types/image_media_object) — the object describing the image to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `reply_message_id` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
