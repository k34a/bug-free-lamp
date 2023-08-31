import notion from './notion';

const getAuthorsDetails = (authorObj) => {
    try {
        const metaData = {
            id: authorObj.id,
            author: authorObj?.properties?.Name?.title?.[0]?.plain_text || "Anonymous Author",
            about: authorObj.properties.About?.rich_text?.[0]?.plain_text || "",
            authorPic: authorObj?.properties?.ProfilePic?.url || "",
            authorLinkedIn: authorObj?.properties?.LinkedInProfile?.url || "",
            authorId: authorObj?.properties?.Id?.number,
        };
        return metaData;
    } catch (e) {
        console.log(e);
        return {};
    }
};

export const getAllAuthors = async () => {
    let allAuthors = [];
    let hasMore = true;
    let startCursor = undefined;

    while (hasMore) {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_AUTHOR_DATABASE_ID,
            start_cursor: startCursor,
            page_size: 100,
        });
        allAuthors = [...allAuthors, ...response.results];
        hasMore = response.has_more;
        startCursor = response.next_cursor;
    }

    const allPostsMetaData = allAuthors.map((author) => {
        return getAuthorsDetails(author);
    });
    return allPostsMetaData.filter((author) => {
        return Object.keys(author).length > 0 && author.authorId > 0;
    })
};

export const getDetailsForAuthor = async (slug) => {
    const slugInt = parseInt(slug);
    if (!slugInt) {
        return {};
    }
    const authorDetails = await notion.databases.query({
        database_id: process.env.NOTION_AUTHOR_DATABASE_ID,
        filter: {
            property: "Id",
            number: {
                equals: slugInt,
            },
        },
    });
    if (!authorDetails || !authorDetails.results || authorDetails.results.length === 0) {
        return {};
    }
    return getAuthorsDetails(authorDetails.results[0]);
}