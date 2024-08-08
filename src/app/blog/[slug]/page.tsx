import SubscribeEmail from "@/components/Forms/subscribe-email";
import FurtherReading from "@/components/blog/further-reading";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getAllArticles } from "@/content/fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuHash, LuMoveLeft } from "react-icons/lu";

interface PageProps {
    params: {
        slug: string;
    };
}

const Blog = ({ params }: PageProps) => {
    const allArticles = getAllArticles();
    const i = allArticles.map((a) => a.slug).indexOf(params.slug);

    if (i === -1) {
        notFound();
    }

    const article = allArticles[i];
    const prevArticle = i - 1 >= 0 ? allArticles[i - 1] : null;
    const nextArticle = i + 1 < allArticles.length ? allArticles[i + 1] : null;

    return (
        <main>
            <article
                id="article-slug"
                aria-label="blog-article"
                className="prose prose-neutral lg:prose-lg prose-code:before:hidden prose-code:after:hidden prose-blockquote:bg-white min-h-screen w-full max-w-prose px-4 py-24 sm:mx-auto sm:pl-12"
            >
                <Link href="/blog" className="flex items items-center gap-3">
                    <LuMoveLeft /> Back to all content
                </Link>
                <hgroup>
                    <header>
                        <h1 className="drop-shadow-sm">{article.title}</h1>
                    </header>
                    <div>
                        By {article.meta.author.name} on{" "}
                        <time>{article.meta.publishedOn}</time>.{" "}
                        {article.meta.timeToRead} min read
                    </div>
                </hgroup>
                <main>
                    <MarkdownRenderer markdown={article.content} />
                </main>
                <footer className="flex flex-col gap-8">
                    <div className="flex flex-wrap gap-4">
                        {article.tags.map((tag, index) => {
                            return (
                                <Link
                                    href={`/blog/tags/${tag}`}
                                    key={index}
                                    className="border-2 border-red-500 px-3 py-1 rounded-lg flex gap-2 items-center no-underline"
                                >
                                    <LuHash /> {tag}
                                </Link>
                            );
                        })}
                    </div>
                    <FurtherReading
                        prevArticle={prevArticle}
                        nextArticle={nextArticle}
                    />
                </footer>
            </article>
            <div>
                <SubscribeEmail
                    heading="Stay tuned for latest updates!"
                    desc="We post regular updates about the sustainability practices in the fashion industry."
                    formName="email-subscribe"
                    submitButton={{
                        text: "Subscribe",
                        onLoading: "Subscribing...",
                    }}
                    successMessage="Thank you for subscribing!"
                    info="We won't spam you, promise :)"
                />
            </div>
        </main>
    );
};

export default Blog;
