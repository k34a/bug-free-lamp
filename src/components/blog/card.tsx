"use client";

import { type BlogArticle } from "@/content/fns";
import { motion } from "framer-motion";
import Link from "next/link";

interface ArticleCardProps {
    article: BlogArticle;
}

const ArticleCard = (props: ArticleCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.03 }}
            className="rounded-xl border-2 border-slate-300"
        >
            <Link
                href={`/blog/${props.article.slug}`}
                className="grid p-6 bg-white rounded-xl group !no-underline"
            >
                <h3 className="text-2xl font-bold mb-5 group-hover:underline">
                    {props.article.title}
                </h3>
                <div className="text-sm text-slate-500 mb-3">
                    By {props.article.meta.author.name} on{" "}
                    <time>{props.article.meta.publishedOn}</time>.{" "}
                    {props.article.meta.timeToRead} min read
                </div>
                <p className="text-md">
                    {props.article.meta.description.slice(0, 150)}...
                </p>
            </Link>
        </motion.div>
    );
};

export default ArticleCard;
