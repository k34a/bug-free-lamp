import Head from 'next/head'
import ReactMarkdown from "react-markdown"
import styles from '@/styles/BlogArticle.module.css'
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import { getAllPublished, getSingleBlogPostBySlug } from '../lib/notion';

export async function getStaticPaths(context) {
    const posts = await getAllPublished();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({params}) {
    const post = await getSingleBlogPostBySlug(params.slug)
    return {
        props: {
            post,
        },
        revalidate: 60
    };
}

export default function BlogPost({post}) {
    return (
        <div className="bg-white">
            <Head>
                <title>{post.metadata.title}</title>
                <meta name="description" content={post.metadata.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`py-16 ${styles.article} prose mx-auto w-4/5 md:w-3/5 lg:w-1/2`}>
                <section>
                    <h2>{post.metadata.title}</h2>
                    <span>{post.metadata.date}</span>
                    <ReactMarkdown>{post.markdown}</ReactMarkdown>
                </section>
            </main>
            <SubscribeNewsletter />
        </div>
    )
}
