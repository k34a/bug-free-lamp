'use client'
import { useFormStatus } from 'react-dom'
import { useState } from 'react'
import { createCheckout } from '@/components/donk/actions'

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
        >
            {pending ? 'Starting checkout…' : 'Pre-order Don K - $50'}
        </button>
    )
}

export default function PreorderForm() {
    const [inscribe, setInscribe] = useState(false)
    const [name, setName] = useState('')

    return (
        <form action={createCheckout} className="w-full space-y-4">
            <div className="flex items-center gap-3">
                <input
                    id="inscribe"
                    name="inscribe"
                    type="checkbox"
                    checked={inscribe}
                    onChange={(e) => setInscribe(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label
                    htmlFor="inscribe"
                    className="text-sm font-medium text-gray-800"
                >
                    Inscribe my name on the Don K (optional)
                </label>
            </div>

            {inscribe ? (
                <div>
                    <label
                        htmlFor="stitched_name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name to stitch (max 50 chars)
                    </label>
                    <input
                        id="stitched_name"
                        name="stitched_name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ayo"
                        maxLength={50}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
            ) : null}

            <SubmitButton />

            <p className="text-xs text-gray-500">
                Pre-order reserves your limited edition. Charged today; shipping
                timeline updates will be sent via email.
            </p>
        </form>
    )
}
