import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Share(props) {
    const url = `https://larryrowbsfoundation.org/blog/${props.slug}`;
    return (
        <div>
            <h3>Share this article</h3>
            <div className="flex space-x-3 pt-2">
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="text-blue-600 dark:text-blue-300"
                    >
                    <FaFacebookF size={20}/>
                </a>
                <a 
                    href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${props.title}&summary=${props.title}&source=larryrowbsfoundation.org`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sky-500 dark:text-sky-300"
                >
                    <FaLinkedinIn size={20}/>
                </a>
                <a 
                    href={`http://twitter.com/share?text=${url}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sky-500 dark:text-sky-300"
                >
                    <FaTwitter size={20}/>
                </a>
                <a 
                    href={`https://api.whatsapp.com/send?text=${url}`} 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="text-teal-600 dark:text-teal-300"
                >
                    <IoLogoWhatsapp size={20} />
                </a>
            </div>
            <h3>Consider supporting us</h3>
            <div className='pt-2'>
                <Link href='/donate' className='bg-lime-700 text-white font-bold focus:ring-4 focus:ring-lime-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-lime-800'>Donate</Link>
            </div>
        </div>
    );
};
