---
id: video
title: .video
---

# WhatsApp.messages.video()
Send an existing self-hosted or Meta hosted video file. Supported video formats:

- MP4
- 3GP

## Example:
Send a Meta-hosted message and then send an externally hosted video file to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const meta_hosted_video =
{
    "id" : "123456abcde",
    "caption" : "My video file",
    "filename" : "example.mp4"
};

const self_hosted_video =
{
    "link" : new URL( "https://example.com/example_1234.mp4" ).href,
    "caption" : "My video file",
    "filename" : "example.mp4"
};

await wa.messages.video( meta_hosted_video, 12345678901 );
wa.messages.video( self_hosted_video, 12345678901 );
```

## Arguments
1. `body` : [VideoMediaObject](../types/VideoMediaObject) — the object describing the video file to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `replyMessageId` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
