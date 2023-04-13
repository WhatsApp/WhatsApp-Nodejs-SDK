---
id: currency_object
title: CurrencyObject
---

# Currency Object
The object describing currency. This is only provided as a component parameter for a message template.

## Example
```json
{
    "fallback_value": "USD$1.00",
    "code": "USD",
    "amount_1000": 1000
}
```

## Properties
1. `fallback_value` : string — default text if localization fails.
2. `code` : string — 3-character currency code as defined in ISO 4217.
3. `amount_1000` : number — the currency amount multiplied by 1000.
