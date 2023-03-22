import { useState } from "react";
import { BsChevronDown } from 'react-icons/bs';
import styles from '@/styles/Commons.module.css'

export default function FAQItem(props){
    return (
        <div className="p-2 rounded border-2 border-gray-700 my-6">
            <h3 
                className="font-semibold cursor-pointer" 
                onClick={(e) => { 
                    if(props.isopen)
                        props.setIsOpen(-1)
                    else
                        props.setIsOpen(props.faqindex)
                }}
            >
                <BsChevronDown 
                    size={20} 
                    className={`inline mr-2 ${styles.rotateIcon} ${props.isopen ? "" : styles.down}`}
                />
                {props.question}
            </h3>
            <p className={`word-break ${props.isopen ? "block mx-2 sm:mx-6 my-6" : "hidden"}`}>
                {props.answer}
            </p>
        </div>
    );
}