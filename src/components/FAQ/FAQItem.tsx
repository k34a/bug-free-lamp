'use client'

import React from 'react'
import styles from './Commons.module.css'
import { IconChevronDown } from '@tabler/icons-react'

interface FaqItem {
    isOpen: boolean
    faqindex: number
    setIsOpen: (val: number) => void
    question: string
    answer: React.JSX.Element | string
}

export default function FAQItem(props: FaqItem) {
    return (
        <div className={`rounded ${props.isOpen ? 'bg-gray-200' : ''}`}>
            <h3
                className="p-2 sm:p-4 font-semibold cursor-pointer"
                onClick={(e) => {
                    if (props.isOpen) props.setIsOpen(-1)
                    else props.setIsOpen(props.faqindex)
                }}
            >
                <IconChevronDown
                    size={20}
                    className={`inline mr-2 ${styles.rotateIcon} ${
                        props.isOpen ? '' : styles.down
                    }`}
                />
                {props.question}
            </h3>
            <p
                className={`word-break ${
                    props.isOpen ? 'block mx-2 sm:mx-6 mb-6' : 'hidden'
                }`}
            >
                {props.answer}
            </p>
        </div>
    )
}
