import React from "react";
import DonateForm from "@/components/Forms/DonateForm";
import Head from "next/head";

export default function Donate() {
    return (
        <>
            <Head>
                <title>Donate - Larry Rowbs Foundation</title>
                <meta
                    name="description"
                    content="Become a Sustainability Hero by helping us fight the hazards of fast fashion and create a sustainable future. Donate today!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="py-6 md:py-12 word-break">
                {/* <div className="w-11/12 md:w-2/3 m-auto prose md:prose-lg">
                    <h1 className="text-3xl md:text-4xl font-black md:text-center m-12 opacity-70 text-green-600">
                        Support us and be a Sustainable Fashion Hero!
                    </h1>
                    <p>
                        When you donate to Larry Rowbs Foundation, you help us
                        fight the hazards of fast fashion, improve the
                        well-being of workers in the social industry, and create
                        a sustainable future. Your contribution, no matter the
                        size, can make a <b>meaningful impact</b> and support
                        our mission.
                    </p>
                    <p>
                        <u>
                            <b>What are the benefits of your donation?</b>
                        </u>
                    </p>
                    <ol>
                        <li>
                            <span className="font-bold text-green-500">
                                Promote Sustainable Fashion
                            </span>
                            : Your donation supports initiatives that raise
                            awareness about sustainable fashion and its benefits
                            for the environment and society.
                        </li>
                        <li>
                            <span className="font-bold text-green-500">
                                Support Workers&apos; Rights
                            </span>
                            : Your donation helps us improve the well-being of
                            workers in the social industry and promote fair
                            labor practices.
                        </li>
                        <li>
                            <span className="font-bold text-green-500">
                                Create a Sustainable Future
                            </span>
                            : Your donation funds research and development of
                            sustainable materials and technologies that can
                            reduce the environmental impact of the fashion
                            industry.
                        </li>
                        <li>
                            <span className="font-bold text-green-500">
                                Make a Difference
                            </span>
                            : Your donation can create a positive change and
                            support our efforts to create a more ethical and
                            eco-friendly fashion industry.
                        </li>
                    </ol>
                    <p>
                        Whether you make a one-time donation or become a monthly
                        donor, your contribution can make a significant
                        difference. Join us in our mission to promote
                        sustainable fashion and create a more equitable and
                        sustainable future for all.
                    </p>
                    <p>Thank you for your support!</p>
                </div>
                <DonateForm /> */}
                <iframe
                    src="https://www.civicdawn.org/funds/embed/ORGA014E1/donate"
                    height="500px"
                    width="440px"
                    className="border-0 w-11/12 xs:w-5/6 sm:w-4/5 md:w-3/4 m-auto"
                    style={{
                        border: "none",
                    }}
                ></iframe>
            </main>
        </>
    );
}
