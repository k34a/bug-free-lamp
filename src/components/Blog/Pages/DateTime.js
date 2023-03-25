import { BiTime } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const DateTime = ({ publishDate, readingTime, isLoading }) => {
    const skeleton = (
        <div className='pb-5 align-middle'>
            <span className='block md:inline'>
                <Skeleton width={"50%"}/>
            </span>
        </div>
    );

    const articleDateTime = (
        <div className='pb-5 align-middle'>
            <span className='dark:text-slate-300 mr-6 block md:inline'>
                <FaRegCalendarAlt size={16} className="inline" />
                &nbsp;&nbsp;
                {publishDate || <Skeleton />}
            </span>
            <span className='dark:text-slate-300'>
                <BiTime size={16} className="inline" />
                &nbsp;&nbsp;
                {`${readingTime} min read` || <Skeleton />}
            </span>
        </div>
    );

    return (
        isLoading? skeleton: articleDateTime
    );
}

export default DateTime;