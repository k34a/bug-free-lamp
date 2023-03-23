import Link from "next/link";

const tagColors = [
    ["bg-blue-200", "text-blue-700"],
    ["bg-lime-200", "text-lime-700"],
    ["bg-green-200", "text-green-700"],
    ["bg-red-200", "text-red-700"],
    ["bg-amber-200", "text-amber-700"],
    ["bg-slate-200", "text-slate-700"],
]

export default function Tags(props) {
    const n = tagColors.length;
    const tags = props.tags.map((ele, index) => {
        let color = tagColors[index % n];
        let link = `/blog/tags/${ele}`;
        return ( 
            <div
                key={index}
                className={`inline-flex items-center py-2 px-3 rounded-full text-xs font-bold leading-sm uppercase ${color[0]} ${color[1]} my-1`}
            >
                <Link href={link} className={`inline-flex items-center ${color[1]} !no-underline`}>
                    <span className="mr-2 px-2 py-1 text-white bg-black rounded-full">#</span>
                    {ele}
                </Link>
            </div>
        )
    })
    return (
        <div className="space-x-2">
            Filter By: {tags}
        </div>
    );
};
