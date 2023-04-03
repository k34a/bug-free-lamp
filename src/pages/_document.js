import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="KyGlTO_S7Lg70l1jUDsUImlqZvPCdStcxP44VZwMlSE" />
        <meta name="theme-color" content="#b700ff" />
        <meta name="msapplication-navbutton-color" content="#b700ff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#b700ff" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8692166760702368"
          crossorigin="anonymous"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </body>
    </Html>
  )
}
