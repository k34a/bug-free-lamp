import JoinUs from '@/components/JoinUs'
import OurTeam from '@/components/OurTeam'
import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import Head from 'next/head'

export default function Join() {
    return (
        <>
            <Head>
                <title>Join us - Larry Rowbs Foundation</title>
                <meta name="description" content="The members of the Larry Rowbs Foundation are guided by their core values, which emphasize community, collaboration, and love. ... Join our Family." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <JoinUs />
                <OurTeam />
                <SubscribeNewsletter />
            </main>
        </>
    )
}
