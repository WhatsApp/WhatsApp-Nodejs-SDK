---
id: WAConfigType
title: WAConfigType
---

# SDK Configuration Type
This is the object that is used to configure each of the sub-classes of the SDK.

## Example
```json
{
    "wa_base_url" : "https://graph.facebook.com/",
    "m4d_app_id" : 12345,
    "m4d_app_secret" : "example_app_secret_123",
    "wa_phone_number_id" : 0987654321,
    "wa_business_account_id" : 1234567890,
    "cloud_api_version" : "v16",
    "cloud_api_access_token" : "example_access_token_123",
    "webhook_endpoint" : "webhook",
    "webhook_verification_token" : "1234567890abcd",
    "listener_port" : 3000,
    "max_retries_after_wait" : 30,
    "request_timeout" : 20000,
    "debug" : true
}
```

## Properties
1. `wa_base_url` : string —
2. `m4d_app_id`: number -
3. `m4d_app_secret` : string -
4. `wa_phone_number_id` : number -
5. `wa_business_account_id` : number -
6. `cloud_api_version` : string -
7. `cloud_api_access_token` : string -
8. `webhook_endpoint` : string -
9. `webhook_verification_token` : string -
10. `listener_port` : number -
11. `max_retries_after_wait` : number -
12. `request_timeout` : number -
13. `debug` : boolean -
