---
id: audio
title: .audio
---

# WhatsApp.messages.audio()
Send an existing self-hosted or Meta hosted audio file. Supported audio formats:

- AAC
- MP4
- MPEG
- AMR
- OGG *Note: The base audio/ogg type is not supported.*

## Example:
Send a Meta-hosted message and then send an externally hosted audio file to the phone number `12345678901`.
```js
import WhatsApp from 'whatsapp';

const senderNumber = 12345678901234567890;
const wa = new WhatsApp( senderNumber );

const meta_hosted_audio =
{
    "id" : "123456abcde",
    "caption" : "My audio file",
    "filename" : "example.mp4"
};

const selfHostedAudio =
{
    "link" : new URL( "https://example.com/example_1234.mp4" ).href,
    "caption" : "My audio file",
    "filename" : "example.mp4"
};

await wa.messages.audio( meta_hosted_audio, 12345678901 );
wa.messages.audio( selfHostedAudio, 12345678901 );
```

## Arguments
1. `body` : [AudioMediaObject](../types/AudioMediaObject) — the object describing the audio file to send.
2. `recipient` : number — the recipient's phone number with country code.
3. `replyMessageId` : string (optional) — the received WhatsApp message Id to reply back to.

## Returns
Promise — Server response object on success.
