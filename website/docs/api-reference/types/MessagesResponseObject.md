---
id: MessagesResponseObject
title: MessagesResponseObject
---

# Messages Response Object
The successful response body JSON from the Cloud API when using the messages/ endpoints.

### Example
```json
{
  "messaging_product": "whatsapp",
  "contacts": [
    {
      "input": "17815754340",
      "wa_id": "17815754340"
    }
  ],
  "messages": [
    {
      "id": "wamid.HBgLMTY1MDUwNzY1MjAVAgARGBI5QTNDQTVCM0Q0Q0Q2RTY3RTcD"
    }
  ]
}
```

## Properties
1. `success` : boolean — the state of updating the two-step verification pin.
