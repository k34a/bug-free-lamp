import FAQ from '@/components/FAQ/FAQ'
import { Metadata } from 'next'
import { faqs } from './cfg'
import { IconHome, IconMail, IconPhone } from '@tabler/icons-react'
import { FormFillingService } from '@k34a/forms'
import { adminPanelLink, ORG_ID } from '@/config/config'
import { supabaseAdmin } from '@/lib/db/supabase'
import { notFound } from 'next/navigation'
import { Box, Text, Title } from '@mantine/core'
import { FillMe } from '@/components/fill-me'

export const metadata: Metadata = {
    title: 'Contact us - Larry Rowbs Foundation',
    description:
        'Get in touch. Have a question? Send us a note using the form below and someone from the Larry Rowbs Foundation team will be in touch soon.',
}

export default async function Contact() {
    const formType = 'contact_us'
    let schema
    try {
        schema = await new FormFillingService(
            adminPanelLink,
            ORG_ID,
            supabaseAdmin
        ).getFormSchema(formType)
    } catch (err) {
        console.error(err)
        notFound()
    }
    return (
        <>
            <div>
                <Box maw={800} mx="auto" px="md" py="xl">
                    <Title order={2}>{schema.title}</Title>
                    <Text>{schema.description}</Text>
                    <FillMe formType={formType} schema={schema} />
                </Box>
                <FAQ
                    heading="Frequently Asked Questions (FAQs)"
                    description="The most common questions about how our foundation works and what we do."
                    faqs={faqs}
                />
                <div className="mx-6 py-10 text-center md:text-left flex items-center justify-center">
                    <div>
                        <h2 className="text-3xl mb-6 font-bold">
                            Contact Information
                        </h2>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start gap-3 mb-4">
                            <IconHome size={24} />
                            2459 Sugar Bottom Rd Furlong, Pennsylvania United
                            States - 18925
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start gap-3 mb-4">
                            <IconMail size={24} />
                            info@larryrowbsfoundation.org
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start gap-3 mb-4">
                            <IconPhone size={24} />+ 01 605 954 8885
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
