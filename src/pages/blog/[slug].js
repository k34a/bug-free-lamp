import Head from 'next/head'
import ReactMarkdown from "react-markdown"
import styles from '@/styles/BlogArticle.module.css'
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import { addAltTextToImages, generateSlug, getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';
import Share from '@/components/Blog/Share';
import useDarkMode from '@/lib/useDarkMode';
import rehypeSlug from 'rehype-slug';
import Toc from "react-toc";
import { para } from '@/components/Markdown';
import Tags from '@/components/Blog/Tags';

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
    post.markdown = addAltTextToImages(post.markdown, post.metadata.title);
    const matchers = { "[?!:.*_]": "" }
    return (
        <div className="bg-white dark:bg-slate-600 dark:text-white">
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
            <main className={`py-16 ${styles.article} prose mx-auto w-4/5 md:w-3/5 lg:w-1/2 dark:prose-invert`}>
                <section>
                    <h1 className='text-4xl dark:text-white'>{post.metadata.title}</h1>
                    <div className='pb-5'>
                        <span className='bg-green-200 text-green-700 py-2 px-3 mr-2 rounded-full font-bold'>
                            {post.metadata.author[0]}
                        </span>
                        <a href={post.metadata.authorHref} target="_blank" rel="noopener noreferrer">
                                {post.metadata.author}
                        </a>
                        <span className='italic dark:text-slate-300'> • {post.metadata.date}</span>
                    </div>
                    <Tags tags={post.metadata.tags} />
                    <div className='border-solid border-4 px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300'>
                        <h2>Table of Content</h2>
                        <Toc markdownText={post.markdown} className="dark:text-slate-300" customMatchers={matchers}/>
                    </div>
                    <ReactMarkdown
                        remarkPlugins={[rehypeSlug]}
                        components={{
                            h2: ({ node, ...props }) => (
                                <h2 id={generateSlug(props.children[0])} {...props}></h2>
                            ),
                            h3: ({ node, ...props }) => (
                                <h3 id={generateSlug(props.children[0])} {...props}></h3>
                            ),
                            p: para
                        }}
                        >{post.markdown}
                    </ReactMarkdown>
                </section>
                <Share slug={slug} title={post.metadata.title}/>
            </main>
            <SubscribeNewsletter />
        </div>
    )
}
