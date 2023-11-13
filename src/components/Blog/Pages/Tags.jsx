import React from "react";
import Link from "next/link";
import { Chip } from "@nextui-org/react";

export default function Tags({ publishedTags }) {
    return (
        <div className="pb-4 flex items-center gap-3 flex-wrap">
            {["All"].concat(publishedTags).map((ele, index) => {
                let link = `/blog/tags/${ele}`;
                if (ele === "All") {
                    link = "/blog";
                }
                return (
                    <Chip color="default" key={index}>
                        <Link href={link}>{ele}</Link>
                    </Chip>
                );
            })}
        </div>
    );
}
