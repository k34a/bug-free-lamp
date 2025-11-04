import { adminPanelLink, ORG_ID } from '@/config/config'
import { supabaseAdmin } from '@/lib/db/supabase'
import { sendTelegramMessage } from '@/lib/telegram'
import { FormFillingService } from '@k34a/forms'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

function isPlainObject(input: unknown): input is Record<string, any> {
    return typeof input === 'object' && input !== null && !Array.isArray(input)
}

async function getSourceDetails() {
    const hdrs = await headers()
    const userAgent = hdrs.get('user-agent') ?? null
    const xff = hdrs.get('x-forwarded-for')
    const realIp = hdrs.get('x-real-ip')
    const sourceIp = xff?.split(',')[0].trim() ?? realIp ?? null
    return { sourceIp, userAgent }
}

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ formType: string }> }
) {
    const { formType } = await params

    let body: unknown
    try {
        body = await request.json()
    } catch {
        return NextResponse.json(
            { error: 'Invalid JSON body' },
            { status: 400 }
        )
    }

    if (!isPlainObject(body)) {
        return NextResponse.json(
            { error: 'Invalid request format. Expected a key-value object.' },
            { status: 400 }
        )
    }

    try {
        const service = new FormFillingService(
            adminPanelLink,
            ORG_ID,
            supabaseAdmin,
            async (msg) => {
                try {
                    await sendTelegramMessage(msg)
                } catch (error) {
                    console.log(error)
                }
            }
        )

        const userDetails = await getSourceDetails()
        const result = await service.fillForm(
            formType,
            body,
            userDetails.sourceIp ?? '',
            userDetails.userAgent ?? ''
        )

        return NextResponse.json(result)
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || 'Internal Server Error' },
            { status: 500 }
        )
    }
}
