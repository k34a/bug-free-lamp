import Link from "next/link";
import ArticleCard from "./card";
import { type BlogArticle } from "@/content/fns";

interface CardListProps {
    articleList: Array<BlogArticle>;
}
const CardList = (props: CardListProps) => {
    if (props.articleList.length === 0) {
        return (
            <div className="flex flex-col gap-5 items-center justify-center">
                <p className="text-xl font-bold">No more articles to show</p>
                <Link href="/" className="underline">
                    Go to home
                </Link>
            </div>
        );
    }
    return (
        <div className="grid grid-col-1 gap-8 w-11/12 md:w-1/2 m-auto ">
            {props.articleList.map((article, index) => {
                return <ArticleCard key={index} article={article} />;
            })}
        </div>
    );
};

export default CardList;
