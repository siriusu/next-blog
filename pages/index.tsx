import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
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
    </>
  )
}
