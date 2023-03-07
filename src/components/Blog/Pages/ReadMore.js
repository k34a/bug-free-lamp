import Link from "next/link";

const ReadMore = (props) => {
    return (
        <div>
            <h3><Link href="/blog" className="font-bold">Read More</Link></h3>
            <div className="space-y-4">
                {props.readMoreArticles.map((ele, index) => {
                    return (
                        <div 
                            key={index}
                            className='border-2 px-4 py-2 break-words'
                        >
                            <Link href={`/blog/${ele.slug}`} className="font-bold">
                                {ele.title}
                            </Link>
                            <br />
                            {ele.description}
                            <br />
                            <span className="italic text-sm">{ele.date}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ReadMore;