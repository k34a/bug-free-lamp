import Head from 'next/head'
import ReactMarkdown from "react-markdown"
import styles from '@/styles/BlogArticle.module.css'
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import { addAltTextToImages, getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';
import Share from '@/components/Blog/Share';

export async function getStaticPaths(context) {
    const posts = await getAllPublished();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({params}) {
    try{
        const post = await getSingleBlogPostBySlug(params.slug)
        return {
            props: {
                post,
                slug: params.slug
            },
            revalidate: 60
        };
    }
    catch(err){
        console.log(err.message);
        return {
            notFound: true,
        }
    }
}

export default function BlogPost({post, slug}) {
    post.markdown = addAltTextToImages(post.markdown, post.metadata.title);
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
                    <h1 className='text-4xl'>{post.metadata.title}</h1>
                    <span className='italic'>{post.metadata.date}</span>
                    <ReactMarkdown>{post.markdown}</ReactMarkdown>
                </section>
                <Share slug={slug} title={post.metadata.title}/>
            </main>
            <SubscribeNewsletter />
        </div>
    )
}
