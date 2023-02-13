import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NextNProgress from 'nextjs-progressbar';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-252820847-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-252820847-1');
        `}
      </Script>
      <NextNProgress />
      <main className={poppins.className}>
        <Script src="/static/script.js" />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
