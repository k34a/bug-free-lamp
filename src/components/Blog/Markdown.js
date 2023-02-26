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
