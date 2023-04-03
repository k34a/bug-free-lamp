import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import Header from '@/components/StructuralComponents/Header'
import Footer from '@/components/StructuralComponents/Footer'
import NextNProgress from 'nextjs-progressbar';
import Script from 'next/script';
import { useState } from 'react';
import CookieConsent from '@/components/StructuralComponents/CookieConsent';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <NextNProgress options={{ showSpinner: false }} />
      <main className={`${poppins.className} h-screen`}>
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <div 
          className='absolute right-0 top-0 w-full pt-16 sm:pt-0 sm:pl-16'
          onClick={(e) => setIsMenuOpen(false)}
        >
          <CookieConsent />
          <Component {...pageProps} />
          <Footer />
        </div>
      </main>
    </>
  )
}
