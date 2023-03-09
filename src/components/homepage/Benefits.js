import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/Benefits.module.css"

const tabsConfig = [
    [
        "Greener Environment", 
        "green", 
        "fa fa-leaf", 
        "border-green-600",
        {
            img: "./Green-environment-by-recycling.svg",
            alt: "Green environment by Sustainable Fashion",
            content: (<p>
                We are promoting a cleaner and greener planet through sustainable fashion. We do this by taking action on two fronts. First, we actively work to recycle clothing from landfills, reducing the amount of waste that ends up in the environment. This not only helps to preserve our planet&#39;s resources but also supports our mission to create a more sustainable fashion industry.
                <br />
                <br />
                Second, we rely on the generosity of people like you to help us achieve our goals. By donating your gently used clothing to us, you play an active role in supporting our mission. Whether you are donating a single item or a whole wardrobe, your contributions help us to keep clothing out of landfills and promote a more sustainable future for the fashion industry.
                <br /><br /> Together, we can create a cleaner, healthier, and greener planet through sustainable fashion.
            </p>),
            head: "Developing a Circular Fashion Economy",
            bg: "bg-green-200",
            buttonBg: "bg-green-700",
            buttonBgHover: "bg-green-800",
        }
    ],
    [
        "Boosted Economy", 
        "sky", 
        "fa fa-money", 
        "border-sky-600",
        {
            img: "./boosting-economy-through-sustainable-fashion.svg",
            alt: "Boosting Economy with Sustainable Fashion",
            content: (<p>
                We believe in the power of sustainable fashion to drive economic growth, especially in underdeveloped areas like those in Africa.
                <br />
                <br />
                By creating biodegradable and recycled clothes, we are cleaning up landfills, creating more job opportunities, and providing better wages (and working conditions) to the workers in the fashion industry.
                <br />
                <br />
                We understand the importance of investing in local communities and helping to boost the economy while also promoting sustainability and ethical practices. By doing so, we are not only creating a better future for the environment but also for the individuals and communities we aim to serve.
            </p>),
            head: "Creating More Jobs",
            bg: "bg-sky-200",
            buttonBg: "bg-sky-700",
            buttonBgHover: "bg-sky-800",
        }
    ],
    [
        "Fashion Education", 
        "pink", 
        "fa fa-graduation-cap", 
        "border-pink-600",
        {
            img: "./Charitable-Fashion-school.svg",
            alt: "Charitable Fashion School",
            content: (<p>
                Do you know that it costs thousands of dollars to study from a fashion-school?.
                <br /><br />
                <b>How we are helping in that?</b>
                <br /><br />
                The revenue generated from selling sustainable fashion products will be re-invested in establishing and running a <u>Charitable Fashion School</u>. The students who are passionate about driving change with sustainable fashion will learn all of it for free!
                <br /><br />
                Our goal is to provide education and training in sustainable fashion practices to individuals from all walks of life, free of charge. By educating the next generation of fashion professionals and designers, we hope to foster a more responsible and sustainable fashion industry. Our aim is to build a complete ecosystem for talented individuals, and raise awareness about the importance of ethical and sustainable practices in the fashion industry. By doing so, we believe that we can make a positive impact on the fashion industry and help to create a more equitable and sustainable world.
            </p>),
            head: "Free-of-cost Fashion School",
            bg: "bg-pink-200",
            buttonBg: "bg-pink-700",
            buttonBgHover: "bg-pink-800",
        }
    ],
    [
        "Enhanced Wellness", 
        "red", 
        "fa fa-heartbeat", 
        "border-red-600",
        {
            img: "./Safeguarding-health-with-sustainable-fashion.svg",
            alt: "Safeguarding health by Sustainable Fashion",
            content: (<p>
                Fast fashion not only harms the environment, but also poses a threat to our health. The use of cheap-toxic chemicals in the production process can cause skin irritation, allergies, and even lead to cancer.
                <br /><br />
                At Larry Rowbs Foundation, we are dedicated to creating a healthier future for all by producing sustainable and safe clothing. Our clothes are made from non-toxic materials and undergo strict quality control to ensure their safety for you and the environment. By choosing sustainable fashion, we are not only helping the planet, but also taking care of our own health and well-being.
                <br /><br />
                Join us in this mission to create a safer, greener, and healthier world for all.
            </p>),
            head: "Safeguarding Health",
            bg: "bg-red-200",
            buttonBg: "bg-red-700",
            buttonBgHover: "bg-red-800",
        }
    ]
]

export default function Benefits() {
    const [openTab, setOpenTab] = useState(3);
    const tabs = tabsConfig.map((ele, index)=>{
        return (
            <li key={index}>
                <button
                    className={
                        `text-xs font-bold uppercase px-5 py-3 shadow-lg border-2 rounded block leading-normal no-underline ${openTab === index + 1 && `border-b-4 ${ele[3]}`}`
                    }
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(index+1);
                    }}
                    data-toggle="tab"
                    role="tablist"
                >
                    <i className={`${ele[2]} text-base mr-1`}></i> {ele[0]}
                </button>
            </li>
        )
    })

    const tabsContent = tabsConfig.map((ele, index) => {
        return (
            <div key={index}>
                <div className={openTab === index+1 ? "block" : "hidden"}>
                    <img
                        src={ele[4]["img"]}
                        alt={ele[4]["alt"]}
                        className="w-1/4 m-auto"
                    />
                    <h2 className="text-2xl my-4">{ele[4]["head"]}</h2>
                    {ele[4]["content"]}
                    <br /><br />
                    <Link href="/blog">
                        <button type="button" className={`text-white ${ele[4]["buttonBg"]} hover:${ele[4]["buttonBgHover"]} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center no-underline`}>
                            Learn More
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        );
    })
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full relative">
                    <div className="text-center">
                        <div className="inline-block">
                            <ul
                                className="flex mb-0 list-none flex-wrap flex-row"
                                role="tablist"
                            >
                                {tabs}
                            </ul>
                        </div>
                    </div>
                    <div className={`relative flex flex-col min-w-0 break-words ${tabsConfig[openTab-1][4]["bg"]} w-full py-9 rounded`}>
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space w-4/5 md:w-4/6 lg:w-1/2 m-auto">
                                {tabsContent}
                            </div>
                        </div>
                    </div>
                    <div className={styles.customShapeDivider}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};