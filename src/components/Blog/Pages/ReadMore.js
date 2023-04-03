import Link from "next/link";

const ReadMore = (props) => {
    return (
        <div>
            <h3 className="font-bold mb-6">Continue Exploring</h3>
            <div className="flex flex-col space-y-6">
                {props.readMoreArticles.map((ele, index) => {
                    return (
                        <Link 
                            href={`/blog/${ele.slug}`} 
                            className="!no-underline"
                            key={index}
                        >
                            <div 
                                className='border-2 p-4 rounded-lg break-words hover:bg-purple-200 dark:hover:bg-purple-700'
                            >
                                <div className="font-bold mb-4">
                                    {ele.title}
                                </div>
                                <div className="text-base mb-4">
                                    {ele.description}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ReadMore;