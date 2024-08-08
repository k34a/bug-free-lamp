import authors, { type Author } from "@/content/authors";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import moment from "moment";
import { z } from "zod";

const DATE_FORMAT = "MMMM D, YYYY";
const DIR_PATH = "src/content/articles";
const STATIC_IMAGES_PATH_DIR = "public";

import _ from "underscore";

type BlogArticleAuthor = Author;

interface BlogArticleMeta {
    author: BlogArticleAuthor;
    isPublished: boolean;
    description: string;
    publishedOn: string;
    modifiedOn: string;
    timeToRead: number;
    previewImage: string;
}

interface BlogArticle {
    slug: string;
    meta: BlogArticleMeta;
    title: string;
    content: string;
    tags: string[];
}

const ArticleFrontMatterSchema = z.object({
    title: z.string().min(5).max(100),
    author: z
        .string()
        .min(1)
        .refine((authorId) => Object.keys(authors).includes(authorId), {
            message: `Author should be configured in '/app/content/authors.ts'`,
        }),
    isPublished: z.boolean().default(true),
    summary: z.string().min(100).max(200),
    publishedOn: z
        .string()
        .refine((val) => moment(val, DATE_FORMAT, true).isValid(), {
            message: `'publishedOn' should be of format '${DATE_FORMAT}'`,
        }),
    modifiedOn: z
        .string()
        .refine((val) => moment(val, DATE_FORMAT, true).isValid(), {
            message: `'modifiedOn' should be of format '${DATE_FORMAT}'`,
        }),
    tags: z.string().default(""),
    previewImage: z
        .string()
        .min(5)
        .refine(
            (val) => {
                return val.includes(".");
            },
            { message: "previewImage must have a valid extension" }
        )
        .refine(
            (val) => {
                const imagePath = path.join(
                    process.cwd(),
                    STATIC_IMAGES_PATH_DIR,
                    val
                );
                return fs.existsSync(imagePath);
            },
            {
                message: "previewImage not found.",
            }
        ),
});

function readingTime(post: string) {
    const WORDS_PER_MINUTE = 200;
    const matches = post.match(/\w+/g);

    if (matches) {
        return {
            wordCount: matches.length,
            readingTime: Math.ceil(matches.length / WORDS_PER_MINUTE),
        };
    } else {
        return {
            wordCount: 0,
            readingTime: 0,
        };
    }
}

const getArticle = (slug: string): BlogArticle | null => {
    const directoryPath = path.join(process.cwd(), DIR_PATH);
    const filePath = path.join(directoryPath, `${slug}.md`);
    console.info(`Trying to read article: '${filePath}'`);

    const fileExists = fs.existsSync(filePath);

    if (!fileExists) {
        console.error(`File '${filePath}' not found.`);
        return null;
    }

    const fileContents = fs.readFileSync(filePath, { encoding: "utf-8" });
    const fileStatsData = fs.statSync(filePath);

    const { data: frontMatter, content: articleContent } = matter(fileContents);

    frontMatter.modifiedOn = moment(fileStatsData.mtime, true).format(
        DATE_FORMAT
    );

    const articleDetails = ArticleFrontMatterSchema.parse(frontMatter);

    const authorDetails = authors[articleDetails.author];

    const tags = (articleDetails.tags as string)
        .split(",")
        .map((tag) => tag.trim());

    return {
        slug: slug,
        meta: {
            author: authorDetails,
            isPublished: articleDetails.isPublished,
            description: articleDetails.summary,
            publishedOn: articleDetails.publishedOn,
            modifiedOn: articleDetails.modifiedOn,
            timeToRead: readingTime(articleContent).readingTime,
            previewImage: articleDetails.previewImage,
        },
        title: articleDetails.title,
        content: articleContent,
        tags,
    };
};

const getAllArticles = _.memoize((): Array<BlogArticle> => {
    const directoryPath = path.join(process.cwd(), DIR_PATH);

    const files = fs.readdirSync(directoryPath);
    const blogFiles = files.filter((file) =>
        [".md"].includes(path.extname(file))
    );

    const posts: Array<BlogArticle> = [];

    blogFiles.forEach((file) => {
        const slug = path.basename(file, path.extname(file));
        const article = getArticle(slug);
        if (article) {
            posts.push(article);
        }
    });

    const sortedPosts = posts.sort((a, b) => {
        const aPublishedOn = moment(a.meta.publishedOn, DATE_FORMAT, true);
        const bPublishedOn = moment(b.meta.publishedOn, DATE_FORMAT, true);
        return bPublishedOn.valueOf() - aPublishedOn.valueOf();
    });

    return sortedPosts;
});

interface Tag {
    tag: string;
    count: number;
}

const getAllTags = _.memoize((): Array<Tag> => {
    const articles = getAllArticles();
    let tags: Array<string> = [];
    articles.forEach((a) => {
        tags.push(...a.tags);
    });
    tags = [...Array.from(new Set(tags))];

    const tagList: Array<Tag> = tags.map((t) => {
        return {
            tag: t,
            count: articles.filter((a) => a.tags.includes(t)).length,
        };
    });

    return tagList;
});

const searchArticles = (
    query: string,
    tags: Array<string>
): Array<BlogArticle> => {
    const q = query.toLowerCase();
    const t = tags.map((t) => t.toLowerCase());

    let articles = getAllArticles();
    articles = articles.filter((article) => {
        if (article.title.toLowerCase().includes(q)) {
            return true;
        }
        if (article.content.toLowerCase().includes(q)) {
            return true;
        }
        if (article.meta.author.name.toLowerCase().includes(q)) {
            return true;
        }
        if (article.slug.toLowerCase().includes(q)) {
            return true;
        }
        if (article.meta.description.toLowerCase().includes(q)) {
            return true;
        }
        return false;
    });

    if (t.length > 0 && t[0].length > 0) {
        // If some tags are provided, only then filter by specific tags, otherwise don't
        articles = articles.filter((article) => {
            const articleTags = article.tags.map((t) => t.toLowerCase());
            if (t.some((item) => articleTags.includes(item))) {
                return true;
            }
            return false;
        });
    }
    return articles;
};

const getBlogAriclesList = (
    searchQuery: string = "",
    tags: Array<string> = [],
    page: number = 1
) => {
    const POSTS_PER_PAGE = 10;
    let articles = searchArticles(searchQuery, tags);
    const allTags = getAllTags();

    const totalPages = Math.max(Math.ceil(articles.length / POSTS_PER_PAGE), 1);

    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    articles = articles.slice(start, end);

    // Remove content from the response to reduce the payload size and manage bandwidth effeciently
    articles.map((a) => ({ ...a, content: "" }));

    return { articles, allTags, totalPages };
};

export { getAllArticles, searchArticles, getAllTags, getBlogAriclesList };

export type { BlogArticle, Tag };
