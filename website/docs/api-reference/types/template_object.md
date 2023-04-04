---
id: TemplateObject
title: TemplateObject
---

# Template Object
The object describing a WhatsApp message template to use and the components to dynamically fill the parameters of that template with.

## Example
```json
{
    "name": "TEMPLATE_NAME",
    "language": {
        "policy": "deterministic",
        "code": "LANGUAGE_AND_LOCALE_CODE"
    },
    "components": [
        {
            "type": "header",
            "parameters": [
                {
                "type": "image",
                "image": {
                    "link": "http(s)://URL"
                }
                }
            ]
        },
        {
            "type": "body",
            "parameters": [
                {
                    "type": "text",
                    "text": "TEXT_STRING"
                },
                {
                    "type": "currency",
                    "currency": {
                        "fallback_value": "VALUE",
                        "code": "USD",
                        "amount_1000": 1000
                    }
                },
                {
                    "type": "date_time",
                    "date_time": {
                        "fallback_value": "MONTH DAY, YEAR"
                    }
                }
            ]
        },
        {
        "type": "button",
        "sub_type": "quick_reply",
        "index": "0",
        "parameters": [
            {
                "type": "payload",
                "payload": "PAYLOAD"
            }
        ]
        },
        {
            "type": "button",
            "sub_type": "quick_reply",
            "index": "1",
            "parameters": [
                {
                "type": "payload",
                "payload": "PAYLOAD"
                }
            ]
        }
    ]
}
```

## Properties
1. `name` : string — name of the template.
2. `language` : [LanguageObject](language_object) — specifies the language the template may be rendered in.
3. `components` : [ComponentObject](component_object)[] (optional) — array of components objects containing the parameters of the message.
