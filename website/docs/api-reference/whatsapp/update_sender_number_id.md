---
id: update_sender_number_id
title: .update_sender_number_id
---

# WhatsApp.update_sender_number_id()
Change the sender phone number Id. Should only input a value that is registered with the Cloud API otherwise requests will send an unauthorized error.

## Example:
Change the sender number Id to `09876543210987654321`:
```js
import WhatsApp from 'whatsapp';

const sender_number_1 = 12345678901234567890;
const sender_number_2 = 09876543210987654321;
const wa = new WhatsApp( sender_number_1 );
const was_sender_changed = wa.update_sender_number_id( sender_number_2 );
```

## Arguments
1. phone_number_id : number — the WhatsApp phone number Id of the sender.

## Returns
Boolean — the value was updated.
