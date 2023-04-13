---
id: projectSetup
title: Project setup
---

# Set up your Node.js Project
Learn the basics for setting up the WhatsApp Business Platform SDK for your Node.js project and important details about the SDK.

## Start a new project
If you new to using the WhatsApp Business Platform Node.js SDK, first follow the provided [quickstart](/) for steps to send your first message and perform basic project setup and configuration.

### Installation
You can quickly install the WhatsApp Business Platform Node.js SDK as follows:

```shell
npm install whatsapp
```

:::note
This SDK is for server-side with Node.js only. It does not support web browser or frontend applications.
:::

### Development
The SDK assumes you are in development mode by default. The logger can be enabled globally in the WhatsApp Business Platform Node.js SDK by setting a **DEBUG** ( or **process.env.DEBUG**) environmental variable to `true`.

:::warning
Enabling the logger can log user information, secrets, and other secure information.
:::

### Production
A production system (where `NODE_ENV=production`), does not read from a *.env* file. This is to protect the security posture of having tokens being stored in accessible a file system. The environmental variables need to exist to the application before the WhatsApp class is instantiated.

:::info

### TypeScript support
The WhatsApp Business Platform Node.js SDK supports TypeScript with TypeScript declaration files for WhatsApp Business Platform APIs. These files help you type-check usage of the WhatsApp Business Platform Node.js SDK in your code, along with hints and code completion in TypeScript compatible IDEs.
:::
