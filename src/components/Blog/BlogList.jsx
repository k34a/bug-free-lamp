import React from "react";
import BlogListItem from "@/components/Blog/BlogListItem";

const BlogList = (props) => {
    return (
        <div className="container mx-auto w-11/12 sm:w-5/6 lg:w-4/5 xl:w-3/5 my-12">
            <h1 className="text-4xl font-black text-center pb-12 capitalize bg-gradient-to-r from-stone-700 to-emerald-600 dark:from-stone-400 dark:to-emerald-400 bg-clip-text text-transparent">
                {props.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
                {props.data.map((ele, index) => {
                    return (
                        <BlogListItem
                            isImageDark={ele.isImageDark || false}
                            imageThumbnail={ele.imageThumbnail}
                            title={ele.title}
                            description={ele.description}
                            slug={ele.slug}
                            publishDate={ele.date}
                            key={index}
                            itemNumber={index}
                            darkMode={props.enableDarkMode || false}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BlogList;
