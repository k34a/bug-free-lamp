import React from "react";
import { useHeadsObserver } from "@/lib/useHeadsObserver";
import Toc from "@/components/toc/index";

const TableOfContents = ({ tocMarkdown }) => {
    const { activeId } = useHeadsObserver();
    const tableOfContents = (
        <div className="px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300">
            <Toc mdText={tocMarkdown} focussedHeadingId={activeId} />
        </div>
    );

    return tableOfContents;
};

export default TableOfContents;
