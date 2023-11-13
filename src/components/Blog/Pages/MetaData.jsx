import React from "react";
import Tags from "@/components/Blog/Pages/Tags";
import Author from "@/components/Blog/Pages/Author";
import { authors } from "@/blogdata";

const MetaData = (props) => {
    const post = props.post;
    if (!post) {
        return null;
    }
    const author = authors[post.authorId];
    return (
        <>
            <Tags publishedTags={post.tags} />
            <h1 className="text-4xl md:text-6xl dark:text-white">
                {post.title}
            </h1>
            <Author
                authorName={author.name}
                authorHref={author.href}
                publishDate={post.date}
                readingTime={post.minutes}
                authorPic={author.pic}
            />
        </>
    );
};

export default MetaData;
