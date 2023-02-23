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
        return ( 
            <div
                key={index}
                className={`text-xs space-x-2 inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${color[0]} ${color[1]} rounded-full`}
            >
                {ele}
            </div>
        )
    })
    return (
        <div className="space-x-2">
            {tags}
        </div>
    );
};
