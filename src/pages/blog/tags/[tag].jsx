import Head from "next/head";
import BlogList from "@/components/Blog/BlogList";
import blogArticles from "@/blogdata";

export async function getStaticPaths(context) {
    const tags = [];
    blogArticles.forEach((article) => {
        tags.concat(article.tags);
    });
    const uniqueTags = Array.from(new Set(tags));
    const paths = uniqueTags.map((tag) => ({ params: { tag } }));
    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    try {
        const posts = blogArticles.filter((article) => {
            return article.tags.includes(params.tag);
        });
        return {
            props: {
                posts,
                tag: params.tag,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            notFound: true,
        };
    }
}

export default function BlogPost({ posts, tag }) {
    if (!posts) return <h1>No posts</h1>;
    const title = `Articles on ${tag} - Larry Rowbs Foundation`;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="The Larry Rowbs Foundation Blog. Dive into the latest news, updates, and educational content on making fashion sustainable."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <BlogList
                    data={posts}
                    title={`Curated list of Articles on ${tag}`}
                />
            </main>
        </>
    );
}
