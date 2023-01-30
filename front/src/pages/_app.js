import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
