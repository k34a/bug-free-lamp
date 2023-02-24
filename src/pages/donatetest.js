import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import { checkout } from '@/lib/donationCheckout'
import Head from 'next/head'

export default function Donate() {
    return (
        <>
            <Head>
                <title>Donate - Larry Rowbs Foundation</title>
                <meta name="description" content="Get in touch. Have a question? Send us a note using the form below and someone from the Larry Rowbs Foundation team will be in touch soon." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <button className="bg-green-300 justify-center p-2 m-12 rounded " onClick={()=>{
                    checkout({
                        lineItems: [
                            { 
                                price: 'price_1Mf0WxKJJdoPmWsJZ48Tt6AO',
                                quantity: 1 
                            }]
                    })
                }}>Donate</button>
                <SubscribeNewsletter />
            </main>
        </>
    )
}
