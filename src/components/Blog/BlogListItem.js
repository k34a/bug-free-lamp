import Link from "next/link"

const BlogListItem = (props) => {
    return (
        <div>
            <div className="m-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <Link href={`/blog/${props.slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">{props.description}</p>
                <div className="mb-3 text-sm italic">
                    {props.publishDate}
                </div>
                <Link 
                    href={`/blog/${props.slug}`} 
                    className={`!no-underline px-3 py-2 text-sm font-medium text-center text-white ${props.readcolor} rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300`}
                >
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default BlogListItem