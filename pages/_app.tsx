import App from 'next/app'
import { Component } from 'react'
import '../styles/index.css'
import '../styles/global.css'

// export const config = { amp: true }
export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}
