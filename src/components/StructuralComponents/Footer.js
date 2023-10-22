import { validateEmail } from "@/lib/commonFrontEndFns";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import { useRef, useState } from "react";
import { ImLeaf } from "react-icons/im";
import { ThreeDots } from "react-loader-spinner";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [hcaptchaVisible, setHcaptchaVisible] = useState(false);
    const [error, setError] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const hcaptchaRef = useRef();
    const [token, setToken] = useState("");
    const [loading, setloading] = useState(false);

    async function handleHCaptchaSubscriberSubmit(token) {
        setloading(true);
        setToken(token);
        setError("");
        setIsSubscribed(false);
        if (!email || !validateEmail(email)) {
            setError("Please enter a valid email.");
        }
        else {
            const subscriber = { email, token };
            const response = await fetch("/api/subscribe", {
                method: "POST",
                body: JSON.stringify(subscriber),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            hcaptchaRef.current.resetCaptcha();
            setToken("");
            if (!response.ok) {
                setError(json.error.message)
            }
            else {
                setIsSubscribed(true);
                setEmail("");
            }
        }
        setHcaptchaVisible(false);
        setToken("");
        setloading(false);
    }

    return (
        <section className="bg-black py-8 space-y-8 text-white break-words">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="mx-auto my-12 max-w-screen-md text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                        JOIN THE MOVEMENT!
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-gray-300 md:mb-12 sm:text-xl">
                        Stay up to date with the roadmap progress, announcements and events conducted by signing up for our weekly newsletter.
                    </p>
                    <form>
                        {hcaptchaVisible ?
                            <div className="flex items-center justify-center mb-3">
                                <HCaptcha
                                    ref={hcaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                                    onVerify={token => handleHCaptchaSubscriberSubmit(token)}
                                    onExpire={e => setToken("")}
                                    onClose={e => {
                                        setHcaptchaVisible(false);
                                        setToken("");
                                    }}
                                />
                            </div>
                            :
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
                                    <button
                                        type="submit"
                                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed"
                                        disabled={loading}
                                        onClick={e => setHcaptchaVisible(true)}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        }
                        <div className="items-center flex justify-center">{loading && <ThreeDots color={'rgb(45 212 191)'} loading={loading} size={100} />}</div>
                        {error && <div className="mx-auto max-w-screen-sm text-sm text-left text-red-500 newsletter-form-footer">{error}</div>}
                        {isSubscribed && <div className="mx-auto max-w-screen-sm font-bold text-left text-green-400 newsletter-form-footer">Thank you for subscribing.</div>}
                    </form>
                </div>
            </div>
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/company/larryrowbsfoundation/" className="mr-6 text-slate-200" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/thelarryrowbsfoundation/" className="mr-6 text-slate-200" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/larryrowbsfoundation/" className="mr-6 text-slate-200" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
            <div className='flex v-screen justify-center items-center'>
                <a href="https://www.websitecarbon.com/" target="_blank" rel="noopener noreferrer" className="decoration-green-300">
                    <div className="border-green-300 border-4 text-green-300 font-medium inline-flex items-center px-4 py-3 rounded-lg w-full">
                        <ImLeaf size={24} className="mr-2" />
                        This website emits 0.38g of CO2
                    </div>
                </a>
            </div>
            <div className="flex justify-center">
                <Link href="/terms" className="mr-6 text-slate-200 text-sm">
                    Terms & Conditions
                </Link>
            </div>
            <div className="text-center px-6 text-sm">
                <span>&copy; Copyright 2019-{new Date().getFullYear()} </span>
                <Link className="text-yellow-200" href="/">Larry Rowbs Foundation</Link>
            </div>
            <div className="text-center px-3 text-sm leading-relaxed">
                <p>
                    Website by <a className="text-yellow-200" href="https://www.instagram.com/ggsaksham/" target="_blank" rel="noreferrer noopenner">ggsaksham</a>
                </p>
            </div>
        </section>
    );
}