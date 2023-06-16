export function getToday(datestring) {
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

export function getFirstImageFromMarkdown(markdownText) {
    const regex = /!\[.*\]\((.*)\)/;
    const match = regex.exec(markdownText);
    if (match) {
        return match[1];
    }
    return null;
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
    if (!s || typeof s !== "string") {
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