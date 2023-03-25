import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const getInitialsFromName = (name) => {
    const words = name.trim().split(/\s+/);
    const firstInitial = words.length > 0 ? words[0].charAt(0).toUpperCase() : '';
    const lastInitial = words.length > 1 ? words[words.length - 1].charAt(0).toUpperCase() : '';
    const initials = firstInitial + lastInitial;
    return initials;
}

const Author = ({ authorName, authorHref }) => {
    const authorComponent = (
        <div className='pb-5 flex items-center'>
            <div className="select-none relative inline-flex mr-3 items-center justify-center w-10 h-10 overflow-hidden bg-purple-200 rounded-full dark:bg-purple-600 ring-2 ring-purple-300 dark:ring-purple-500">
                <span className="font-bold text-purple-600 dark:text-purple-200">{getInitialsFromName(authorName) || <Skeleton />}</span>
            </div>
            <a href={authorHref} target="_blank" rel="noopener noreferrer">
                {authorName}
            </a>
        </div>
    );

    return authorComponent;
};

export default Author;