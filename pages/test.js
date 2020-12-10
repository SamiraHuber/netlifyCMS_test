import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/test.md';

export default class Test extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          WOW!
        </article>
      </>
    )
  }
}