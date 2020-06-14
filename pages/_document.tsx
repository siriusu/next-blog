import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            key="viewport"
          />
          <meta name="description" content="" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="" />
          <meta name="og:description" property="og:description" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="" />
          <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
          <meta name="twitter:image" content="" />
          <link rel="canonical" href="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
