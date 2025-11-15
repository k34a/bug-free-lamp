'use client'

import React from 'react'
import { Accordion, Text, Title } from '@mantine/core'
import classes from './FAQSimple.module.css'

interface FAQProps {
    heading: string
    description: string
    faqs: Array<{
        ques: string
        ans: React.JSX.Element | string
    }>
}

export default function FAQ(props: FAQProps) {
    return (
        <>
            <Title order={2}>{props.heading}</Title>
            <Text c="dimmed'">{props.description}</Text>
            <Accordion variant="separated">
                {props.faqs.map((ele, idx) => {
                    return (
                        <Accordion.Item
                            key={idx}
                            className={classes.item}
                            value="reset-password"
                        >
                            <Accordion.Control>{ele.ques}</Accordion.Control>
                            <Accordion.Panel>{ele.ans}</Accordion.Panel>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </>
    )
}
