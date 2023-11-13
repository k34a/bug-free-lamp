import React from "react";
import BlogList from "../BlogList";

const ReadMore = (props) => {
    return (
        <BlogList
            data={props.readMoreArticles}
            title="Continue Exploring"
            enableDarkMode={props.enableDarkMode}
        />
    );
};

export default ReadMore;
