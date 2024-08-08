import CardList from "@/components/blog/card-list";
import { getAllArticles } from "@/content/fns";

const Page = () => {
    const articles = getAllArticles();

    return (
        <div className="py-12 min-h-screen">
            <CardList articleList={articles} />
        </div>
    );
};

export default Page;
