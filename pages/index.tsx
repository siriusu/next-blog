import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'
import Layout from '../components/layout'

export default function Index({ blogs }) {
  return (
    <>
      <Layout>
        <Head>
          <title>siriusu blog</title>
        </Head>
        <Container>
          <section className="content-main text-center">
            <p className="font-bold text-4xl text-gray-500">
              this is index
            </p>
            <Link href="/about" as={`/about`}>
              <a>about here</a>
            </Link>
          </section>
          <h2>blog</h2>
          <div>
            {blogs.map(blog => (
              <Link href="/blogs/[id]" as={`blogs/${blog.id}`} key="${blog.id}">
                <a>
                  <h3>{blog.title}</h3>
                </a>
              </Link>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://siriusu-blog.microcms.io/api/v1/blogs/`,
    { headers: { 'X-API-KEY': process.env.API_KEY } }
  )
  const data = await res.json()

  return {
    props: {
      blogs: data.contents
    }
  }
}
