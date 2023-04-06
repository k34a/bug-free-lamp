import { titleCase, validateEmail } from "@/lib/commonFrontEndFns";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import { useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function RegistrationForm(props) {
    const defaultsParams = {
        firstName: "",
        lastName: "",
        email: "",
    }
    const [invalidFields, setInvalidFields] = useState({});
    const [formData, setFormData] = useState(defaultsParams);
    const [token, setToken] = useState("");
    const hcaptchaRef = useRef();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("")
    const [loading, setloading] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setloading(true);
        setInvalidFields({});
        setIsSubmitted(false);
        setError("");
        const invalidSubmittedFields = {}
        if (!formData.email || !validateEmail(formData.email)) {
            invalidSubmittedFields["email"] = true;
        }
        if (token && Object.keys(invalidSubmittedFields).length == 0) {
            const updatedFormData = { ...formData, token }
            const response = await fetch("/api/registerwebinar", {
                method: "POST",
                body: JSON.stringify(updatedFormData),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            hcaptchaRef.current.resetCaptcha();
            setToken("");
            if (!response.ok) {
                setError("Unable to process your request. Please try again later.")
            }
            else {
                setIsSubmitted(true);
                setSubmittedEmail(formData.email);
                setFormData(defaultsParams);
            }
        }
        else if (!token) {
            setError("Please verify the captcha.")
        }
        else {
            setError("Some fields above are invalid. Please correct them and re-submit.")
        }
        setInvalidFields(invalidSubmittedFields)
        setloading(false);
    }

    const updateField = (e, makeTitleCase = false) => {
        let value = e.target.value;
        if (makeTitleCase) {
            value = titleCase(value);
        }
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }

    const webinarForm = (
        <form onSubmit={handleSubmit}>
            <h2 className="my-6 text-slate-700 font-bold text-2xl">Register Now!</h2>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2">
                        First Name *
                    </label>
                    <input
                        className="appearance-none block w-full bg-white text-gray-700 border-2 border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        required={true}
                        onChange={(e) => updateField(e, true)}
                        value={formData.firstName}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2">
                        Last Name *
                    </label>
                    <input
                        className="appearance-none block w-full bg-white text-gray-700 border-2 border-purple-400 rounded py-3 px-4 leading-tight focus:outline-none"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        required={true}
                        onChange={(e) => updateField(e, true)}
                        value={formData.lastName}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2">
                        E-mail *
                    </label>
                    <input
                        className="appearance-none block w-full bg-white text-gray-700 border-2 border-purple-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                        name="email"
                        required={true}
                        type="email"
                        onChange={(e) => updateField(e)}
                        value={formData.email}
                        placeholder="your@email.com"
                    />
                    {invalidFields.email && <p className="text-red-500 italic">Please enter a valid email.</p>}
                </div>
            </div>
            <HCaptcha
                ref={hcaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                onVerify={token => setToken(token)}
                onExpire={e => setToken("")}
            />
            <div className="flex flex-wrap my-6 -mx-3">
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
                <p>You&apos;re registered!</p>
                <p className="text-black text-opacity-80 text-sm">We sent you an invite at <b>{submittedEmail}</b>. If you don&apos;t see it in your inbox, please check your spam folder.</p>
            </div>}
            {error && <div className="flex flex-wrap text-red-500">{error}</div>}
        </form>
    );

    const webinarEnded = (
        <div>
            <p className="text-lg font-bold">This form is no longer accepting responses.</p>
            <br />
            <p className="text-lg font-bold">Kindly share your <Link href={props.data.surveyForm} className="text-purple-700">feedback</Link> with us after attending the webinar. We would appreciate hearing your thoughts. Thank you!</p>
        </div>
    );

    const nowDateTime = new Date();
    const targetDateTime = Date.parse(props.data.lastRegistrationDate);
    const hasWebinarEnded = nowDateTime > targetDateTime;

    return (
        <div className="w-11/12 md:w-1/2 mx-auto py-12 bg-transparent">
            <div className="border-purple-500 py-6 px-5 border-4 bg-white">
                <div className="mb-12">
                    <h1 className="font-black text-4xl mb-6 capitalize text-slate-600">
                        {props.data.title}
                    </h1>
                    {props.data.subheading && <h2 className="font-black text-2xl mb-6 capitalize text-slate-600">
                        {props.data.subheading}
                    </h2>}
                    {props.data.description}
                    <div className="text-xl mb-6">
                        <i className="fa fa-calendar mr-3"></i>
                        {props.data.date}
                    </div>
                    <div className="text-xl mb-6">
                        <i className="fa fa-clock-o mr-3"></i>
                        {props.data.time}
                    </div>
                </div>

                {hasWebinarEnded ? webinarEnded: webinarForm}
            </div>
        </div>
    );
};
