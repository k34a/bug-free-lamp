import styles from "@/styles/BlogListItem.module.css"
import Link from "next/link"

const BlogListItem = (props) => {
    return (
        <div className={styles.blogListItemContainer}>
            <Link href={`/blog/${props.slug}`}>
                <div className={styles.itemContainer}>
                    <h3 className={styles.headings}>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </Link>

        </div>
    )
}

export default BlogListItem