---
id: component_object
title: ComponentObject
---

# Component Object
The object containing the component to fill available message template parameter(s) with text, currency, date-time, document, image, video, or button. Each type has different requirements.

## Currency
### Example
```json
{
    "type": "body",
    "parameters":
    [ {
        "type": "currency",
        "currency":
        {
            "fallback_value": "VALUE",
            "code": "USD",
            "amount_1000": 1000
        }
    } ]
}
```

### Properties
1. `type` : "header", "body" — type of component, can be either *header* or *body*. Text-based templates only support the type=body and only text components.
2. `parameters` : [CurrencyObject](currency_object)[] — array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.

## Button
The object containing the component to fill a message template parameter(s) with a button.

### Example
```json
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
}
```

### Properties
1. `type` : "button" — the type of component, can only be the value *button*.
2. `sub_type` : "quick_reply" or "url" — *quick_reply* refers to a previously created quick reply button that allows for the customer to return a predefined message.
*url* refers to a previously created button that allows the customer to visit the URL generated by appending the text parameter to the predefined prefix URL in the template.
3. `index` : string (optional) — position index of the button. You can have up to 3 buttons using index values of 0 to 2.
4. `parameters` : [ButtonParameterObject](button_parameter_object)[] — array of button parameter objects. Can be either *Quick Reply Button Parameter Object* or *URL Button Parameter Object* that matches *sub_type*.

## Date-time
### Example
```json
{
    "type": "body",
    "parameters":
    [ {
        "type": "date_time",
        "date_time":
        {
            "fallback_value": "MONTH DAY, YEAR"
        }
    } ]
}
```

### Properties
1. `type` : "header", "body" — type of component, can be either *header* or *body*. Text-based templates only support the type=body and only text components.
2. `parameters` : [DateTimeObject](date_time_object)[] — array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.


## Document
### Example
```js
{
    "type": "body",
    "parameters":
    [ {
        "type": "document",
        "image":
        {
            "link": new URL( "https://www.example.com/DOCUMENT.PDF" ).href
        }
    } ]
}
```

### Properties
1. `type` : "header", "body" — type of component, can be either *header* or *body*. Text-based templates only support the type=body and only text components.
2. `parameters` : [DocumentMediaObject](DocumentMediaObject)[] — array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.


## Image
### Example
```js
{
    "type": "body",
    "parameters":
    [ {
        "type": "image",
        "image":
        {
            "link": new URL( "https://www.example.com/IMAGE.PNG" ).href
        }
    } ]
}
```

### Properties
1. `type` : "header", "body" — type of component, can be either *header* or *body*. Text-based templates only support the type=body and only text components.
2. `parameters` : [ImageMediaObject](ImageMediaObject)[] — array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.

## Text
### Example
```json
{
    "type": "body",
    "parameters":
    [ {
        "type": "text",
        "text": "TEXT_STRING"
    } ]
}
```

### Properties
1. `type` : "header", "body" — type of component, can be either *header* or *body*. Text-based templates only support the type=body.
2. `parameters` : [TextObject](TextObject)[] — array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.

## Video
### Example
```js
{
    "type": "body",
    "parameters":
    [ {
        "type": "video",
        "image":
        {
            "link": new URL( "https://www.example.com/VIDEO.MP4" ).href
        }
    } ]
}
```

### Properties
1. `type` : "header", "body" — type of component, can be either *header* or *body*. Text-based templates only support the type=body and only text components.
2. `parameters` : [VideoMediaObject](VideoMediaObject)[] — array of parameter objects with the content of the message. Array can contain a mix of different component parameter types.
