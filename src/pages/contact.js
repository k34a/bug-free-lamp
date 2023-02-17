import ContactUs from '@/components/ContactUs'
import FAQ from '@/components/FAQ'
import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact us - Larry Rowbs Foundation</title>
                <meta name="description" content="Get in touch. Have a question? Send us a note using the form below and someone from the Larry Rowbs Foundation team will be in touch soon." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <FAQ />
                <ContactUs />
                <SubscribeNewsletter />
            </main>
        </>
    )
}
