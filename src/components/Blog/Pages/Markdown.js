import { generateSlug } from "@/lib/notion"
import Link from "next/link"

const hosts = [
    "www.larryrowbsfoundation.org",
    "larryrowbsfoundation.org",
    "localhost"
]

export const para = (paragraph) => {
    const { node } = paragraph

    if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const metastring = image.properties.alt
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "")

        return (
            <div className="postImgWrapper">
                <img
                    src={image.properties.src}
                    width="100%"
                    className="postImg"
                    alt={alt}
                />
                <figcaption className="caption text-center" aria-label={alt}>{alt}</figcaption>
            </div>
        )
    }
    return <p>{paragraph.children}</p>
}


export const h2Md = ({ node, ...props }) => (
    <h2 id={generateSlug(props.children[0])} {...props}></h2>
)

export const h3Md = ({ node, ...props }) => (
    <h3 id={generateSlug(props.children[0])} {...props}></h3>
)

export const aMd = (props) => {
    let url = new URL(props.href)
    const classes = 'text-red-600 dark:text-yellow-200'
    if (hosts.includes(url.hostname)) {
        return <Link href={url.pathname} className={classes}>{props.children}</Link>
    }
    else {
        return <a href={props.href} target="_blank" rel='noopener noreferrer' className={classes}>{props.children}</a>
    }
}