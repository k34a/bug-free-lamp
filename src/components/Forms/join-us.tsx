"use client";

import { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { titleCase, validateURL } from "@/lib/commonFrontEndFns";
import { ENV } from "@/lib/cfg";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

const JoinUsSchema = z.object({
    firstName: z
        .string({ message: "Please provide first name" })
        .min(5, "First name should be atleast 5 characters"),
    lastName: z.string().optional(),
    email: z
        .string({ message: "Please provide a valid email" })
        .email("Please provide a valid email"),
    contact: z
        .string({ message: "Please provide a valid phone number" })
        .refine(isValidPhoneNumber, "Phone number is not valid"),
    linkedin: z
        .string({ message: "Please provide a link to your linkedin profile" })
        .refine(validateURL, "Invalid url")
        .optional(),
    location: z
        .string()
        .min(
            5,
            "Please provide a valid location/address. Minimum 5 characters."
        ),
    skills: z
        .string()
        .min(
            5,
            "Please be as descriptive as possible. This is an important piece in your application. Minimum 5 characters."
        ),
    resume: z.string().refine(validateURL, "Invalid url"),
    token: z.string(),
});

const defaultFormData = {
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

const JoinUsForm = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const [formErrors, setFormErrors] = useState(defaultFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(false);
    const refTurnstile = useRef<TurnstileInstance>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        makeTitleCase: boolean = false
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: makeTitleCase ? titleCase(value) : value,
        });
    };

    const handlePhoneChange = (value: unknown) => {
        setFormData({ ...formData, contact: String(value) });
    };

    const handleTurnstileSuccess = (token: string) => {
        setFormData((v) => ({ ...v, token }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors(defaultFormData);
        setError("");
        setIsSubmitted(false);

        const validation = JoinUsSchema.safeParse(formData);
        if (!validation.success) {
            const errors = validation.error.formErrors.fieldErrors;
            setFormErrors({
                firstName: errors.firstName ? errors.firstName[0] : "",
                lastName: errors.lastName ? errors.lastName[0] : "",
                email: errors.email ? errors.email[0] : "",
                contact: errors.contact ? errors.contact[0] : "",
                linkedin: errors.linkedin ? errors.linkedin[0] : "",
                location: errors.location ? errors.location[0] : "",
                skills: errors.skills ? errors.skills[0] : "",
                resume: errors.resume ? errors.resume[0] : "",
                token: "",
            });
            setFormData((v) => ({ ...v, token: "" }));
            refTurnstile.current?.reset();
            return;
        }

        setloading(true);
        const response = await fetch("/join/api", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            setFormData((v) => ({ ...v, token: "" }));
        } else {
            setIsSubmitted(true);
            setFormData(defaultFormData);
        }
        refTurnstile.current?.reset();
        setloading(false);
    };

    return (
        <div className="py-12 md:py-16 w-11/12 max-w-screen-lg m-auto">
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
            <form onSubmit={handleSubmit} className="p-6 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-3" id="name">
                    <div className="w-full flex flex-col gap-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold"
                            htmlFor="firstName"
                        >
                            First Name *
                        </label>
                        <input
                            className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                            type="text"
                            placeholder="John"
                            id="firstName"
                            name="firstName"
                            onChange={(e) => handleChange(e, true)}
                            value={formData.firstName}
                        />
                        <div className="text-sm text-red-500">
                            {formErrors.firstName}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 font-bold"
                            htmlFor="lastName"
                        >
                            Last Name
                        </label>
                        <input
                            className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                            type="text"
                            placeholder="Doe"
                            id="lastName"
                            name="lastName"
                            onChange={(e) => handleChange(e, true)}
                            value={formData.lastName}
                        />
                        <div className="text-sm text-red-500">
                            {formErrors.lastName}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        className="block uppercase tracking-wide text-gray-700 font-bold"
                        htmlFor="email"
                    >
                        E-mail *
                    </label>
                    <input
                        className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                        type="email"
                        placeholder="your@email.com"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <div className="text-sm text-red-500">
                        {formErrors.email}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label
                        htmlFor="contact"
                        className="block uppercase tracking-wide text-gray-700 font-bold"
                    >
                        Contact Number *
                    </label>
                    <PhoneInput
                        name="contact"
                        id="contact"
                        placeholder="Enter phone number"
                        value={formData.contact}
                        onChange={handlePhoneChange}
                    />
                    <div className="text-sm text-red-500">
                        {formErrors.contact}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        className="block uppercase tracking-wide text-gray-700 font-bold"
                        htmlFor="linkedin"
                    >
                        LinkedIn Profile Link
                    </label>
                    <input
                        className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                        type="text"
                        placeholder="Link to your LinkedIn Account"
                        id="linkedin"
                        name="linkedin"
                        onChange={handleChange}
                        value={formData.linkedin}
                    />
                    <div className="text-sm text-red-500">
                        {formErrors.linkedin}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        className="block uppercase tracking-wide text-gray-700 font-bold"
                        htmlFor="location"
                    >
                        Which part of the world are you from? *
                    </label>
                    <input
                        className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                        id="location"
                        name="location"
                        type="text"
                        onChange={handleChange}
                        value={formData.location}
                        placeholder="City, Country"
                    />
                    <div className="text-sm text-red-500">
                        {formErrors.location}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        className="block uppercase tracking-wide text-gray-700 font-bold"
                        htmlFor="skills"
                    >
                        What are your skills, strengths, gifts, & superpowers? *
                    </label>
                    <input
                        className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                        id="skills"
                        name="skills"
                        type="text"
                        onChange={handleChange}
                        value={formData.skills}
                        placeholder="Come on, don't be shy :)"
                    />
                    <div className="text-sm text-red-500">
                        {formErrors.skills}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label
                        className="block uppercase tracking-wide text-gray-700 font-bold"
                        htmlFor="resume"
                    >
                        Link to your resume *
                    </label>
                    <input
                        className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                        id="resume"
                        name="resume"
                        type="text"
                        onChange={handleChange}
                        value={formData.resume}
                        placeholder="Link to your resume"
                    />
                    <div className="text-sm text-red-500">
                        {formErrors.resume}
                    </div>
                </div>
                <Turnstile
                    id="turnstile-1"
                    ref={refTurnstile}
                    siteKey={ENV.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onSuccess={handleTurnstileSuccess}
                />
                <div className="mt-4">
                    <button
                        className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
                        type="submit"
                        disabled={loading || formData.token.length === 0}
                    >
                        {loading ? "Submitting..." : "Join us"}
                    </button>
                </div>
                <div className="text-sm text-red-500">{error}</div>
                {isSubmitted && (
                    <div className="text-green-700">
                        Your application has been submitted. Please expect a
                        reply within the next 48 hours.
                    </div>
                )}
            </form>
        </div>
    );
};

export default JoinUsForm;
