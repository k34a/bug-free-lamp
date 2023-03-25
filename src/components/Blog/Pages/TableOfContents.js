import { useState } from "react";
import Skeleton from 'react-loading-skeleton';

import { BsChevronDown } from "react-icons/bs";
import Toc from "react-toc";

import 'react-loading-skeleton/dist/skeleton.css';
import styles from '@/styles/Commons.module.css';

const TableOfContents = ({ tocMarkdown, isLoading }) => {
    const matchers = { "[?!:.*_/]": "" };
    const [isTocOpen, setIsTocOpen] = useState(true);

    const skeleton = (
        <div className='border-solid rounded-lg border-2 border-gray-600 dark:border-gray-400 px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300 prose-a:no-underline'>
            <h2 className='my-6 cursor-pointer'>
                <Skeleton />
            </h2>
            <Skeleton count={10}/>
        </div>
    );
    
    const tableOfContents = (
        <div className='border-solid rounded-lg border-2 border-gray-600 dark:border-gray-400 px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300 prose-a:no-underline'>
            <h2
                className='my-6 cursor-pointer'
                onClick={(e) => { setIsTocOpen(!isTocOpen) }}
                title={isTocOpen ? "Hide Table of Contents" : "View Table of Contents"}
            >
                <BsChevronDown size={28} className={`inline mr-4 ${styles.rotateIcon} ${isTocOpen ? "" : styles.down}`} />
                Table of Contents
            </h2>
            <Toc markdownText={tocMarkdown} className={`dark:text-slate-300 ${isTocOpen ? "block" : "hidden"}`} customMatchers={matchers} />
        </div>
    );

    return (
        isLoading? skeleton : tableOfContents
    );
}

export default TableOfContents;