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

    const allPostsMetaData = allPosts.map((post) => {
        return getPageMetaData(post);
    });
    return allPostsMetaData.filter((post) => {
        return Object.keys(post).length > 0;
    })
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
    const allPostsMetaData = allPosts.map((post) => {
        return getPageMetaData(post);
    });
    return allPostsMetaData.filter((post) => {
        return Object.keys(post).length > 0;
    })
};

const getPageMetaData = (post, authorDetails) => {
    try {
        const getTags = (tags) => {
            const allTags = tags.map((tag) => {
                return tag.name;
            });
            return allTags;
        };
        const metaData = {
            // compulsory properties
            id: post.id,
            title: post.properties.Title.title[0].plain_text,
            slug: post.properties.Slug.rich_text[0].plain_text,
            // optional properties
            tags: getTags(post.properties.Tags?.multi_select || []),
            seoKeywords: getTags(post.properties.SEOKeywords?.multi_select || []),
            description: post.properties.Description?.rich_text?.[0]?.plain_text || "",
            date: getToday(post.properties.Date?.date?.start || "2023-01-01"),
            publishedDate: post.properties.Date?.date?.start || "2023-01-01",
            author: authorDetails?.properties?.Name?.title?.[0]?.plain_text || "Anonymous Author",
            authorPic: authorDetails?.properties?.ProfilePic?.url || "",
            authorHref: authorDetails?.properties?.LinkedInProfile?.url || "",
            imageThumbnail: post?.properties?.ImageThumbnail?.url || "",
        };
        return metaData;
    } catch (e) {
        console.log(e);
        return {};
    }
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
    if (!response?.results?.[0]?.properties?.AuthorId?.number || response.results.length === 0){
        return {};
    }
    const authorDetails = await notion.databases.query({
        database_id: process.env.NOTION_AUTHOR_DATABASE_ID,
        filter: {
            property: "Id",
            number: {
                equals: response.results[0].properties.AuthorId.number,
            },
        },
    });
    if (!authorDetails || !authorDetails.results || authorDetails.results.length === 0) {
        return {};
    }
    return getPageMetaData(response.results[0], authorDetails.results[0]);
}

export const getReadMoreArticles = async (publishedDateString) => {
    if(!publishedDateString){
        return [];
    }
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

function getFirstImageFromMarkdown(markdownText) {
    const regex = /!\[.*\]\((.*)\)/;
    const match = regex.exec(markdownText);
    if (match) {
        return match[1];
    }
    return null;
}

export const getSingleBlogPostBySlug = async (slug) => {
    try {
        console.log("Fetching blog post for slug", slug);
        console.time("fetchBlogPostData")
        const metadata = await getMetadataForSinglePost(slug);
        const readMoreArticles = await getReadMoreArticles(metadata.publishedDate);
        const page_id = metadata.id.split('-').join('');
        const mdblocks = await n2m.pageToMarkdown(page_id);
        let mdString = n2m.toMarkdownString(mdblocks);
        const {minutes} = calculateReadingTime(mdString, {
            wordsPerMinute: 200,
        });
        mdString = addAltTextToImages(mdString, metadata?.title || "Title");
        const firstImage = getFirstImageFromMarkdown(mdString);
        const ret = {
            metadata,
            minutes,
            readMoreArticles,
            markdown: mdString,
            firstImage,
        };
        console.timeEnd("fetchBlogPostData")
        return ret;
    } catch (err) {
        console.timeEnd("fetchBlogPostData")
        console.log(slug)
        console.log(err)
        return null
    }
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