import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { titleCase, validateEmail, validateURL } from "@/lib/commonFrontEndFns";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const JoinUs = () => {
    const defaultsParams = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        linkedin: "",
        location: "",
        skills: "",
        resume: "",
        token: "",
    };

    const [invalidFields, setInvalidFields] = useState({});
    const [formData, setFormData] = useState(defaultsParams);
    const [token, setToken] = useState("");
    const hcaptchaRef = useRef();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setloading(true);
        setInvalidFields({});
        setIsSubmitted(false);
        setError("");
        const invalidSubmittedFields = {};
        if (!formData.contact || !isValidPhoneNumber(formData.contact)) {
            invalidSubmittedFields["contact"] = true;
        }
        if (!formData.email || !validateEmail(formData.email)) {
            invalidSubmittedFields["email"] = true;
        }
        if (formData.resume && !validateURL(formData.resume)) {
            invalidSubmittedFields["resume"] = true;
        }
        if (formData.linkedin && !validateURL(formData.linkedin)) {
            invalidSubmittedFields["linkedin"] = true;
        }
        if (
            token &&
            invalidSubmittedFields &&
            Object.keys(invalidSubmittedFields).length == 0
        ) {
            const updatedFormData = { ...formData, token };
            const response = await fetch("/api/joinus", {
                method: "POST",
                body: JSON.stringify(updatedFormData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            hcaptchaRef.current.resetCaptcha();
            setToken("");
            if (!response.ok) {
                setError(
                    "Unable to proceed your request. Please try again later."
                );
            } else {
                setIsSubmitted(true);
                setFormData(defaultsParams);
            }
        } else if (!token) {
            setError("Please verify the captcha.");
        } else {
            setError(
                "Some fields above are invalid. Please correct them and re-submit."
            );
        }
        setInvalidFields(invalidSubmittedFields);
        setloading(false);
    }

    const updateField = (e, makeTitleCase = false) => {
        let value = e.target.value;
        if (makeTitleCase) {
            value = titleCase(value);
        }
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    };

    return (
        <div className="w-5/6 max-w-lg my-12 m-auto">
            <h1 className="text-4xl mb-8 font-bold">Join Us</h1>
            <p>
                We live by the principles of working together to overcome any
                obstacle we face, being true to ourselves and anyone we engage
                with, leveraging diverse skills and resources to accomplish our
                goals through unified creativity, maintaining a high level of
                transparency and respect in all communications, and empowering
                each person to unleash their gifts.
                <br />
                <br />
                We are looking at people with a varied skillset, especially in
                Fundraising and Marketing. If you think you can support us in
                any other way, please do let us know. We always welcome and
                value talent.
                <br />
                <br />
            </p>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            First Name *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="John"
                            required={true}
                            name="firstName"
                            onChange={(e) => updateField(e, true)}
                            value={formData.firstName}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Last Name *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Doe"
                            required={true}
                            name="lastName"
                            onChange={(e) => updateField(e, true)}
                            value={formData.lastName}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            E-mail *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="email"
                            required={true}
                            type="text"
                            onChange={(e) => updateField(e)}
                            value={formData.email}
                            placeholder="your@email.com"
                        />
                        {invalidFields["email"] && (
                            <p className="text-red-500 italic">
                                Please enter a valid email.
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Contact Number *
                        </label>
                        <PhoneInput
                            name="contact"
                            required={true}
                            placeholder="Enter phone number"
                            value={formData.contact}
                            onChange={(value) =>
                                setFormData({ ...formData, contact: value })
                            }
                        />
                        {invalidFields["contact"] && (
                            <p className="text-red-500 italic">
                                Please enter a valid contact info.
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            LinkedIn Profile Link
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="linkedin"
                            type="text"
                            onChange={(e) => updateField(e)}
                            value={formData.linkedin}
                            placeholder="Link to your LinkedIn Account"
                        />
                        {invalidFields["linkedin"] && (
                            <p className="text-red-500 italic">
                                Please enter a valid link to your LinkedIn
                                account.
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Which part of the world are you from? *
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="location"
                            required={true}
                            type="text"
                            onChange={(e) => updateField(e)}
                            value={formData.location}
                            placeholder="City, Country"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            What are your skills, strengths, gifts, &
                            superpowers? *
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="skills"
                            required={true}
                            onChange={(e) => updateField(e)}
                            value={formData.skills}
                            placeholder="Come on, don't hesitate :)"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Resume
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="resume"
                            type="text"
                            onChange={(e) => updateField(e)}
                            value={formData.resume}
                            placeholder="Link to your resume"
                        />
                        {invalidFields["resume"] && (
                            <p className="text-red-500 italic">
                                Please enter a valid link to your resume.
                            </p>
                        )}
                    </div>
                </div>
                <HCaptcha
                    ref={hcaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                    onVerify={(token) => setToken(token)}
                    onExpire={(e) => setToken("")}
                />
                <div className="my-6 md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button
                            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
                            type="submit"
                            disabled={loading}
                        >
                            Apply
                        </button>
                    </div>
                    {loading && (
                        <ThreeDots
                            color={"rgb(45 212 191)"}
                            loading={loading}
                            size={100}
                        />
                    )}
                    <div className="md:w-2/3"></div>
                </div>
                {error && <p className="text-red-500 italic my-6">{error}</p>}
                {isSubmitted && (
                    <p className="text-green-500 italic my-6">
                        Your message is sent successfully. Please expect a
                        response within 24-48 hours.
                    </p>
                )}
            </form>
        </div>
    );
};

export default JoinUs;
