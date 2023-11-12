import React from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

const BlogListItem = (props) => {
    const router = useRouter();
    return (
        <Card
            isFooterBlurred
            className="w-full h-[400px]"
            isPressable
            onPress={() => router.push(`/blog/${props.slug}`)}
        >
            <CardHeader className="absolute top-0 bg-white/30 border-b-1 border-zinc-100/50 z-10 flex-col items-start backdrop-blur-md">
                <h4
                    className={`${
                        props.isImageDark ? "text-slate-200" : "text-slate-800"
                    } font-bold text-lg sm:text-xl md:text-2xl`}
                >
                    {props.title}
                </h4>
            </CardHeader>
            <Image
                removeWrapper
                alt={props.description}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={props.imageThumbnail}
                height="400px"
                loading="lazy"
            />
            <CardFooter
                className={`absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 flex items-center justify-between ${
                    props.isImageDark ? "text-slate-200" : "text-slate-800"
                }`}
            >
                <div className="font-bold bg-green-700 px-2 py-1 sm:py-2 sm:px-4 rounded-lg text-white">
                    Read Story
                </div>
                <div className="italic text-sm">{props.publishDate}</div>
            </CardFooter>
        </Card>
    );
};

export default BlogListItem;
