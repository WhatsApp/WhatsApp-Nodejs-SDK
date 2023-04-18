---
id: language_object
title: LanguageObject
---

# Language Object
The object describing the message template language.

## Example
```json
{
    "policy" : "deterministic",
    "code": "LANGUAGE_AND_LOCALE_CODE"
}
```

## Properties
1. `policy` : "deterministic" — the language policy the message should follow. The only supported option is *deterministic*.
2. `code` : string — the two-character code of the language or locale to use. For all codes, see [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages).
