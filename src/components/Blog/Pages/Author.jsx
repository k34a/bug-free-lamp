import React from "react";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";

const Author = (props) => {
    return (
        <div className="flex items-center mt-6 mb-9 gap-3">
            <Avatar
                showFallback
                name={props.authorName}
                src={props.authorPic}
                size="lg"
                isBordered={true}
                color="default"
            />
            <div>
                <Link
                    href={props.authorHref || "#"}
                    target="_blank"
                    className="!no-underline font-bold capitalize"
                >
                    {props.authorName}
                </Link>
                <div className="space-x-2 text-sm">
                    {
                        <span>
                            {props.publishDate} • {props.readingTime} min read
                        </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Author;
