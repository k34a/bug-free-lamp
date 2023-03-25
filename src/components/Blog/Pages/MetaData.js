import Tags from "@/components/Blog/Pages/Tags";
import TableOfContents from "./TableOfContents";
import DateTime from "@/components/Blog/Pages/DateTime";
import Author from "@/components/Blog/Pages/Author";

const MetaData = ({ post}) => {
    return (
        <>
            <h1 className='text-4xl dark:text-white'>
                {post.metadata.title}
            </h1>
            <Author 
                authorName={post.metadata?.author || ""}
                authorHref={post.metadata.authorHref}
            />
            <DateTime 
                publishDate={post.metadata.date}
                readingTime={post.minutes}
            />
            <Tags publishedTags={post.metadata.tags}/>
            <TableOfContents tocMarkdown={post.markdown}/>
        </>
    );
}

export default MetaData;