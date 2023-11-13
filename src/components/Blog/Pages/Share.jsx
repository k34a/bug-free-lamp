import React from "react";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoCopyOutline, IoLogoWhatsapp } from "react-icons/io5";
import { Button, Link } from "@nextui-org/react";

function handleCopyClick(text, setIsCopied) {
    navigator.clipboard.writeText(text || "");
    setIsCopied(true);
    setTimeout(() => {
        setIsCopied(false);
    }, 3000);
}

export default function Share(props) {
    const [isCopied, setIsCopied] = useState(false);
    const slug = props.slug;
    const title = props.title;

    const url = `https://www.larryrowbsfoundation.org/blog/${slug}`;

    const shareDetails = [
        [
            "facebook",
            {
                icon: <FiFacebook size={20} />,
                link: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            },
        ],
        [
            "linkedin",
            {
                icon: <FiLinkedin size={20} />,
                link: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}&source=larryrowbsfoundation.org`,
            },
        ],
        [
            "twitter",
            {
                icon: <FiTwitter size={20} />,
                link: `https://twitter.com/share?text=${url}`,
            },
        ],
        [
            "whatsapp",
            {
                icon: <IoLogoWhatsapp size={20} />,
                link: `https://api.whatsapp.com/send?text=${url}`,
            },
        ],
    ];

    return (
        <div className="my-12">
            <div className="flex gap-3 items-center flex-wrap justify-center">
                {shareDetails.map((ele, index) => {
                    return (
                        <Button
                            key={index}
                            isIconOnly
                            color="default"
                            aria-label={`share-${ele[0]}`}
                            as={Link}
                            href={ele[1].link}
                            target="_blank"
                            className="rounded-full"
                        >
                            {ele[1].icon}
                        </Button>
                    );
                })}
                <Button
                    color="default"
                    aria-label="copy-link-to-blog"
                    className={`flex items-center gap-2 duration-75 ${
                        isCopied ? "text-lime-700 dark:text-green-200" : ""
                    }`}
                    onClick={(e) => handleCopyClick(url, setIsCopied)}
                >
                    <span>{isCopied ? "Copied!" : "Copy Link"}</span>
                    {isCopied ? (
                        <FaRegCheckCircle size={20} />
                    ) : (
                        <IoCopyOutline size={20} />
                    )}
                </Button>
            </div>
            <hr className="sm:w-4/5 lg:w-1/2 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-600" />
        </div>
    );
}
