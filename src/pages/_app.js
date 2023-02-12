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
