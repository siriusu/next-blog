import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Head>
        <title>siriusu blog</title>
      </Head>
      <section className="content-main">
        <p>this is index</p>
        <Link href="/about" as={`/about`}>
          <a>about here</a>
        </Link>
      </section>
    </>
  )
}
