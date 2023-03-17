import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ThreeDots } from "react-loader-spinner";

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function RegistrationForm(params) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isNotSubmitted, setIsNotSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setIsInvalidEmail(false);
        setIsSubmitted(false);
        setIsNotSubmitted(false);
        if (!email || !validateEmail(email)) {
            setIsInvalidEmail(true);
        }
        else {
            const token = await recaptchaRef.current.executeAsync();
            recaptchaRef.current.reset();
            const data = {
                firstname: fname,
                lastname: lname,
                email,
                token
            };
            const response = await fetch("/api/registerwebinar", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            if (!response.ok) {
                setIsNotSubmitted(true)
            }
            else {
                setIsSubmitted(true);
                setFname("");
                setLname("");
                setEmail("");
            }
        }
        setLoading(false);
    }

    return (
        <div className="w-11/12 md:w-1/2 mx-auto py-12 bg-transparent">
            <div className="border-purple-500 py-6 px-5 border-4 bg-white">
                <div className="mb-12">
                    <h1 className="font-black text-4xl mb-6 capitalize text-slate-600">
                        Stylish Sustainability Webinar
                    </h1>
                    <h2 className="font-black text-2xl mb-6 capitalize text-slate-600">
                        A sneak-peak into the realm of circular fashion in Africa
                    </h2>
                    <p className="mb-6">
                        Join us as we explore the fascinating world of recycling clothing in Africa in a thought-provoking webinar! 
                        The prospects and difficulties of revamping the African fashion sector through cutting-edge recycling techniques will be introduced by the Larry Rowbs Foundation Team. 
                        <br /><br />Learn how recycling and reusing can lead to new opportunities for sustainable development and growth in addition to helping to reduce waste. Learn how to join this movement and engage with a global impact project. Anyone interested in sustainability, fashion, or the future of Africa must attend this webinar. Create a better future for the African fashion sector by registering right away!
                    </p>
                    <div className="text-xl mb-6">
                        <i className="fa fa-calendar"></i>
                        &nbsp;&nbsp;March 24th, 2023
                    </div>
                    <div className="text-xl mb-6">
                        <i className="fa fa-clock-o"></i>
                        &nbsp;&nbsp;09:00 AM EST
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <h2 className="my-6 text-slate-700 font-bold text-2xl">Register Now!</h2>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name *
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border-2 border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                                required={true}
                                onChange={(e) => setFname(e.target.value)}
                                value={fname}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name *
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border-2 border-purple-400 rounded py-3 px-4 leading-tight focus:outline-none"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                                required={true}
                                onChange={(e) => setLname(e.target.value)}
                                value={lname}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                E-mail *
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-gray-700 border-2 border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="email"
                                required={true}
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="name@domain.com"
                            />
                            {isInvalidEmail && <p className="text-red-500 text-xs italic">Please enter a valid email.</p>}
                        </div>
                    </div>
                    <ReCAPTCHA
                        size="invisible"
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}
                        ref={recaptchaRef}
                    />
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button
                                    className="shadow bg-white border-2 border-purple-400 text-gray-700 hover:bg-purple-500 hover:text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                            {loading && <ThreeDots color={'rgb(45 212 191)'} loading={loading} size={100} />}
                            <div className="md:w-2/3"></div>
                        </div>
                    </div>
                    {isSubmitted && <div className="mt-2 flex flex-wrap text-green-500">
                        Thank you for registering for the event! 
                        <small className="text-black">We have sent you an email invite. If you don&apos;t see it in your inbox, please check your spam folder.</small>
                    </div>}
                    {isNotSubmitted && <div className="flex flex-wrap text-red-500">
                        We are not able to register you for the event. Please contact us <a href="mailto:info@larryrowbs.com">here</a>.
                    </div>}
                </form>
            </div>
        </div>
    );
};
