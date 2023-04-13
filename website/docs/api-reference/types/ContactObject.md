---
id: ContactObject
title: ContactObject
---

# Contact Object
The object required for sharing contact(s) information.

## Example
```js
[ {
    "addresses": [ {
        "street": "STREET",
        "city": "CITY",
        "state": "STATE",
        "zip": "ZIP",
        "country": "COUNTRY",
        "country_code": "COUNTRY_CODE",
        "type": "HOME"
    } ],
    "birthday": "1911-01-11",
    "emails": [ {
        "email": "EMAIL@EXAMPLE.COM",
        "type": "WORK"
    } ],
    "name": {
        "formatted_name": "NAME",
        "first_name": "FIRST_NAME",
        "last_name": "LAST_NAME",
        "middle_name": "MIDDLE_NAME",
        "suffix": "SUFFIX",
        "prefix": "PREFIX"
    },
    "org": {
        "company": "COMPANY",
        "department": "DEPARTMENT",
        "title": "TITLE"
    },
    "phones": [ {
        "phone": "PHONE_NUMBER",
        "type": "HOME"
    },
    {
        "phone": "PHONE_NUMBER",
        "type": "WORK",
        "wa_id": "PHONE_OR_WA_ID"
    } ],
    "urls": [ {
        "url": new URL( "https://wwww.example.com" ).href,
        "type": "WORK"
    } ]
} ]
```

## Properties
1. `addresses` : [AddressesObject](addresses_object)[] (optional) — array of the contact's addresses.
2. `birthday` : string (optional) — birthday in YYYY-MM-DD format.
3. `emails` : [EmailObject](EmailObject)[] (optional) — array of the contact's emails.
4. `name` : [NameObject](NameObject) — contact's name.
5. `org` : [OrgObject](OrgObject) (optional) — the contact's organization.
6. `phones` : [PhoneObject](PhoneObject)[] (optional) — array of the contact's phone numbers.
7. `urls`[] : [URLObject](URLObject)[] (optional) — array of the contact's URLs.
