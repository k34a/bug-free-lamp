import React, { useEffect, useState } from "react";
import Giscus from "@giscus/react";
import useDarkMode from "@/lib/useDarkMode";

const Comments = () => {
    const [theme, setTheme] = useState(useDarkMode()[0]);
    useEffect(() => {
        function listenStorageChange() {
            const color = localStorage.getItem("theme");
            if (color) {
                setTheme(color);
            } else {
                setTheme("preferred_color_scheme");
            }
        }
        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, [theme]);

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
            theme={theme == "dark" ? "dark" : "light_high_contrast"}
            lang="en"
            loading="lazy"
        />
    );
};

export default Comments;
