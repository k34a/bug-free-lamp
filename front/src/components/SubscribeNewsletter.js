import Link from "next/link";
import { useState } from "react";

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function SubscribeNewsletter() {
    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [error, setError] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    async function handleSubscriberSubmit(e){
        e.preventDefault();
        setInvalidEmail(false);
        setError("");
        setIsSubscribed(false);
        if(!email || !validateEmail(email)){
            setInvalidEmail(true);
        }
        else{
            const subscriber = {email};
            const response = await fetch("/api/subscribe", {
                method: "POST",
                body: JSON.stringify(subscriber),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            if (!response.ok) {
                setError(json.error.message);
            }
            else{
                setIsSubscribed(true);
                setEmail("");
            }
        }
    }
    return (
        <section className="bg-black">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                        JOIN THE MOVEMENT!
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-gray-300 md:mb-12 sm:text-xl">
                        Stay up to date with the roadmap progress, announcements and events conducted by signing up for our weekly newsletter.
                    </p>
                    <form onSubmit={handleSubscriberSubmit}>
                        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-300">Email address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input 
                                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-blue-500 focus:border-blue-500" 
                                    placeholder="What's your email?" 
                                    type="text" 
                                    id="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={true}
                                >
                                </input>
                            </div>
                            <div>
                                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        {invalidEmail && <div className="mx-auto max-w-screen-sm text-sm text-left text-red-500 newsletter-form-footer">Please enter a valid email.</div>}
                        <div className="mx-auto max-w-screen-sm text-sm text-left text-red-500 newsletter-form-footer">{error}</div>
                        {isSubscribed && <div className="mx-auto max-w-screen-sm text-sm text-left text-green-500 newsletter-form-footer">Thank you for subscribing.</div>}
                        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">
                            We don&#39;t share emails with anyone.&nbsp; 
                            <Link href="/privacypolicy" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read our Privacy Policy</Link>.
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}