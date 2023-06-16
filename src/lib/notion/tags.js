import { getAllPublished } from "./blog.js";

export const getAllTags = async () => {
    let allPosts = await getAllPublished();
    let allTags = allPosts.map((ele) => (ele.tags));
    return Array.from(new Set(allTags.flatMap(item => item)));
};