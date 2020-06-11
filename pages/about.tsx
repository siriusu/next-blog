import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Head>
        <title>siriusu blog</title>
      </Head>
      <section className="content-main">
        <p>this is about</p>
        <Link href="/" as={`/`}>
          <a>main page here</a>
        </Link>
      </section>
    </>
  )
}
