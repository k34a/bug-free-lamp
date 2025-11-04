import OurTeam from '@/components/Team/OurTeam'
import { type Metadata } from 'next'
import { Box, Text, Title } from '@mantine/core'
import { FillMe } from '@/components/fill-me'
import { adminPanelLink, ORG_ID } from '@/config/config'
import { supabaseAdmin } from '@/lib/db/supabase'
import { notFound } from 'next/navigation'
import { FormFillingService } from '@k34a/forms'

export const metadata: Metadata = {
    title: 'Join us - Larry Rowbs Foundation',
    description:
        'The members of the Larry Rowbs Foundation are guided by their core values, which emphasize community, collaboration, and love. ... Join our Family.',
}

export default async function Join() {
    const formType = 'join_us'
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
        <main>
            <Box maw={800} mt={80} mx="auto" px="md" py="xl">
                <Title order={2}>{schema.title}</Title>
                <Text>{schema.description}</Text>
                <FillMe formType={formType} schema={schema} />
            </Box>
            <OurTeam />
        </main>
    )
}
