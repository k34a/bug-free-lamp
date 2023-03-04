import Head from 'next/head'
import ReactMarkdown from "react-markdown"
import styles from '@/styles/BlogArticle.module.css'
import SubscribeNewsletter from '@/components/Forms/SubscribeNewsletter';
import { addAltTextToImages, getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';
import Share from '@/components/Blog/Share';
import useDarkMode from '@/lib/useDarkMode';
import rehypeSlug from 'rehype-slug';
import Toc from "react-toc";
import { aMd, h2Md, h3Md, para } from '@/components/Blog/Markdown';
import Tags from '@/components/Blog/Tags';
import { calculateReadingTime } from 'markdown-reading-time';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
    const [colorTheme, setTheme] = useDarkMode();
    const toggleTheme = (e)=>{
        setTheme((t) => {
            if (e.target.value==="dark") return "light";
            else return "dark";
        })
    }
    const { minutes } = calculateReadingTime(post.markdown);
    post.markdown = addAltTextToImages(post.markdown, post.metadata.title);
    const matchers = { "[?!:.*_/]": "" }

    const mainBody = useRef(null);
    const startingMainContent = useRef();
    const shareButtons = useRef();
    const [selectedText, setSelectedText] = useState("");
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    function handleMouseUp() {
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

    function handleCopyClick() {
        navigator.clipboard.writeText(selectedText || "")
    }

    function handleTweetClick() {
        const tweetText = encodeURIComponent(selectedText);
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(tweetUrl, "_blank");
    }

    useEffect(() => {
        if (document){
            document.addEventListener('selectionchange', handleMouseUp);
        }
        return () => {
            if (document) {
                document.removeEventListener("selectionchange", handleMouseUp);
            }
        };
    }, []);

    return (
        <div className="bg-white dark:bg-slate-700 dark:text-white selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white">
            <Head>
                <title>{post.metadata.title}</title>
                <meta name="description" content={post.metadata.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex v-screen justify-center items-center pt-12'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        value={colorTheme} 
                        className="sr-only peer" 
                        checked={colorTheme === "dark"} 
                        onClick={toggleTheme} 
                        onChange={(e)=>{}}
                    />
                    <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                    <p>&nbsp;&nbsp;Dark Mode</p>
                </label>
            </div>
            <main
                ref={mainBody} 
                className={`py-16 ${styles.article} prose prose-lg mx-auto w-11/12 md:w-3/4 lg:w-1/2 dark:prose-invert`}
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
                    <h1 className='text-4xl dark:text-white'>{post.metadata.title}</h1>
                    <div className='pb-5'>
                        <span className='select-none bg-green-200 text-green-700 py-2 px-3 mr-2 rounded-full font-bold'>
                            {post.metadata.author[0]}
                        </span>
                        <a href={post.metadata.authorHref} target="_blank" rel="noopener noreferrer">
                                {post.metadata.author}
                        </a>
                    </div>
                    <div className='pb-5 align-middle'>
                        <span className='dark:text-slate-300 mr-6 block md:inline'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-calendar-check" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                            &nbsp;&nbsp;
                            {post.metadata.date}
                        </span>
                        <span className='dark:text-slate-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>
                            &nbsp;&nbsp;
                            {minutes} min read
                        </span>
                    </div>
                    <Tags tags={post.metadata.tags} />
                    <div className='border-solid border-4 px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300'>
                        <h2 className='my-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="inline mr-4 bi bi-justify-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            Table of Content
                        </h2>
                        <Toc markdownText={post.markdown} className="dark:text-slate-300" customMatchers={matchers}/>
                    </div>
                    <div ref={startingMainContent}>
                        <ReactMarkdown
                            remarkPlugins={[rehypeSlug]}
                            components={{
                                h2: h2Md,
                                h3: h3Md,
                                p: para,
                                a: aMd
                            }}
                            >{post.markdown}
                        </ReactMarkdown>
                    </div>
                    {selectedText && (
                        <div
                            className="absolute tooltip z-10 bg-black text-white rounded-md shadow-md p-2 flex justify-center items-center space-x-4"
                            style={{
                                top: tooltipPosition.y,
                                left: tooltipPosition.x,
                                transform: "translate(-50%, -100%)",
                            }}
                        >
                            <button
                                onClick={handleCopyClick}
                                className='hover:opacity-75 active:opacity-25'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
                                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                                </svg>
                            </button>
                            <button
                                onClick={handleTweetClick}
                                className='hover:opacity-75 active:opacity-25'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </button>
                        </div>
                    )}
                </section>
                <div ref={shareButtons}>
                    <Share slug={slug} title={post.metadata.title}/>
                </div>
            </main>
            <SubscribeNewsletter />
        </div>
    )
}
