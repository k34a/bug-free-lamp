import { loadStripe } from "@stripe/stripe-js";

export async function checkout({src, mode, lineItems}){
    let stripePromise = null;
    const getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
        }
        return stripePromise;
    }

    const stripe = await getStripe();
    try{
        await stripe.redirectToCheckout({
            mode,
            lineItems,
            successUrl: `${window.location.origin}/donatesuccess`,
            cancelUrl: `${window.location.origin}${src}`,
        })
    } catch(e){
        console.log(e);
    }
}