import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import Header from '@/components/StructuralComponents/Header'
import Footer from '@/components/StructuralComponents/Footer'
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
        src="https://www.googletagmanager.com/gtag/js?id=G-CL7HRH1ZH9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CL7HRH1ZH9');
        `}
      </Script>
      <NextNProgress />
      <main className={poppins.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
