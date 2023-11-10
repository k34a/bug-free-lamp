import React from "react";
import { getIdFromHeading, getHeadings, getFormattedHeadings } from "./fns";

const Toc = (props) => {
    let mdLines = props.mdText.split("\n");
    const headings = getHeadings(mdLines, 0, 1).heads;
    return getFormattedHeadings(headings, props).formattedHeading;
};

export default Toc;

export { getIdFromHeading };
