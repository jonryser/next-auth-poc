import Layout from '../components/layout'

export default function IndexPage() {
  return (
    <Layout>
      <h1>NextAuth Proof of Concept</h1>
      <p>
        This is an example site to demonstrate how to use{' '}
        <a href="https://next-auth.js.org">NextAuth.js</a> and <a href="https://www.keycloak.org/">Keycloak</a> for authentication.
      </p>
    </Layout>
  )
}
