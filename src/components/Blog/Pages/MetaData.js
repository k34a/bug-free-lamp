import Tags from "@/components/Blog/Pages/Tags";
import Author from "@/components/Blog/Pages/Author";

const MetaData = (props) => {
    const post = props.post;
    if(!post) {
        return null;
    }
    const title = post?.metadata?.title || "";
    const metadata = post?.metadata || {};
    const minutes = post?.minutes || "";
    return (
        <>
            <Tags publishedTags={metadata.tags}/>
            <h1 className='text-4xl md:text-6xl dark:text-white'>
                {title}
            </h1>
            <Author 
                authorName={metadata.author}
                authorHref={metadata.authorHref}
                publishDate={metadata.date}
                readingTime={minutes}
                authorPic={metadata.authorPic}
            />
        </>
    );
}

export default MetaData;