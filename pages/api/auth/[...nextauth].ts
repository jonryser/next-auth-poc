import NextAuth, { Awaitable, NextAuthOptions, RequestInternal, User } from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GithubProvider from 'next-auth/providers/github'
// import TwitterProvider from 'next-auth/providers/twitter'
// import Auth0Provider from 'next-auth/providers/auth0'
import KeycloakProvider from 'next-auth/providers/keycloak'
import CredentialsProvider, { CredentialInput } from 'next-auth/providers/credentials'

interface Creds {
    email: string
    password: string
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    KeycloakProvider({
        authorization: process.env.KEYCLOAK_AUTHORIZATION ?? '',
        clientId: process.env.KEYCLOAK_CLIENT_ID ?? '',
        clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? '',
        issuer: process.env.KEYCLOAK_ISSUER ?? '',
        wellKnown: process.env.KEYCLOAK_WELLKNOWN ?? '',
    })
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID,
    //   clientSecret: process.env.AUTH0_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    //   version: "2.0",
    // }),
    // CredentialsProvider({
    //     // The name to display on the sign in form (e.g. 'Sign in with...')
    //     name: 'Credentials',
    //     // The credentials is used to generate a suitable form on the sign in page.
    //     // You can specify whatever fields you are expecting to be submitted.
    //     // e.g. domain, username, password, 2FA token, etc.
    //     credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: {  label: "Password", type: "password" }
    //     },
    //     async authorize(credentials: Creds, req: Request) {
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either a object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     // You can also use the `req` object to obtain additional parameters
    //     // (i.e., the request IP address)
    //     const res = await fetch("/your/endpoint", {
    //         method: 'POST',
    //         body: JSON.stringify(credentials),
    //         headers: { "Content-Type": "application/json" }
    //     })
    //     const user = await res.json()

    //     // If no error and we have user data, return it
    //     if (res.ok && user) {
    //         return user
    //     }
    //     // Return null if user data could not be retrieved
    //     return null
    //     }
    // }),
    // CredentialsProvider({
    //     type: 'credentials',
    //     credentials: {},
    //     authorize(credentials: Record<string, string> | undefined, req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>): Awaitable<User | null> {
    //       const {email, password} = credentials as Record<string, string>
    //       // validate here your username and password
    //       if(email !== 'test@email.com' && password !== 'plokij') {
    //         throw new Error('invalid credentials');
    //       }
    //       // confirmed users
    //       return {id: '1', name: 'Tester', email: 'test@email.com'}
    //     }
    //   }),
  ],
//   callbacks: {
//     async jwt({token}) {
//       token.userRole = 'admin'
//       return token
//     },
//   },
}

export default NextAuth(authOptions)
