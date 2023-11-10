import React from "react";

const getIdFromHeading = (heading) => {
    return heading
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
};

const parseHeadingFromMDString = (inputArray, index) => {
    // Use a regular expression to check the pattern and capture the number of hashes
    const pattern = /^([#]{1,6})\s(.*)/;
    const patternAlternateHeading1 = /^(=)\1+$/;
    const emphasisPattern = /[*_]/g;
    const match = inputArray[index].trim().match(pattern);
    if (match) {
        // Return an object with the count of hashes and the remaining text
        return {
            hashCount: match[1].length, // Length of the captured hash symbols
            text: match[2].replace(emphasisPattern, ""), // The remaining text (excluding the hash symbols and space)
        };
    } else if (
        index < inputArray.length - 1 &&
        inputArray[index + 1].trim().match(patternAlternateHeading1)
    ) {
        return {
            hashCount: 1,
            text: inputArray[index].trim().replace(emphasisPattern, ""),
        };
    } else {
        return false; // Return null if the pattern doesn't match
    }
};

const getHeadings = (arr, currentIndex, currentLevel, currentHashes) => {
    const heads = [];
    for (let i = currentIndex; i < arr.length; i++) {
        const heading = parseHeadingFromMDString(arr, i);
        if (!heading) {
            continue;
        } else {
            if (currentHashes === undefined) {
                currentHashes = heading.hashCount;
            }
            if (heading.hashCount < currentHashes) {
                // i.e. the current heading is a level up, so this level is complete, and we need to return
                return {
                    heads,
                    currentIndex: i,
                };
            } else if (heading.hashCount === currentHashes) {
                // i.e. we found another heading on the current level
                heads.push({
                    text: heading.text,
                    id: getIdFromHeading(heading.text),
                    level: currentLevel,
                    subHeadings: [],
                });
            } else if (heading.hashCount > currentHashes) {
                //  i.e. we found a next level, and should try to find more such subHeadings
                const subHeadings = getHeadings(
                    arr,
                    i,
                    currentLevel + 1,
                    heading.hashCount
                );
                // add these subHeadings to the last added heading
                heads[heads.length - 1].subHeadings = subHeadings.heads;
                // start where we left off
                i = subHeadings.currentIndex - 1;
            }
        }
    }
    return {
        heads,
        currentIndex: arr.length,
    };
};

const getFormattedHeadings = (heads, props) => {
    if (heads.length === 0) {
        return {
            formattedHeading: <></>,
            isFocussable: false,
        };
    }

    let isAnyHeadFocussed = false;

    const listItems = (
        <>
            {heads.map((head) => {
                const { formattedHeading: subHeadings, isFocussable } =
                    getFormattedHeadings(head.subHeadings, props);

                const isCurrentHeadFocussed = Boolean(
                    props.focussedHeadingId &&
                        props.focussedHeadingId === head.id
                );

                isAnyHeadFocussed =
                    isAnyHeadFocussed || isCurrentHeadFocussed || isFocussable;

                const focussedClasses =
                    isCurrentHeadFocussed || isFocussable
                        ? "bg-green-200 dark:bg-green-700"
                        : "";

                return (
                    <li key={head.id} id={head.id}>
                        <span
                            onClick={() => {
                                window.location.hash = `#${head.id}`;
                            }}
                            className={`cursor-pointer ${focussedClasses}`}
                        >
                            {head.text}
                        </span>
                        {subHeadings}
                    </li>
                );
            })}
        </>
    );

    return {
        formattedHeading: (
            <ol className="list-outside ml-4 list-disc"> {listItems}</ol>
        ),
        isFocussable: Boolean(isAnyHeadFocussed),
    };
};

export { getIdFromHeading, getHeadings, getFormattedHeadings };
