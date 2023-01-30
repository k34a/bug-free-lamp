import styles from '@/styles/Header.module.css'
import BlogListItem from '@/components/BlogListItem';

const BlogList = (props) => {
    return (
        <div className={styles.header}>
            {props.data.map((ele) => {
                return <BlogListItem 
                            title={ele.attributes.title}
                            description={ele.attributes.description}
                            slug={ele.attributes.slug}
                            key={ele.id}
                        />
            })}
        </div>
    );
}

export default BlogList