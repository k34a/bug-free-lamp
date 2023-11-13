import React from "react";
import { checkout } from "@/lib/donationCheckout";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { BiLinkExternal } from "react-icons/bi";

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

export default function DonateForm(params) {
    return (
        <div className="w-3/4 md:w-1/2 m-auto my-12">
            <Tabs aria-label="Options" variant="underlined">
                <Tab key="Recurring Support" title="Recurring Support">
                    <Card>
                        <CardBody className="flex flex-col gap-3 p-6">
                            <p>
                                Join our community of sustainable fashion
                                supporters and make a{" "}
                                <u>recurring monthly donation</u> to help us
                                create a more ethical and eco-friendly fashion
                                industry.
                            </p>
                            <p>
                                Your contribution will go towards funding our
                                initiatives, research, and advocacy efforts.
                            </p>
                            <div className="space-x-2">
                                {donations["Monthly"].map((ele, index) => {
                                    return (
                                        <button
                                            className="bg-green-600 text-white justify-center px-5 py-2 mt-4 rounded"
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
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="One Time" title="One Time">
                    <Card>
                        <CardBody className="flex flex-col gap-3 p-6">
                            <p>
                                Help us make a difference in the fashion
                                industry by making a <u>one-time donation</u> to
                                our foundation. Your donation will help us fund
                                our research, education, and advocacy efforts to
                                promote sustainability in fashion.
                            </p>
                            <p>
                                Every contribution, no matter the size, makes a
                                meaningful impact.
                            </p>
                            <div className="space-x-2">
                                {donations["OneTime"].map((ele, index) => {
                                    return (
                                        <button
                                            className="bg-green-600 text-white justify-center px-5 py-2 mt-4 rounded"
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
                        </CardBody>
                    </Card>
                </Tab>
                <Tab
                    title={
                        <div className="flex items-center gap-2">
                            <div>Go Fund Me</div>
                            <BiLinkExternal />
                        </div>
                    }
                    key="GoFundMe"
                    href="https://www.gofundme.com/f/larry-rowbs-clothing-recycling-initiative"
                    target="_blank"
                ></Tab>
            </Tabs>
        </div>
    );
}
