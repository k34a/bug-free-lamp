import { calculateReadingTime } from "markdown-reading-time";

const { Client } = require("@notionhq/client")
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPublished = async () => {
    let allPosts = [];
    let hasMore = true;
    let startCursor = undefined;

    while (hasMore) {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: "Published",
                checkbox: {
                    equals: true,
                },
            },
            start_cursor: startCursor,
            page_size: 100,
        });

        allPosts = [...allPosts, ...response.results];
        hasMore = response.has_more;
        startCursor = response.next_cursor;
    }

    return allPosts.map((post) => {
        return getPageMetaData(post);
    });
};


export const getAllTags = async () => {
    let allPosts = await getAllPublished();
    let allTags = allPosts.map((ele)=>(ele.tags));
    return Array.from(new Set(allTags.flatMap(item => item)));
};

export const getTopPublished = async (n, tags=null) => {
    let tagFilter = {
        property: "Tags",
        multi_select: {
            contains: tags,
        },
    }
    let publishFilter = {
        property: "Published",
        checkbox: {
            equals: true,
        },
    }
    let fullFilter = {
        and: [
            tagFilter,
            publishFilter
        ]
    }
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: tags? fullFilter: publishFilter,
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
        page_size: n
    });
    const allPosts = posts.results;

    return allPosts.map((post) => {
        return getPageMetaData(post);
    });
};

const getPageMetaData = (post) => {
    const getTags = (tags) => {
        const allTags = tags.map((tag) => {
            return tag.name;
        });
        return allTags;
    };
    return {
        id: post.id,
        title: post.properties.Title.title[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select),
        description: post.properties.Description.rich_text[0].plain_text,
        date: getToday(post.properties.Date?.date?.start || "2023-01-01"),
        publishedDate: post.properties.Date?.date?.start || "2023-01-01",
        slug: post.properties.Slug.rich_text[0].plain_text,
        author: post?.properties?.Author?.rich_text?.[0]?.plain_text || "Anonymous Author",
        authorHref: post?.properties?.Author?.rich_text?.[0]?.href || "",
    };
};

function getToday(datestring) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date = new Date();

    if (datestring) {
        date = new Date(datestring);
    }

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;

    return today;
};


export const getMetadataForSinglePost = async (slug) => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    });
    if(!response || !response.results || response.results.length === 0){
        return {};
    }
    return getPageMetaData(response.results[0]);
}

export const getReadMoreArticles = async (publishedDateString) => {
    const publishedDate = new Date(publishedDateString)
    const beforeResponse = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            and: [
                {
                    property: "Date",
                    date: {
                        before: publishedDate.toISOString(),
                    },
                },
                {
                    property: "Published",
                    checkbox: {
                        equals: true,
                    },
                },
            ],
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
        page_size: 3,
    });
    const beforeArticles = beforeResponse?.results?.splice(0, 3) || []; // assuming there is only one matching article
    let readMoreArticles = [...beforeArticles]
    
    if(readMoreArticles.length < 3){
        const afterResponse = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                and: [
                    {
                        property: "Date",
                        date: {
                            after: publishedDate.toISOString(),
                        },
                    },
                    {
                        property: "Published",
                        checkbox: {
                            equals: true,
                        },
                    },
                ],
            },
            sorts: [
                {
                    property: "Date",
                    direction: "ascending",
                },
            ],
            page_size: 3,
        });
        const howManyArticlesLess = 3 - readMoreArticles.length;
        const afterArticle = afterResponse?.results?.splice(0, howManyArticlesLess) || [];
        readMoreArticles = [...afterArticle, ...readMoreArticles];
    }
    return readMoreArticles.map(getPageMetaData);
}

const donationText = `## Your Support is all we need.


[Our foundation](https://larryrowbsfoundation.org/) aims to make the fashion industry more environmentally friendly and less exploitative towards its workers. We plan to empower the people of Africa and boost its economy.


But arriving at our target needs more than simple planning. It needs support from people. Larry Rowbs Foundation invites you to support us and our cause with any of the following:

1. Helping us raise funds to set up the recycling facility in Uganda. Your [donations ](https://larryrowbsfoundation.org/donate)will go a long way.
2. [Join our team](https://larryrowbsfoundation.org/join/). Our team needs environment activists, researchers, designers, content writers, and social media managers. You are most welcome if you want to bring any other talent that will help us.
3. Help us [spread the word](https://www.instagram.com/thelarryrowbsfoundation/).
4. Purchase recycled clothes, and recycle old clothes as much as possible!`

export const getSingleBlogPostBySlug = async (slug) => {
    const metadata = await getMetadataForSinglePost(slug);
    const readMoreArticles = await getReadMoreArticles(metadata.publishedDate);
    const page_id = metadata.id.split('-').join('');
    const mdblocks = await n2m.pageToMarkdown(page_id);
    let mdString = n2m.toMarkdownString(mdblocks);
    const {minutes} = calculateReadingTime(mdString);
    mdString = addAltTextToImages(mdString, metadata?.title || "Title") + donationText;
    const ret = {
        metadata,
        minutes,
        readMoreArticles,
        markdown: mdString,
    };
    return ret;
}

export const addAltTextToImages = (markdown, altText) => {
    const regex = /!\[([^\]]*)\]\(([^\)]+)\)/g;
    let counter = 1;
    markdown = markdown.replace(regex, (match, p1, p2) => {
        if (p1.trim() === '') {
            return `![${altText} ${counter++}](${p2})`;
        } else {
            return match;
        }
    });
    return markdown;
}

export const generateSlug = (s) => {
    if(!s || typeof s !== "string"){
        return "";
    }
    let str = s.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    str = str
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    return str;
};