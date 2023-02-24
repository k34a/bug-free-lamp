import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
    let stripePromise = null;

    const getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
        }
        return stripePromise;
    }

    const stripe = await getStripe();
    try{
        console.log(lineItems)
        await stripe.redirectToCheckout({
            mode: 'subscription',
            lineItems,
            successUrl: `${window.location.origin}/donatesuccess`,
            cancelUrl: `${window.location.origin}/donatetest`,
        })
    } catch(e){
        console.log(e);
    }
}