import { useState } from "react";
import Toc from "react-toc";
import Tags from "./Tags";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import styles from '@/styles/BlogArticle.module.css'

const getInitialsFromName = (name) => {
    const words = name.trim().split(/\s+/);
    const firstInitial = words.length > 0 ? words[0].charAt(0).toUpperCase() : '';
    const lastInitial = words.length > 1 ? words[words.length - 1].charAt(0).toUpperCase() : '';
    const initials = firstInitial + lastInitial;
    return initials;
}

const MetaData = ({post}) => {
    const matchers = { "[?!:.*_/]": "" };
    const [isTocOpen, setIsTocOpen] = useState(true);

    return (
        <>
        <h1 className='text-4xl dark:text-white'>{post.metadata.title}</h1>
            <div className='pb-5 flex items-center'>
                <div className="select-none relative inline-flex mr-3 items-center justify-center w-10 h-10 overflow-hidden bg-purple-200 rounded-full dark:bg-purple-600 ring-2 ring-purple-300 dark:ring-purple-500">
                    <span className="font-bold text-purple-600 dark:text-purple-200">{getInitialsFromName(post.metadata?.author || "")}</span>
                </div>
                <a href={post.metadata.authorHref} target="_blank" rel="noopener noreferrer">
                    {post.metadata.author}
                </a>
            </div>
            <div className='pb-5 align-middle'>
                <span className='dark:text-slate-300 mr-6 block md:inline'>
                    <FaRegCalendarAlt size={16} className="inline"/>
                    &nbsp;&nbsp;
                    {post.metadata.date}
                </span>
                <span className='dark:text-slate-300'>
                    <BiTime size={16} className="inline" />
                    &nbsp;&nbsp;
                    {post.minutes} min read
                </span>
            </div>
            <Tags tags={post.metadata.tags} />
            <div className='border-solid rounded-lg border-2 border-gray-600 dark:border-gray-400 px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300 prose-a:no-underline'>
                <h2 
                    className='my-6 cursor-pointer' 
                    onClick={(e) => {setIsTocOpen(!isTocOpen)}}
                    title={isTocOpen? "Hide Table of Contents": "View Table of Contents"}
                >
                    <BsChevronDown size={28} className={`inline mr-4 ${styles.rotateIcon} ${isTocOpen ? "" : styles.down}`}/>
                    Table of Contents
                </h2>
                <Toc markdownText={post.markdown} className={`dark:text-slate-300 ${isTocOpen? "block": "hidden"}`} customMatchers={matchers}/>
            </div>
        </>
    );
}

export default MetaData;