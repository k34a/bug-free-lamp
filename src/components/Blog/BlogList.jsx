import React from "react";
import BlogListItem from "@/components/Blog/BlogListItem";
import Masonry from "react-masonry-css";
import styles from "@/styles/BlogList.module.css";

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    600: 1,
};

const BlogList = (props) => {
    return (
        <div className="container mx-auto w-11/12 md:w-4/5 my-12">
            <h1 className="text-4xl font-black text-center pb-12 capitalize bg-gradient-to-r from-stone-700 to-emerald-600 dark:from-stone-400 dark:to-emerald-400 bg-clip-text text-transparent">
                {props.title}
            </h1>
            <div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.myMasonryGrid}
                    columnClassName={styles.myMasonryGridColumn}
                >
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
                </Masonry>
            </div>
        </div>
    );
};

export default BlogList;
