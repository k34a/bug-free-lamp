import React from "react";
import FAQItem from "./FAQItem";
import { useState } from "react";

export default function FAQ(props) {
    const [isOpen, setIsOpen] = useState(-1);
    return (
        <div className="my-12">
            <h2 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
                {props.heading}
            </h2>
            <p className="text-base leading-relaxed w-4/5 xl:w-2/4 lg:w-3/4 m-auto text-center">
                {props.description}
            </p>
            <div className="flex flex-wrap w-11/12 sm:w-9/12 lg:w-3/5 m-auto sm:mb-2">
                <div className="w-full px-4 py-2">
                    {props.faq.map((ele, index) => {
                        return (
                            <FAQItem
                                question={ele.ques}
                                answer={ele.ans}
                                isopen={isOpen == index}
                                setIsOpen={setIsOpen}
                                faqindex={index}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
