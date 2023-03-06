import Toc from "react-toc";
import Tags from "./Tags";

const MetaData = ({post, minutes}) => {
    const matchers = { "[?!:.*_/]": "" }
    return (
        <>
        <h1 className='text-4xl dark:text-white'>{post.metadata.title}</h1>
            <div className='pb-5'>
                <span className='select-none bg-green-200 text-green-700 py-2 px-3 mr-2 rounded-full font-bold'>
                    {post.metadata.author[0]}
                </span>
                <a href={post.metadata.authorHref} target="_blank" rel="noopener noreferrer">
                        {post.metadata.author}
                </a>
            </div>
            <div className='pb-5 align-middle'>
                <span className='dark:text-slate-300 mr-6 block md:inline'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-calendar-check" viewBox="0 0 16 16">
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                    &nbsp;&nbsp;
                    {post.metadata.date}
                </span>
                <span className='dark:text-slate-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                    &nbsp;&nbsp;
                    {minutes} min read
                </span>
            </div>
            <Tags tags={post.metadata.tags} />
            <div className='border-solid border-4 px-6 my-6 dark:text-slate-300 dark:marker:text-slate-300'>
                <h2 className='my-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="inline mr-4 bi bi-justify-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    Table of Content
                </h2>
                <Toc markdownText={post.markdown} className="dark:text-slate-300" customMatchers={matchers}/>
            </div>
        </>
    );
}

export default MetaData;