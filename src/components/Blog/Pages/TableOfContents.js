import Toc from "react-toc";
import styles from "@/styles/BlogArticle.module.css"
import { useHeadsObserver } from "@/lib/useHeadsObserver";

const TableOfContents = ({ tocMarkdown }) => {
    const { activeId } = useHeadsObserver()
    const matchers = { 
        "[?!:.*_/()–]": "",
        "--": "-",
    };
    console.log(activeId)
    const tableOfContents = (
        <div className="">
            <div className='px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300'>
                <Toc 
                    markdownText={tocMarkdown} 
                    className={`dark:text-slate-300 ${styles.toc}`} 
                    customMatchers={matchers} 
                    lowestHeadingLevel={3}
                />
            </div>
        </div>
    );

    return tableOfContents;
}

export default TableOfContents;