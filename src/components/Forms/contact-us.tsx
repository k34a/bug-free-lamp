"use client";

import { useRef, useState } from "react";
import { z } from "zod";
import { titleCase } from "@/lib/commonFrontEndFns";
import { ENV } from "@/lib/cfg";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

const ContactUsSchema = z.object({
    firstName: z
        .string({ message: "Please provide first name" })
        .min(5, "First name should be atleast 5 characters"),
    lastName: z.string().optional(),
    email: z
        .string({ message: "Please provide a valid email" })
        .email("Please provide a valid email"),
    message: z
        .string()
        .min(
            20,
            "Please provide a valid location/address. Minimum 20 characters."
        ),
    token: z.string(),
});

const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        makeTitleCase: boolean = false
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: makeTitleCase ? titleCase(value) : value,
        });
    };

    const handleTurnstileSuccess = (token: string) => {
        setFormData((v) => ({ ...v, token }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors(defaultFormData);
        setError("");
        setIsSubmitted(false);

        const validation = ContactUsSchema.safeParse(formData);
        if (!validation.success) {
            const errors = validation.error.formErrors.fieldErrors;
            setFormErrors({
                firstName: errors.firstName ? errors.firstName[0] : "",
                lastName: errors.lastName ? errors.lastName[0] : "",
                email: errors.email ? errors.email[0] : "",
                message: errors.message ? errors.message[0] : "",
                token: "",
            });
            refTurnstile.current?.reset();
            return;
        }

        setloading(true);
        const response = await fetch("/contact/api", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        } else {
            setIsSubmitted(true);
            setFormData(defaultFormData);
        }
        refTurnstile.current?.reset();
        setloading(false);
    };

    return (
        <div className="py-12 md:py-16 w-11/12 max-w-screen-lg m-auto">
            <h1 className="text-4xl mb-8 font-bold">Contact Us</h1>
            <p>
                Please fill in the below form to submit a query or a message.
                Our typical response time is less than 48 hours. Please try to
                be as descriptive as possible.
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

                <div className="w-full flex flex-col gap-2">
                    <label
                        className="block uppercase tracking-wide text-gray-700 font-bold"
                        htmlFor="message"
                    >
                        Message *
                    </label>
                    <textarea
                        className="block w-full bg-gray-200 text-gray-700 py-3 px-4 mb-3 leading-tight"
                        placeholder="Your message"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        rows={10}
                    />
                    <div className="text-sm text-red-500">
                        {formErrors.message}
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
                        Your query has been submitted. Please expect a reply
                        within the next 48 hours.
                    </div>
                )}
            </form>
        </div>
    );
};

export default JoinUsForm;
