import BlogList from '@/components/BlogList';
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import Head from 'next/head'
import { getTopPublished } from '../../lib/notion';

export async function getStaticProps(context) {
    const data = await getTopPublished(30)
    return {
        props: {
            posts: data,
        },
        revalidate: 60
    };
}

export default function Home({posts}) {
    if (!posts) return <h1>No posts</h1>
    return (
        <>
            <Head>
                <title>Blog - Larry Rowbs Foundation</title>
                <meta name="description" content="The Larry Rowbs Foundation Blog. Dive into the latest news, updates, and educational content on making fashion sustainable." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <BlogList data={posts}/>
                <SubscribeNewsletter />
            </main>
        </>
    )
}
