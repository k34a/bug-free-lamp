import { adminPanelLink, ORG_ID } from '@/config/config'
import { supabaseAdmin } from '@/lib/db/supabase'
import { FormFillingService } from '@k34a/forms'
import { FillMe } from './fill-me'
import { Box, Text, Title } from '@mantine/core'

const NewsletterSubscribe = async () => {
    const formType = 'newsletter_subscribe'
    let schema
    try {
        schema = await new FormFillingService(
            adminPanelLink,
            ORG_ID,
            supabaseAdmin
        ).getFormSchema(formType)
    } catch (err) {
        return null
    }

    return (
        <Box maw={800} mx="auto" px="md" py="xl" bg="green.2" bdrs="md">
            <Title order={2}>{schema.title}</Title>
            <Text>{schema.description}</Text>
            <FillMe schema={schema} formType={formType} />
        </Box>
    )
}

export default NewsletterSubscribe
