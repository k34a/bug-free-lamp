'use server'

import Stripe from 'stripe'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export async function createCheckout(formData: FormData) {
    const hdrs = await headers()
    const origin =
        hdrs.get('origin') ||
        process.env.NEXT_PUBLIC_SITE_URL ||
        'http://localhost:3000'

    const inscribeRaw = formData.get('inscribe')
    const inscribe =
        inscribeRaw === 'on' || inscribeRaw === 'true' || inscribeRaw === '1'

    const stitchedRaw = (formData.get('stitched_name') || '') as string
    const stitched_name = inscribe ? String(stitchedRaw).slice(0, 50) : ''

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        success_url: `${origin}/donk?success=1`,
        cancel_url: `${origin}/donk?canceled=1`,
        metadata: {
            preorder: 'true',
            product: 'Don K Limited Edition',
            inscribe: String(inscribe),
            stitched_name,
        },
        line_items: [
            {
                price: 'price_1SFxdfKJJdoPmWsJ5yEuh66R', // prod: price_1SFxdfKJJdoPmWsJ5yEuh66R, dev: price_1SFxhHKJJdoPmWsJuvYtjgsm
                quantity: 1,
            },
        ],
        custom_fields: [
            {
                key: 'stitched_name',
                label: { type: 'custom', custom: 'Name on DonK' },
                type: 'text',
                optional: true,
            },
        ],
    })

    if (session.url) {
        redirect(session.url)
    }

    // In case Stripe didn't return a URL
    redirect(`${origin}/donk?error=checkout_unavailable`)
}
