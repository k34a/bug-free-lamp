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
        >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-white font-medium text-2xl">
                    {props.title}
                </h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover blur-sm"
                src={props.imageThumbnail}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between items-center flex">
                <Button color="primary">Read Story</Button>
                <div className="mb-3 text-sm italic">{props.publishDate}</div>
            </CardFooter>
        </Card>
    );
};

export default BlogListItem;
