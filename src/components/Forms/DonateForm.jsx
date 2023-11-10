import React from "react";
import { checkout } from "@/lib/donationCheckout";
import { useState } from "react";

const donations = {
    OneTime: [
        ["50", process.env.NEXT_PUBLIC_ONETIME_50],
        ["100", process.env.NEXT_PUBLIC_ONETIME_100],
        ["200", process.env.NEXT_PUBLIC_ONETIME_200],
    ],
    Monthly: [
        ["25", process.env.NEXT_PUBLIC_MONTHLY_25],
        ["50", process.env.NEXT_PUBLIC_MONTHLY_50],
        ["100", process.env.NEXT_PUBLIC_MONTHLY_100],
    ],
};

const tabs = [
    <div className="bg-yellow-300 py-12 px-5" key={0}>
        <h2 className="text-xl font-bold mb-2">
            Join the Change Maker Program
        </h2>
        <p>
            We have a community of sustainable fashion supporters helping us
            with <u>spare change roundups</u>. The support coming from the
            community helps us create a more ethical and eco-friendly fashion
            industry.
        </p>
        <br />
        <p>
            Your contribution will go towards funding our initiatives, research,
            and advocacy efforts.
        </p>
        <br />
        <div>
            <button className="bg-yellow-600 text-white justify-center px-5 py-2 rounded">
                <a
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="!no-underline"
                    href="https://go.changemaker.app/donate/larry-rowbs-foundation"
                >
                    I am ready to be a Change Maker
                </a>
            </button>
        </div>
    </div>,
    <div className="bg-purple-300 py-12 px-5" key={1}>
        <h2 className="text-xl font-bold mb-2">Contribute Every Month</h2>
        <p>
            Join our community of sustainable fashion supporters and make a{" "}
            <u>recurring monthly donation</u> to help us create a more ethical
            and eco-friendly fashion industry.
        </p>
        <br />
        <p>
            Your contribution will go towards funding our initiatives, research,
            and advocacy efforts.
        </p>
        <br />
        <div className="space-x-2">
            {donations["Monthly"].map((ele, index) => {
                return (
                    <button
                        className="bg-purple-600 text-white justify-center px-5 py-2 mt-4 rounded"
                        onClick={() => {
                            checkout({
                                src: "/donate",
                                mode: "subscription",
                                lineItems: [
                                    {
                                        price: ele[1],
                                        quantity: 1,
                                    },
                                ],
                            });
                        }}
                        key={index}
                    >
                        ${ele[0]}
                    </button>
                );
            })}
        </div>
    </div>,
    <div className="bg-sky-300 py-12 px-5" key={2}>
        <h2 className="text-xl font-bold mb-2">One-Time Donation</h2>
        <p>
            Help us make a difference in the fashion industry by making a{" "}
            <u>one-time donation</u> to our foundation. Your donation will help
            us fund our research, education, and advocacy efforts to promote
            sustainability in fashion.
        </p>
        <br />
        <p>
            Every contribution, no matter the size, makes a meaningful impact.
        </p>
        <br />
        <div className="space-x-2">
            {donations["OneTime"].map((ele, index) => {
                return (
                    <button
                        className="bg-sky-600 text-white justify-center px-5 py-2 mt-4 rounded"
                        onClick={() => {
                            checkout({
                                src: "/donate",
                                mode: "payment",
                                lineItems: [
                                    {
                                        price: ele[1],
                                        quantity: 1,
                                    },
                                ],
                            });
                        }}
                        key={index}
                    >
                        ${ele[0]}
                    </button>
                );
            })}
        </div>
    </div>,
];

export default function DonateForm(params) {
    const [tab, setTab] = useState(0);
    return (
        <div className="w-3/4 md:w-1/2 m-auto my-12">
            <div className="mb-5 md:space-x-2">
                <button
                    onClick={() => setTab(0)}
                    className={`bg-yellow-300 text-yellow-600 rounded font-black p-4 ${
                        tab == 0 && "border-y-4 border-yellow-500"
                    }`}
                >
                    Change Maker
                </button>
                <button
                    onClick={() => setTab(1)}
                    className={`bg-purple-300 text-purple-600 rounded font-black p-4 ${
                        tab == 1 && "border-y-4 border-purple-500"
                    }`}
                >
                    Visionary
                </button>
                <button
                    onClick={() => setTab(2)}
                    className={`bg-sky-300 text-sky-600 rounded font-black p-4 ${
                        tab == 2 && "border-y-4 border-sky-500"
                    }`}
                >
                    Sustainability Champion
                </button>
            </div>
            {tabs[tab]}
        </div>
    );
}
