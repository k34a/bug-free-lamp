import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';

import ReactMarkdown from "react-markdown"
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm'

import Share from '@/components/Blog/Pages/Share';
import componentMapping from '@/components/Blog/Pages/Markdown';
import SelectedTextMenu from '@/components/Blog/Pages/SelectedTextMenu';
import DarkMode from '@/components/Blog/Pages/DarkMode';
import MetaData from '@/components/Blog/Pages/MetaData';
import ReadMore from '@/components/Blog/Pages/ReadMore';
import { calculateReadingTime } from "markdown-reading-time";

import styles from '@/styles/BlogArticle.module.css'
import YourSupportIsAllWeNeed from '@/components/Blog/Pages/YourSupportIsAllWeNeed';
import TableOfContents from '@/components/Blog/Pages/TableOfContents';
import blogArticles from '@/blogdata';

export async function getStaticPaths(context) {
    const posts = blogArticles;
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    try {
        const posts = blogArticles;
        const postIndex = posts.findIndex(p => p.slug === params.slug);
        if (postIndex == -1) {
            return {
                notFound: true,
            }
        }
        const post = posts[postIndex];
        const { minutes } = calculateReadingTime(post.content, {
            wordsPerMinute: 200,
        });
        return {
            props: {
                post: {
                    ...post,
                    minutes,
                    readMoreArticles: [],
                },
                slug: params.slug
            },
            revalidate: 120
        };
    }
    catch (err) {
        console.log(err);
        return {
            notFound: true,
        }
    }
}

export default function BlogPost({ post, slug }) {
    const mainBody = useRef(null);
    const startingMainContent = useRef();
    const shareButtons = useRef();
    const [selectedText, setSelectedText] = useState("");
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [isCopied, setIsCopied] = useState(false);
    const keywordsString = post.seoKeywords.join(", ") || "";

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
            if (y > lowerLimit - 20 && y < upperLimit) {
                setTooltipPosition({ x, y });
            }
            else {
                setTooltipPosition({ x: 0, y: 0 })
            }
            setSelectedText(currSelectedText);
        } else {
            setSelectedText("");
        }
    }

    useEffect(() => {
        if (document) {
            document.addEventListener('selectionchange', handleTextSelection);
        }
        return () => {
            if (document) {
                document.removeEventListener("selectionchange", handleTextSelection);
            }
        };
    }, []);

    return (
        <div className="bg-white dark:bg-slate-800 dark:text-white selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white">
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={keywordsString} />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:image" content={post.imageThumbnail} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1024" />
            </Head>
            <DarkMode />
            <main
                ref={mainBody}
                className='py-16 space-y-6'
            >
                <div className='flex w-full divide-x'>
                    <div className='md:w-2/3 h-full'>
                        <div className={`${styles.article} break-words prose prose-lg mx-auto w-11/12 dark:prose-invert md:col-span-2`}>
                            <section>
                                <MetaData post={post} />
                                <div ref={startingMainContent}>
                                    <ReactMarkdown
                                        remarkPlugins={[rehypeSlug, remarkGfm]}
                                        components={componentMapping}
                                    >{post.content}
                                    </ReactMarkdown>
                                </div>
                                {selectedText && <SelectedTextMenu selectedText={selectedText} tooltipPosition={tooltipPosition} setIsCopied={setIsCopied} />}
                                <div className='italics text-sm font-light'>
                                    DISCLAIMER: The author assumes full responsibility for the content and perspectives presented in this article, including proper citation and licensing of any images incorporated. All sources referenced in this article are the author&apos;s sole responsibility.
                                </div>
                            </section>
                            <div ref={shareButtons}>
                                <Share slug={slug} title={post.title} />
                            </div>
                            {isCopied && <div className='bg-black text-white dark:text-black dark:bg-slate-200 p-2 text-sm rounded-lg fixed bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2'>Copied</div>}
                        </div>
                    </div>
                    <div className='hidden md:block md:w-1/3 h-full sticky top-0 right-0'>
                        <TableOfContents tocMarkdown={post.content} />
                    </div>
                </div>
                <YourSupportIsAllWeNeed />
                <ReadMore
                    readMoreArticles={post.readMoreArticles}
                    className='prose-normal'
                    theme="light"
                    enableDarkMode={true}
                />
            </main>
        </div>
    )
}
