import CardList from "@/components/blog/card-list";
import Pagination from "@/components/blog/filtering/pagination";
import { getBlogAriclesList } from "@/content/fns";

interface PageProps {
    params: {
        num: string;
    };
}

const Page = (props: PageProps) => {
    let pageNum = parseInt(props.params.num);
    if (isNaN(pageNum) || pageNum < 1) {
        pageNum = 1;
    }

    const { articles, totalPages } = getBlogAriclesList("", [], pageNum);

    return (
        <div className="py-12 min-h-screen">
            <CardList articleList={articles} />
            <Pagination value={pageNum} totalPages={totalPages} />
        </div>
    );
};

export default Page;
