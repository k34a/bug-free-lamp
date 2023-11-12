import BlogList from "@/components/Blog/BlogList";
import Head from "next/head";
import blogArticles from "@/blogdata";

export default function Home() {
    const posts = blogArticles;
    if (!posts) return <h1>No posts</h1>;
    return (
        <>
            <Head>
                <title>Blog - Larry Rowbs Foundation</title>
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
                    title="Fashion Stories for Sustainable Living"
                />
            </main>
        </>
    );
}
