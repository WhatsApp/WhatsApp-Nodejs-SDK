---
id: addresses_object
title: AddressesObject
---

# Addresses Object
The object describing an address of a contact.

## Example
```json
{
  "street": "STREET",
  "city": "CITY",
  "state": "STATE",
  "zip": "ZIP",
  "country": "COUNTRY",
  "country_code": "COUNTRY_CODE",
  "type": "HOME"
}
```

## Properties
1. `street` : string (optional) — street address.
2. `city` : string (optional) — city of the address.
3. `state` : string (optional) — state or province.
4. `zip` : string (optional) — zip code.
5. `country` : string (optional) — country name.
6. `country_code` : string (optional) — 2-letter ISO 3166 country code.
7. `type` : "HOME", "WORK" or string (optional) — the type of address which can be standard types of *HOME* or *WORK*.
