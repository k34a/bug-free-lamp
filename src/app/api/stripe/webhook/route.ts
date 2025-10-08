import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendTelegramMessage } from '@/lib/telegram'

async function getRawBody(req: NextRequest): Promise<Buffer> {
    const reader = req.body?.getReader()
    if (!reader) return Buffer.from('')

    const chunks: Uint8Array[] = []
    let done = false

    while (!done) {
        const { value, done: readerDone } = await reader.read()
        if (value) chunks.push(value)
        done = readerDone
    }

    return Buffer.concat(chunks)
}

export async function POST(req: NextRequest) {
    const rawBody = await getRawBody(req)

    const signature = req.headers.get('stripe-signature') || ''
    const secret = process.env.STRIPE_WEBHOOK_SECRET!

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    let event: Stripe.Event
    try {
        event = stripe.webhooks.constructEvent(rawBody, signature, secret)
    } catch (err: any) {
        console.error(
            '[Stripe] Webhook signature verification failed:',
            err?.message
        )
        return new NextResponse(`Webhook Error: ${err?.message}`, {
            status: 400,
        })
    }

    try {
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session
            // stitched name from metadata or custom field
            const mdName =
                (session.metadata && session.metadata['stitched_name']) || ''
            const cfName =
                Array.isArray((session as any).custom_fields) &&
                (session as any).custom_fields.find(
                    (f: any) => f.key === 'stitched_name'
                )?.text?.value

            const stitchedName = mdName || cfName || ''
            const email =
                session.customer_details?.email ||
                session.customer_email ||
                'unknown'
            const amount = (session.amount_total || 0) / 100
            const currency = (session.currency || 'usd').toUpperCase()
            const inscribe =
                (session.metadata && session.metadata['inscribe']) || 'false'

            const text =
                `<b>Don K Pre-order Confirmed</b>\n` +
                `• Amount: <b>${amount} ${currency}</b>\n` +
                `• Email: <code>${email}</code>\n` +
                `• Inscribe: <b>${inscribe}</b>\n` +
                (stitchedName
                    ? `• Stitched Name: <code>${stitchedName}</code>\n`
                    : '') +
                `• Session: <code>${session.id}</code>\n` +
                `• Preorder: <b>${
                    session.metadata?.preorder === 'true' ? 'Yes' : 'No'
                }</b>`

            await sendTelegramMessage(text)
        }

        return NextResponse.json({ received: true })
    } catch (err: any) {
        console.error('[Stripe] Webhook handler error:', err)
        return new NextResponse('Webhook handler error', { status: 500 })
    }
}
