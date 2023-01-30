import BlogListItem from '@/components/BlogListItem';

const readMoreColors = [
    "bg-blue-700",
    "bg-orange-700",
    "bg-lime-700",
    "bg-green-700",
    "bg-rose-700",
    "bg-pink-700",
    "bg-fuchsia-700",
    "bg-purple-700",
    "bg-violet-700",
    "bg-indigo-700",
    "bg-sky-700",
    "bg-cyan-800",
    "bg-teal-700",
    "bg-emerald-700",
    "bg-yellow-700",
    "bg-amber-700",
    "bg-stone-700"
]

const BlogList = (props) => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {props.data.map((ele) => {
                    const readColor = readMoreColors[(ele.id)%(readMoreColors.length)];
                    return (
                        <BlogListItem 
                            title={ele.attributes.title}
                            description={ele.attributes.description}
                            slug={ele.attributes.slug}
                            key={ele.id}
                            readcolor={readColor}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default BlogList