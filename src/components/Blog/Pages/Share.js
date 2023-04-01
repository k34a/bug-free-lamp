import Link from "next/link";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoCopyOutline, IoLogoWhatsapp } from "react-icons/io5";

function handleCopyClick(text, setIsCopied) {
    navigator.clipboard.writeText(text || "")
    setIsCopied(true)
    setTimeout(() => {
        setIsCopied(false);
    }, 3000);
}


export default function Share(props) {
    const [isCopied, setIsCopied] = useState(false);
    const slug = props.slug || "";
    const title = props.title || "";

    const url = `https://larryrowbsfoundation.org/blog/${slug}`;
    const shareDetails = [
        ["facebook", {
            icon: <FiFacebook size={20} />, 
            link: `https://www.facebook.com/sharer/sharer.php?u=${url}`
        }],
        ["linkedin", {
            icon: <FiLinkedin size={20} />, 
            link: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}&source=larryrowbsfoundation.org`
        }],
        ["twitter", {
            icon: <FiTwitter size={20} />, 
            link: `https://twitter.com/share?text=${url}`
        }],
        ["whatsapp", {
            icon: <IoLogoWhatsapp size={20} />, 
            link: `https://api.whatsapp.com/send?text=${url}`
        }],
    ]
    return (
        <div>
            <div className='my-6 flex items-center justify-center'>
                <Link
                    href='/donate'
                    className='font-semibold border-4 border-lime-600 text-black hover:text-white rounded-lg px-4 lg:px-5 py-3 lg:py-3.5 hover:bg-lime-800 !no-underline'
                >
                    Consider Supporting Us
                </Link>
            </div>
            <div className="flex pt-2 items-center flex-wrap justify-center">
                {shareDetails.map((ele, index) => {
                    return (
                            <a 
                                key={index}
                                href={ele[1].link} 
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="p-4 mr-3 my-3 rounded-full border-2 border-slate-700 hover:border-slate-400 dark:border-slate-100 dark:hover:border-slate-500"
                            >
                                {ele[1].icon}
                            </a>
                    )
                })}
                <div className="border-2 my-3 border-black dark:border-slate-200 py-2 px-3 hover:bg-slate-100 dark:hover:bg-slate-500">
                    <button 
                        className={`flex items-center space-x-2 duration-75 ${isCopied? "text-lime-600 dark:text-green-300": ""}`}
                        onClick={(e) => handleCopyClick(url, setIsCopied)}
                    >
                        <span>{isCopied? "Copied!": "Copy Link"}</span>
                        {isCopied? <FaRegCheckCircle size={20} /> : <IoCopyOutline size={20} />}
                    </button>
                </div>
            </div>
            <hr className="sm:w-4/5 lg:w-1/2 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-600" />
        </div>
    );
};
