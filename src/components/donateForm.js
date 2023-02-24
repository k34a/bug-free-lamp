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
}

export default function DonateForm(params) {
    const [tab, setTab] = useState(1);
    return (
        <div className="w-3/4 md:w-1/2 m-auto my-12">
            <div className="mb-5 md:space-x-2">
                <button onClick={() => setTab(1)} className= "bg-purple-300 text-purple-600 rounded font-black p-4">
                    Change Maker
                </button>
                <button onClick={() => setTab(2)} className= "bg-sky-300 text-sky-600 rounded font-black p-4">
                    Sustainability Champion
                </button>
            </div>
            {tab == 1 && <div className="bg-purple-300 py-12 px-5">
                <h2 className="text-xl font-bold mb-2">Contribute Every Month</h2>
                Join our community of sustainable fashion supporters and make a recurring monthly donation to help us create a more ethical and eco-friendly fashion industry. 
                <br />
                <br />
                Your contribution will go towards funding our initiatives, research, and advocacy efforts.
                <br />
                <div className="space-x-2">
                    {donations["Monthly"].map((ele, index) => {
                        return (
                            <button 
                                className="bg-purple-600 text-white justify-center px-5 py-2 mt-4 rounded" 
                                onClick={() => {
                                    checkout({
                                        lineItems: [
                                            {
                                                price: ele[1],
                                                quantity: 1
                                            }]
                                    })
                                }}
                                key={index}
                            >${ele[0]}</button>
                        )
                    })}
                </div>
            </div>}
            {tab == 2 && <div className="bg-sky-300 py-12 px-5">
                <h2 className="text-xl font-bold mb-2">One-Time Donation</h2>
                Help us make a difference in the fashion industry by making a one-time donation to our foundation. Your donation will help us fund our research, education, and advocacy efforts to promote sustainability in fashion. 
                <br />
                <br />
                Every contribution, no matter the size, makes a meaningful impact.
                <br />
                <div className="space-x-2">
                    {donations["OneTime"].map((ele, index) => {
                        return (
                            <button
                                className="bg-sky-600 text-white justify-center px-5 py-2 mt-4 rounded"
                                onClick={() => {
                                    checkout({
                                        lineItems: [
                                            {
                                                price: ele[1],
                                                quantity: 1
                                            }]
                                    })
                                }}
                                key={index}
                            >${ele[0]}</button>
                        )
                    })}
                </div>
            </div>}
        </div>
    );
};
