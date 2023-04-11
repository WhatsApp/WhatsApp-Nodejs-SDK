---
id: StatusObject
title: StatusObject
---

# Status Object
The object describing the status of a message.

## Example
```json
{
    "status": "read",
    "message_id": "MESSAGE_ID"
}
```

## Properties
1. `status` : "read" — mark message as "read".
2. `message_id` : string — WhatsApp Message Id (wamid) of the message on which the status update should appear.
