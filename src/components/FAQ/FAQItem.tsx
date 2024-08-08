"use client";

import React from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./Commons.module.css";

interface FaqItem {
    isOpen: boolean;
    faqindex: number;
    setIsOpen: (val: number) => void;
    question: string;
    answer: JSX.Element | string;
}

export default function FAQItem(props: FaqItem) {
    return (
        <div
            className={`p-2 rounded border-2 border-gray-300 my-6 ${
                props.isOpen ? "bg-gray-200" : ""
            }`}
        >
            <h3
                className="font-semibold cursor-pointer"
                onClick={(e) => {
                    if (props.isOpen) props.setIsOpen(-1);
                    else props.setIsOpen(props.faqindex);
                }}
            >
                <BsChevronDown
                    size={20}
                    className={`inline mr-2 ${styles.rotateIcon} ${
                        props.isOpen ? "" : styles.down
                    }`}
                />
                {props.question}
            </h3>
            <p
                className={`word-break ${
                    props.isOpen ? "block mx-2 sm:mx-6 my-6" : "hidden"
                }`}
            >
                {props.answer}
            </p>
        </div>
    );
}
