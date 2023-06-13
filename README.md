# NextAuth/Keycloak Accelerator

<p align="center">
   <a href="https://authjs.dev" target="_blank">
   <img height="64" src="https://authjs.dev/img/logo/logo-sm.png" />
   </a>
   <a href="https://nextjs.org" target="_blank">
   <img height="64" src="https://nextjs.org/static/favicon/android-chrome-192x192.png" />
   </a>
   <p align="center" style="align: center;">
      <a href="https://npm.im/next-auth">
        <img alt="next-auth on npm" src="https://img.shields.io/npm/v/next-auth?color=green&label=next-auth&style=flat-square">
      </a>
      <a href="https://bundlephobia.com/result?p=next-auth-example">
      <a href="https://npm.im/next-auth">
        <img src="https://img.shields.io/badge/TypeScript-blue?style=flat-square" alt="TypeScript" />
      </a>
   </p>
</p>

## Overview

This is an example application that shows how `next-auth` is applied to a basic Next.js app with [Keycloak](https://www.keycloak.org/).

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation on NextAuth.

## Clone the repository and install dependencies

```sh
git clone https://github.com/jonryser/next-auth-poc.git
cd next-auth-poc
yarn
```

## Keycloak

[Keycloak](https://www.keycloak.org/)

### Configure KeyCloak

Use the [Keycloak Accelerator](https://github.com/generalui/keycloak-accelerator) to get the Keycloak server setup.

Install the startup realm that is included with the Keycloak accelerator.

Once the Keycloak server is running and the startup ("NextAuth POC") realm is installed
    - switch to the "NextAuth POC" realm
    - go to `Realm settings -> Email`
    - update the `Connection & Authentication` values to working email settings

## Configure the local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```sh
cp .env.local.example .env.local
```

Update the Keycloak env vars:

```.env
KEYCLOAK_AUTHORIZATION=http://localhost:8180/realms/NextAuth_POC/protocol/openid-connect/auth
KEYCLOAK_CLIENT_ID=next-auth-poc
# The client secret can be any value
KEYCLOAK_CLIENT_SECRET=5ghC0E06conPaarRPQGId7VonTWIsq0u
KEYCLOAK_ISSUER=http://localhost:8180/realms/NextAuth_POC
KEYCLOAK_WELLKNOWN=http://localhost:8180/realms/NextAuth_POC/.well-known/openid-configuration
```

## Start the application

To run your site locally, use:

```sh
yarn dev
```

To run it in production mode, use:

```sh
yarn build
yarn start
```

## Preparing for Production

Follow the [Deployment documentation](https://authjs.dev/guides/basics/deployment) or deploy the example instantly using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-auth-example)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/nextauthjs/next-auth-example&project-name=next-auth-example&repository-name=next-auth-example)

## Acknowledgements

Built off the original [next-auth-example](https://github.com/nextauthjs/next-auth-example.git) repo at <https://github.com/nextauthjs/next-auth-example.git>
