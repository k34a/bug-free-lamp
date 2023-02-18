import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import Head from 'next/head'

export default function walkWithTravis() {
    <>
        <Head>
            <title>Walk with Travis - Larry Rowbs Foundation</title>
            <meta name="description" content="Travis (Co-founder of the Larry Rowbs Foundation) will be walking for 20,000 miles to support the fashion industry from exploiting its workers and environment. Learn more." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <SubscribeNewsletter />
        </main>
    </>
};
