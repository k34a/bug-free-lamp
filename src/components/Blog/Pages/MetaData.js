import Tags from "@/components/Blog/Pages/Tags";
import TableOfContents from "./TableOfContents";
import DateTime from "@/components/Blog/Pages/DateTime";
import Author from "@/components/Blog/Pages/Author";

const MetaData = (props) => {
    const post = props.post;
    if(!post) {
        return null;
    }
    const title = post?.metadata?.title || "";
    const markdown = post?.metadata?.markdown || "";
    const metadata = post?.metadata || {};
    const minutes = post?.minutes || "";
    return (
        <>
            <h1 className='text-4xl dark:text-white'>
                {title}
            </h1>
            <Author 
                authorName={metadata.author}
                authorHref={metadata.authorHref}
            />
            <DateTime 
                publishDate={metadata.date}
                readingTime={minutes}
            />
            <Tags publishedTags={metadata.tags}/>
            <TableOfContents tocMarkdown={markdown}/>
        </>
    );
}

export default MetaData;