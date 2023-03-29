---
id: version
title: .version
---

# WhatsApp.version()
Retrieves the semantically formatted SDK version.

## Example:
Get the SDK version:
```js
import WhatsApp from 'whatsapp';

const sender_number_1 = 12345678901;
const wa = new WhatsApp( sender_number_1 );
const sdk_version = wa.version();
```

## Arguments
Void

## Returns
String — version string formatted MAJOR.MINOR.PATCH-LABELS. Labels are optional.
