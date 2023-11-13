import React from "react";
import YoutubeVideo from "@/components/Youtube";
import Link from "next/link";

const hosts = [
    "www.larryrowbsfoundation.org",
    "larryrowbsfoundation.org",
    "localhost",
];

const generateSlug = (s) => {
    if (!s || typeof s !== "string") {
        return "";
    }
    let str = s.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    str = str
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    return str;
};

const youtubeHosts = ["youtube.com", "www.youtube.com", "youtu.be"];

const para = (paragraph) => {
    const { node } = paragraph;

    if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        return (
            <div>
                <img
                    src={image.properties.src}
                    width="100%"
                    className="rounded md:rounded-lg"
                    alt={alt}
                    loading="lazy"
                />
                <figcaption className="caption text-center" aria-label={alt}>
                    {alt}
                </figcaption>
            </div>
        );
    } else if (node.children.length == 1 && node.children[0].tagName === "a") {
        const link = node.children[0];
        let url = new URL(link.properties.href);
        let youtubeRegExp =
            /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        if (youtubeHosts.includes(url.hostname)) {
            let match = link.properties.href.match(youtubeRegExp);
            if (match && match[2].length == 11) {
                return <YoutubeVideo videoId={match[2]} />;
            }
        }
    }
    return <p>{paragraph.children}</p>;
};

const h2Md = ({ node, ...props }) => (
    <h2 id={generateSlug(props.children?.[0] || "")} {...props}></h2>
);

const h3Md = ({ node, ...props }) => (
    <h3 id={generateSlug(props.children?.[0] || "")} {...props}></h3>
);

const aMd = (props) => {
    const classes = `text-green-600 dark:text-green-200`;
    if (props.href.startsWith("/")) {
        return (
            <Link href={props.href} className={classes}>
                {props.children}
            </Link>
        );
    } else {
        return (
            <a
                href={props.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={classes}
            >
                {props.children}
            </a>
        );
    }
};

const componentMapping = {
    h2: h2Md,
    h3: h3Md,
    p: para,
    a: aMd,
};

export default componentMapping;
