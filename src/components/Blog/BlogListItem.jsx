import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    Link,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const BlogListItem = (props) => {
    const router = useRouter();
    return (
        <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
            isPressable
            onPress={() => router.push(`/blog/${props.slug}`)}
        >
            <CardHeader className="absolute top-0 bg-white/30 border-b-1 border-zinc-100/50 z-10 flex-col items-start">
                <h4 className="text-black font-bold text-2xl">{props.title}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt={props.description}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={props.imageThumbnail}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10">
                <div className="flex items-center justify-between">
                    <div className="font-bold">Read Story</div>
                    <div className="italic">{props.publishDate}</div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default BlogListItem;
