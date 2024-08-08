"use client";

import React from "react";
import FAQItem from "./FAQItem";
import { useState } from "react";

interface FAQProps {
    heading: string;
    description: string;
    faqs: Array<{
        ques: string;
        ans: JSX.Element | string;
    }>;
}

export default function FAQ(props: FAQProps) {
    const [isOpen, setIsOpen] = useState(-1);

    return (
        <div className="my-12 w-11/12 max-w-screen-sm mx-auto grid gap-5">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-center title-font text-gray-900 mb-4">
                    {props.heading}
                </h2>
                <p className="text-base leading-relaxed text-center">
                    {props.description}
                </p>
            </div>
            <div className="grid grid-cols-1 divide-y-2">
                {props.faqs.map((ele, index) => {
                    return (
                        <FAQItem
                            {...ele}
                            question={ele.ques}
                            answer={ele.ans}
                            isOpen={isOpen == index}
                            setIsOpen={setIsOpen}
                            faqindex={index}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}
