"use client";

import React, { useState } from "react";
import { validateEmail } from "@/lib/commonFrontEndFns";
import { FaEnvelope } from "react-icons/fa";

interface SubscribeEmailProps {
    heading: string;
    desc?: string;
    formName: string;
    submitButton: {
        text: string;
        onLoading: string;
    };
    successMessage: string;
    info: string;
}

const SubscribeEmail = (props: SubscribeEmailProps) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [loading, setloading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email || !validateEmail(email)) {
            setError("Please enter a valid email.");
            setIsSubscribed(false);
            return;
        }

        setloading(true);
        const subscriber = { email, type: props.formName };
        console.info(subscriber);
        const response = await fetch("/subscribe", {
            method: "POST",
            body: JSON.stringify(subscriber),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            setIsSubscribed(false);
        } else {
            setError("");
            setIsSubscribed(true);
            setEmail("");
        }
        setloading(false);
    }

    return (
        <div className="max-w-screen-sm mx-auto px-4 py-6 grid gap-4 bg-slate-100 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold">
                {props.heading}
            </h3>
            {props.desc && (
                <p className="text-md md:text-lg text-slate-500">
                    {props.desc}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
                    <div className="relative w-full">
                        <div
                            className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                            aria-hidden={true}
                        >
                            <FaEnvelope className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            className="block p-3 pl-10 w-full text-sm text-gray-900 border-2 border-gray-800"
                            placeholder="What's your email?"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="py-3 px-5 w-full text-white bg-green-700 hover:bg-green-800 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading
                                ? props.submitButton.onLoading
                                : props.submitButton.text}
                        </button>
                    </div>
                </div>
                {error && <div className="text-sm text-red-500">{error}</div>}
                {isSubscribed && (
                    <div className="font-bold text-green-500">
                        {props.successMessage}
                    </div>
                )}
                <p className="mt-3 text-sm text-slate-500">{props.info}</p>
            </form>
        </div>
    );
};

export default SubscribeEmail;
