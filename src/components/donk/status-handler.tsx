import { useSearchParams } from 'next/navigation'
import CheckoutSuccessModal from './success'
import CheckoutCancelledModal from './cancelled'
import CheckoutErrorModal from './error'

export default function CheckoutStatusHandler() {
    const searchParams = useSearchParams()
    const success = searchParams.get('success')
    const canceled = searchParams.get('canceled')
    const error = searchParams.get('error')

    if (success) return <CheckoutSuccessModal />
    if (canceled) return <CheckoutCancelledModal />
    if (error === 'checkout_unavailable') return <CheckoutErrorModal />

    return null
}
