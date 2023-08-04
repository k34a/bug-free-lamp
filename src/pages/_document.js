import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src='https://embed.tawk.to/64ccd7b6cc26a871b02d3b56/1h702l8it' strategy="lazyOnload" />
        <meta name="google-site-verification" content="KyGlTO_S7Lg70l1jUDsUImlqZvPCdStcxP44VZwMlSE" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </body>
    </Html>
  )
}
