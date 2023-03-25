import { useEffect, useState } from "react";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import Tags from "@/components/Blog/Pages/Tags";
import TableOfContents from "./TableOfContents";
import DateTime from "@/components/Blog/Pages/DateTime";
import Author from "@/components/Blog/Pages/Author";

const MetaData = ({post}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if(post){
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }, [post])

    return (
        <>
            <h1 className='text-4xl dark:text-white'>
                {!isLoading? post.metadata.title : <Skeleton />}
            </h1>
            <Author 
                authorName={post.metadata?.author || ""}
                authorHref={post.metadata.authorHref}
                isLoading={isLoading}
            />
            <DateTime 
                publishDate={post.metadata.date}
                readingTime={post.minutes}
                isLoading={isLoading}
            />
            <Tags tags={post.metadata.tags} isLoading={isLoading} />
            <TableOfContents tocMarkdown={post.markdown} isLoading={isLoading} />
        </>
    );
}

export default MetaData;