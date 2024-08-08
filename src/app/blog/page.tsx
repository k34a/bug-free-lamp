import CardList from "@/components/blog/card-list";
import Pagination from "@/components/blog/filtering/pagination";
import { getBlogAriclesList } from "@/content/fns";

const Page = () => {
    const { articles, totalPages } = getBlogAriclesList("", [], 1);

    return (
        <div className="py-12 min-h-screen">
            <CardList articleList={articles} />
            <Pagination value={1} totalPages={totalPages} />
        </div>
    );
};

export default Page;
