import { validateURL } from "@/lib/commonFrontEndFns";

const getInitialsFromName = (name) => {
    const words = name.trim().split(/\s+/);
    const firstInitial = words.length > 0 ? words[0].charAt(0).toUpperCase() : '';
    const lastInitial = words.length > 1 ? words[words.length - 1].charAt(0).toUpperCase() : '';
    const initials = firstInitial + lastInitial;
    return initials;
}

const Author = (props) => {
    const author = props.authorName || "Anonymous";
    const href = props.authorHref || "";
    const publishDate = props.publishDate || "";
    const readingTime = props.readingTime || "";
    let authorPic = props.authorPic || "";

    if(!validateURL(authorPic)) {
        authorPic = "";
    }

    const authorComponent = (
        <div className='flex items-center mt-6 mb-9'>
            {
                authorPic? 
                    <div className="h-14 w-14 m-0 select-none relative inline-flex mr-3 items-center justify-center rounded-full overflow-hidden ring-2 ring-purple-300 dark:ring-purple-500">
                        <img
                            src={authorPic}
                            alt={`${author} profile picture`}
                            className="inline h-full w-auto"
                            loading="lazy"
                        />
                    </div>
                    :
                    <div className="m-0 select-none relative inline-flex mr-3 items-center justify-center w-14 h-14 overflow-hidden bg-purple-200 rounded-full dark:bg-purple-600 ring-2 ring-purple-300 dark:ring-purple-500">
                        <span className="font-bold text-purple-600 dark:text-purple-200">{getInitialsFromName(author)}</span>
                    </div>
            }
            <div>
                <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="!no-underline font-bold"
                >
                    {author}
                </a>
                <div className="space-x-2 text-sm">
                    {publishDate && <span>{publishDate}</span>}
                    {publishDate && readingTime && <span>•</span>}
                    {readingTime && <span>{readingTime} min read</span>}
                </div>
            </div>
        </div>
    );

    return authorComponent;
};

export default Author;