import React from "react";
import Giscus from "@giscus/react";

const Comments = () => {
    return (
        <Giscus
            id="comments"
            repo="k34a/bug-free-lamp"
            repoId="R_kgDOI3FUjQ"
            category="General"
            categoryId="DIC_kwDOI3FUjc4Ce-vM"
            mapping="url"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
        />
    );
};

export default Comments;
