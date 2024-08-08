import CardList from "@/components/blog/card-list";
import { getAllTags, getBlogAriclesList } from "@/content/fns";

interface PageProps {
    params: {
        tag: string;
    };
}

export async function generateStaticParams() {
    const tags = getAllTags();
    return tags.map((t) => ({ tag: t.tag }));
}

const Page = (props: PageProps) => {
    const { articles } = getBlogAriclesList("", [props.params.tag], 1);

    return (
        <div className="py-12 min-h-screen">
            <h1></h1>
            <CardList
                articleList={articles}
                title={`Articles related to '${props.params.tag}'`}
            />
        </div>
    );
};

export default Page;
