import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import Solutions from '../components/solutions'

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
        <Container>
        <Header />
rgrgegergerg
<Solutions />

        </Container>
      </Layout>
    </>
  )
}

