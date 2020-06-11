import App, { AppProps, Container } from 'next/app'
import { Component } from 'react'

export const config = { amp: true }
export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}
