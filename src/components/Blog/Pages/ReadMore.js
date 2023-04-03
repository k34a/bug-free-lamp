import BlogList from "../BlogList";

const ReadMore = (props) => {
    return (
        <BlogList data={props.readMoreArticles} title="Continue Exploring"/>
    );
}

export default ReadMore;