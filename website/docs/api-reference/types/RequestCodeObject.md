---
id: RequestCodeObject
title: RequestCodeObject
---

# Request Code Object
Object used for requesting a verification code based on the desired method and language to the number currently being used by the API.

### Example
```json
{
  "code_method" : "SMS",
  "language" : "en"
}
```

## Properties
1. `code_method` : "SMS" | "VOICE" — the state of updating the two-step verification pin.
2. `language` : string — the two-character code of the language or locale to use. For all codes, see [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages).
