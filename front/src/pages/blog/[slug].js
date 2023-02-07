import Head from 'next/head'
import ReactMarkdown from "react-markdown"
import styles from '@/styles/BlogArticle.module.css'
import Image from 'next/image';
import SubscribeNewsletter from '@/components/SubscribeNewsletter';

export async function getStaticPaths(context) {
    const fetchParams = {
        method: "GET",
        headers: {
            "content-type": "Application/json",
            'Authorization': `Bearer ${process.env.STRAPITOKEN}`
        },
    };
    const res = await fetch(`${process.env.STRAPIBASEURL}/api/blogposts`, fetchParams);
    const data = await res.json();
    const paths = data.data.map((blog) => {
        return {params: {slug: blog.attributes.slug}};
    })
    return {
        paths: paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const fetchParams = {
        method: "GET",
        headers: {
            "content-type": "Application/json",
            'Authorization': `Bearer ${process.env.STRAPITOKEN}`
        },
    };
    const res = await fetch(`${process.env.STRAPIBASEURL}/api/blogposts?filters[slug][$eq]=${params.slug}&populate=*`, fetchParams);
    const data = await res.json();
    if(data && data.data && data.data.length > 0){
        return {
            props: data
        };
    }
    else{
        return {
            notFound: true
        }
    }
}

export default function BlogPost(data) {
    const imageURL = `http://localhost:1337${data.data[0].attributes.image.data.attributes.url}`;
    return (
        <div className="pt-16 bg-slate-200">
            <Head>
                <title>{data.data[0].attributes.title}</title>
                <meta name="description" content={data.data[0].attributes.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.article} prose`}>
                <h1>{data.data[0].attributes.title}</h1>
                <Image 
                    alt={`${data.data[0].attributes.image.data.attributes.alternativeText}`} 
                    src={imageURL} 
                    width={data.data[0].attributes.image.data.attributes.width}
                    height={data.data[0].attributes.image.data.attributes.height}
                />
                <div>
                    <ReactMarkdown>{data.data[0].attributes.body}</ReactMarkdown>
                </div>
            </main>
            <SubscribeNewsletter />
        </div>
    )
}
