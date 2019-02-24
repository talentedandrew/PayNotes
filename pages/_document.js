import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import styles from 'styles/base.scss'

// from https://github.com/zeit/next.js/edit/canary/examples/with-react-helmet/pages/_document.js
export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    return (
      <Helmet>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='A perfect place to store your notes'
        />
        <title>{'PayNotes'}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#0070ba' />
        <meta property='og:title' content={'PayNotes'} />
        <link rel='manifest' href='/_next/static/manifest.json' />
        <link rel='icon' href='/static/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans'
          rel='stylesheet'
        />
        <style>{`
            body,html,#__next,.layout {
              width: 100%;
              height: 100%;
              margin: 0;
            }
          `}</style>
      </Helmet>
    )
  }

  render () {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <style jsx>{styles}</style>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
