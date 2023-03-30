import { BiTime } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

const DateTime = (props) => {
    const publishDate = props.publishDate || "";
    const readingTime = props.readingTime || "";

    if (publishDate || !readingTime) {
        return null;
    }

    const articleDateTime = (
        <div className='pb-5 align-middle'>
            <span className='dark:text-slate-300 mr-6 block md:inline'>
                <FaRegCalendarAlt size={16} className="inline" />
                &nbsp; &nbsp;
                {publishDate}
            </span>
            <span className='dark:text-slate-300'>
                <BiTime size={16} className="inline" />
                &nbsp; &nbsp;
                {readingTime} min read
            </span>
        </div>
    );

    return articleDateTime;
}

export default DateTime;