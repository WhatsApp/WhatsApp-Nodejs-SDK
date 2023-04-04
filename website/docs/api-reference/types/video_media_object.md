---
id: VideoMediaObject
title: VideoMediaObject
---

# Video Media Object
The object required for sending a video message. Can either be a self-hosted and publicly accessible video, or an existing Meta-hosted video in a supported format. Meta or self hosted options have different object requirements.

## Meta Hosted Video
This video must already exist.

### Example
```json
{
    "id" : "VIDEO_ID",
    "caption" : "CAPTION"
}
```

### Properties
1. `id` : string — the video Id. This Id is returned in the response body when the video was first uploaded.
2. `caption` : string (optional) — text to be displayed with the video to describe the video.

## Self Hosted video
The video must be readily accessible by public addresses.

### Example
```js
{
    "link" : new URL( "https://www.example.com" ).href,
    "caption" : "CAPTION"
}
```

### Properties
1. `link` :  string — link to the publicly hosted video.
2. `caption` : string (optional) — text to be displayed with the video to describe the video.
