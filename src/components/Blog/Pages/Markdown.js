import YoutubeVideo from "@/components/Youtube"
import { generateSlug } from "@/lib/notion"
import Link from "next/link"

const hosts = [
    "www.larryrowbsfoundation.org",
    "larryrowbsfoundation.org",
    "localhost"
]

const youtubeHosts = [
    "youtube.com",
    "www.youtube.com",
    "youtu.be"
]

const para = (paragraph) => {
    const { node } = paragraph

    if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const metastring = image.properties.alt
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
        return (
            <div>
                <img
                    src={image.properties.src}
                    width="100%"
                    className="rounded md:rounded-lg"
                    alt={alt}
                />
                <figcaption className="caption text-center" aria-label={alt}>{alt}</figcaption>
            </div>
        )
    }
    else if (node.children.length == 1 && node.children[0].tagName === "a") {
        const link = node.children[0]
        let url = new URL(link.properties.href)
        let youtubeRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        if (youtubeHosts.includes(url.hostname)) {
            let match = link.properties.href.match(youtubeRegExp);
            if (match && match[2].length == 11) {
                return <YoutubeVideo videoId={match[2]} />
            }
        }
    }
    return <p>{paragraph.children}</p>
}


const h2Md = ({ node, ...props }) => (
    <h2 id={generateSlug(props.children[0])} {...props}></h2>
)

const h3Md = ({ node, ...props }) => (
    <h3 id={generateSlug(props.children[0])} {...props}></h3>
)

const aMd = (props) => {
    let url = new URL(props.href)
    const classes = `text-red-600 dark:text-yellow-200`;
    if (hosts.includes(url.hostname)) {
        return <Link href={url.pathname} className={classes}>{props.children}</Link>
    }
    else {
        return <a href={props.href} target="_blank" rel='noopener noreferrer' className={classes}>{props.children}</a>
    }
}

const componentMapping = {
    h2: h2Md,
    h3: h3Md,
    p: para,
    a: aMd
}

export default componentMapping;