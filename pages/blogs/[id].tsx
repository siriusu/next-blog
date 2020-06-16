const BlogId = ({ blog }) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <div className="flex-1">
        {blog.tags.map(tag => (
          <div className="inline-block bg-yellow-300 rounded-lg px-2 py-1 text-xs font-semibold text-gray-700 mr-2" key={tag.id}>
            <span>{tag.name}</span>
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://siriusu-blog.microcms.io/api/v1/blogs/`,
    { headers: { 'X-API-KEY': process.env.API_KEY } }
  )
  const blogs = await res.json()
  const paths = blogs.contents.map(blog => `/blogs/${blog.title}`)

  return { paths, fallback: false }
}

export const getStaticProps = async context => {
  const id = context.params.id
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  }

  const res = await fetch(
    `https://siriusu-blog.microcms.io/api/v1/blogs/${id}`,
    key
  )
  const blog = await res.json()

  return {
    props: {
      blog: blog
    }
  }
}

export default BlogId
