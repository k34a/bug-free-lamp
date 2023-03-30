import { useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const ContactUs = () => {
    const defaultData = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        token: ""
    }
    const [formData, setFormData] = useState(defaultData);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isNotSubmitted, setIsNotSubmitted] = useState(false);
    const recaptchaRef = useRef();
    const [loading, setloading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setloading(true);
        setIsInvalidEmail(false);
        setIsSubmitted(false); 
        setIsNotSubmitted(false); 
        if (!formData.email || !validateEmail(formData.email)) {
            setIsInvalidEmail(true);
        }
        else {
            const token = await recaptchaRef.current.executeAsync();
            recaptchaRef.current.reset();
            const submitData = { ...formData, token };
            const response = await fetch("/api/contactus", {
                method: "POST",
                body: JSON.stringify(submitData),
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
                setFormData(defaultData);
            }
        }
        setloading(false);
    }

    const updateField = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="w-5/6 max-w-lg my-12 m-auto">
            <h1 className="text-3xl mb-6 font-bold">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-first-name">
                            First Name *
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            name="firstName" 
                            type="text" 
                            placeholder="John"
                            required={true}
                            onChange={(e) => updateField(e)}
                            value={formData.firstName}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-last-name">
                            Last Name *
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="lastName" 
                            type="text" 
                            required={true}
                            placeholder="Doe"
                            onChange={(e) => updateField(e)}
                            value={formData.lastName}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-password">
                            E-mail *
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            name="email" 
                            required={true}
                            type="text"
                            onChange={(e) => updateField(e)}
                            value={formData.email}
                            placeholder="name@domain.com"
                        />
                        {isInvalidEmail && <p className="text-red-500 italic">Please enter a valid email.</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-password">
                            Message *
                        </label>
                        <textarea 
                            className="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
                            name="message"
                            onChange={(e) => updateField(e)}
                            required={true}
                            value={formData.message}
                            placeholder="Your message"
                        />
                    </div>
                </div>
                <ReCAPTCHA 
                    size="invisible" 
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT} 
                    ref={recaptchaRef}
                />
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button 
                            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
                            type="submit"
                            disabled={loading}
                        >
                            Send
                        </button>
                    </div>
                    {loading && <ThreeDots color={'rgb(45 212 191)'} loading={loading} size={100} />}
                    <div className="md:w-2/3"></div>
                </div>
                {isNotSubmitted && <p className="text-red-500 italic my-6">Unable to save your message. Please try again later.</p>}
                {isSubmitted && <p className="text-green-500 italic my-6">Your message is sent successfully. Please expect a response within 24-48 hours.</p>}
            </form>
        </div>
    );
};

export default ContactUs;