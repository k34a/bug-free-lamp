import Head from 'next/head'
import ReactMarkdown from "react-markdown"
import styles from '@/styles/BlogArticle.module.css'
import SubscribeNewsletter from '@/components/Forms/SubscribeNewsletter';
import { addAltTextToImages, getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';
import Share from '@/components/Blog/Pages/Share';
import rehypeSlug from 'rehype-slug';
import componentMapping from '@/components/Blog/Pages/Markdown';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SelectedTextMenu from '@/components/Blog/Pages/SelectedTextMenu';
import DarkMode from '@/components/Blog/Pages/DarkMode';
import MetaData from '@/components/Blog/Pages/MetaData';
import ReadMore from '@/components/Blog/Pages/ReadMore';

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
            revalidate: 120
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
    const mainBody = useRef(null);
    const startingMainContent = useRef();
    const shareButtons = useRef();
    const [selectedText, setSelectedText] = useState("");
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    function handleTextSelection() {
        const lowerLimit = startingMainContent.current.offsetTop;
        const upperLimit = shareButtons.current.offsetTop;
        const currSelection = document.getSelection();
        const currSelectedText = currSelection.toString();
        if (currSelectedText) {
            const range = currSelection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = document.documentElement.scrollTop + rect.top - 10;
            if (y > lowerLimit - 20 && y < upperLimit){
                setTooltipPosition({x, y});
            }
            else{
                setTooltipPosition({ x : 0, y : 0 })
            }
            setSelectedText(currSelectedText);
        } else {
            setSelectedText("");
        }
    }

    useEffect(() => {
        if (document){
            document.addEventListener('selectionchange', handleTextSelection);
        }
        return () => {
            if (document) {
                document.removeEventListener("selectionchange", handleTextSelection);
            }
        };
    }, []);

    return (
        <div className="bg-white dark:bg-slate-700 dark:text-white selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white">
            <Head>
                <title>{post.metadata.title}</title>
                <meta name="description" content={post.metadata.description} />
            </Head>
            <DarkMode />
            <main
                ref={mainBody} 
                className={`py-16 ${styles.article} break-words prose prose-lg mx-auto w-11/12 md:w-3/4 lg:w-1/2 dark:prose-invert`}
            >
                <div className='mb-6'>
                    <Link href='/blog' className='hover:-mx-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-arrow-left mr-2 align-middle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        All Articles
                    </Link>
                </div>
                <section>
                    <MetaData post={post}/>
                    <div ref={startingMainContent}>
                        <ReactMarkdown
                            remarkPlugins={[rehypeSlug]}
                            components={componentMapping}
                            >{post.markdown}
                        </ReactMarkdown>
                    </div>
                    {selectedText && <SelectedTextMenu selectedText={selectedText} tooltipPosition={tooltipPosition} /> }
                </section>
                <div ref={shareButtons}>
                    <Share slug={slug} title={post.metadata.title}/>
                </div>
                <ReadMore readMoreArticles={post.readMoreArticles} className='prose-normal'/>
            </main>
            <SubscribeNewsletter />
        </div>
    )
}
