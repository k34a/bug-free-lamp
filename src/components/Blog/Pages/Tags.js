import Link from "next/link";

export default function Tags({ publishedTags}) {
    const tags = publishedTags.map((ele, index) => {
        let link = `/blog/tags/${ele}`;
        return ( 
            <div
                key={index}
                className="inline-flex flex-wrap items-center text-xs sm:text-sm uppercase mr-3"
            >
                <Link href={link}>
                    {ele}
                </Link>
            </div>
        )
    })

    return (
        <div className="pb-4">
            <div className="inline-flex flex-wrap items-center text-xs sm:text-sm uppercase mr-3">
                <Link href="/blog">
                    All
                </Link>
            </div>
            {tags}
        </div>
    )
};
