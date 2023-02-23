import Head from 'next/head'
import ReactMarkdown from "react-markdown"
import styles from '@/styles/BlogArticle.module.css'
import SubscribeNewsletter from '@/components/SubscribeNewsletter';
import { addAltTextToImages, generateSlug, getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';
import Share from '@/components/Blog/Share';
import useDarkMode from '@/lib/useDarkMode';
import rehypeSlug from 'rehype-slug';
import Toc from "react-toc";

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

function ImageRenderer(props) {
    const imageSrc = props.src;
    const altText = props.alt;
    return (
        <figure className="wp-block-image size-large is-resized">
            <center>
                <img
                    data-loading="lazy"
                    data-orig-file={imageSrc}
                    data-orig-size="1248,533"
                    data-comments-opened="1"
                    data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                    data-image-title="builtin_vs_dotnetwarp"
                    data-image-description=""
                    data-medium-file={imageSrc + "?w=300"}
                    data-large-file={imageSrc + "?w=750"}
                    src={imageSrc + "?w=10241"}
                    alt={altText}
                    srcSet={imageSrc + "?w=1024 1024w, " + imageSrc + "?w=705 705w, " + imageSrc + "?w=150 150w, " + imageSrc + "?w=300 300w, " + imageSrc + "?w=768 768w, " + imageSrc + "?1248w"}
                    sizes="(max-width: 707px) 100vw, 707px" />
                <figcaption style={{ textAlign: "center" }}>{altText}</figcaption>
            </center>
        </figure>
    );
}

export default function BlogPost({post, slug}) {
    const [colorTheme, setTheme] = useDarkMode();
    const toggleTheme = ()=>{
        setTheme((t) => {
            if (t=="dark") return "light";
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
                    <input type="checkbox" value="" className="sr-only peer" checked={colorTheme != "dark"} onChange={toggleTheme} />
                    <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                    <p>&nbsp;&nbsp;Dark Mode</p>
                </label>
            </div>
            <main className={`py-16 ${styles.article} prose mx-auto w-4/5 md:w-3/5 lg:w-1/2 dark:prose-invert`}>
                <section>
                    <h1 className='text-4xl dark:text-white'>{post.metadata.title}</h1>
                    <span className='italic dark:text-slate-300'>{post.metadata.date}</span>
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
                            img: ImageRenderer
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
