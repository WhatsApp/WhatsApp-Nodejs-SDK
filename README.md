<!-- Copyright (c) Meta Platforms, Inc. and affiliates.
All rights reserved.

This source code is licensed under the license found in the
LICENSE file in the root directory of this source tree.
-->

# WhatsApp Business Platform Node.js SDK for the Cloud API, hosted by Meta
<p align="center">
<img src="./website/static/img/wa_logo-216px.svg" width="216" alt="WhatsApp Logo" />
</p>

Welcome to SDK for the [WhatsApp Business Platform](https://business.whatsapp.com/products/business-platform/). This SDK is written for Node.js framework to simplify access to the [Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/). The source code itself is written in Typescript with TypeScript declaration files to type-check usage of the WhatsApp Business Platform Node.js SDK in your code, along with hints and code completion in TypeScript compatible IDEs.

[![lint, prettify, spellcheck, test, and build](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/actions/workflows/nodejs.ci.yml/badge.svg)](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/blob/main/.github/workflows/nodejs.ci.yml)
[![generate docs](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/actions/workflows/docusaurus.yml/badge.svg)](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/blob/main/.github/workflows/docusaurus.yml)

## Getting started
View the [quick start documentation](https://whatsapp.github.io/WhatsApp-Nodejs-SDK/) to learn how to use the SDK and get started.

## Installation
Install the WhatsApp Business Platform SDK using yarn:

```shell
yarn add whatsapp
```

Or npm:

```shell
npm install whatsapp
```

## Configuration
The SDK uses environmental variables for setting all the configuration. For development purposes, you can use a **.env** file at the root of your project. Below are all the possible options for the SDK configuration and only some are required for certain features.

```shell
# The base URL to send all SDK requests to (default graph.facebook.com).
# This variable should not be used unless necessary for development or special routing needs.
WA_BASE_URL=

# Your Meta for Developers app Id.
M4D_APP_ID=

# Your Meta for Developers Business app secret.
M4D_APP_SECRET=

# Your WhatsApp phone number Id (sender).
WA_PHONE_NUMBER_ID=

# Your WhatsApp business account Id.
WA_BUSINESS_ACCOUNT_ID=

# System user access token. Recommended: Do not use a temporary access token.
CLOUD_API_ACCESS_TOKEN=

# Cloud API version number.
CLOUD_API_VERSION=v16.0

# Customize your incoming webhook listener endpoint. Path should be
# https://{host}/{WEBHOOK_ENDPOINT}. A trailing slash is not added by default,
# so the variable should include that if it's required by your API gateway.
WEBHOOK_ENDPOINT=

# A custom verification token string to validate incoming webhook payloads.
# Needs to match webhook configuration.
WEBHOOK_VERIFICATION_TOKEN=

# Override the default app listener port (port 3000).
LISTENER_PORT=

# Turn on global debug logging
DEBUG=

# The number of request retries after waiting (default 30 retries)
MAX_RETRIES_AFTER_WAIT=

# The timeout period in milliseconds for a request to wait for a response (default 20000ms)
REQUEST_TIMEOUT=
```

## Code of Conduct
Meta has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Contribute
See the [CONTRIBUTING](CONTRIBUTING.md) file for our development process, how to propose bugfixes and improvements, and how to build and test your changes to the WhatsApp Business Platform Node.js SDK.

## License
The WhatsApp Business Platform Node.js SDK for the Cloud API is Meta Platforms licensed, as found in the LICENSE file.
