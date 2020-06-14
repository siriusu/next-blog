import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

const Index: NextPage = props => (
  <>
    <Layout>
      <Head>
        <title>siriusu blog</title>
      </Head>
      <section className="content-main text-center">
        <p className="font-bold text-4xl text-gray-500">
          this is index
        </p>
        <Link href="/about" as={`/about`}>
          <a>about here</a>
        </Link>
      </section>
    </Layout>
  </>
)
export default Index
