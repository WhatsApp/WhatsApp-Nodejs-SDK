---
id: AudioMediaObject
title: AudioMediaObject
---

# Audio Media Object
The object required for sending an audio message. Can either be a self-hosted and publicly accessible audio, or an existing Meta-hosted audio file in a supported format. Meta or self hosted options have different object requirements.

## Meta Hosted
This audio file must already exist.

### Example
```json
{
    "id" : "AUDIO_ID",
}
```

### Properties
1. `id` : string — the audio file Id. This Id is returned in the response body when the audio file was first uploaded.

## Self Hosted
The audio file must be readily accessible by public addresses.

### Example
```js
{
    "link" : new URL( "https://www.example.com" ).href,
}
```

### Properties
1. `link` :  string — link to the publicly hosted audio.
