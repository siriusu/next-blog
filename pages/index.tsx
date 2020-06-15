import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import React from 'react'

const Index: NextPage = ({ blogs }) => {
  return (
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
        <h2>blog</h2>
        <div>
          {blogs.map(blog => (
            <React.Fragment>
              <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                <a>
                  <h3>{blog.title}</h3>
                </a>
              </Link>
              {blog.tags.map(tag => (
                <React.Fragment key={tag.id}>
                  <span>{tag.name}</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  }
  const res = await fetch(
    `https://siriusu-blog.microcms.io/api/v1/blogs/`,
    key
  )
  const data = await res.json()

  return {
    props: {
      blogs: data.contents
    }
  }
}
export default Index
