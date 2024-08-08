import CardList from "@/components/blog/card-list";
import Pagination from "@/components/blog/filtering/pagination";
import { getBlogAriclesList } from "@/content/fns";

export async function generateMetadata() {
    const desc =
        "The Larry Rowbs Foundation Blog. Dive into the latest news, updates, and educational content on making fashion sustainable.";
    const title = "Blog | Larry Rowbs Foundation";
    return {
        title: title,
        twitter: {
            title: title,
            description: desc,
            site: "larryrowbsfoundation.org",
        },
        openGraph: {
            title: title,
            description: desc,
            locale: "en_US",
            site_name: "Larry Rowbs Foundation",
            type: "article",
        },
        description: desc,
        keywords: "sustainable-fashion, africa",
        author: "Larry Rowbs Foundation",
        robots: "index, follow",
    };
}

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
