import Link from "next/link";
import React, { useState } from "react";

const bgColor = [
    "bg-green-200",
    "bg-blue-200",
    "bg-fuchsia-100",
    "bg-red-200"
]

export default function Benefits() {
    const [openTab, setOpenTab] = useState(3);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg border-2 rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-green-600"
                                        : "text-green-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                <i className="fa fa-leaf text-base mr-1"></i> Greener Environment
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg border-2 rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-blue-600"
                                        : "text-blue-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                <i className="fa fa-money text-base mr-1"></i>  Boosted Economy
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg border-2 rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-fuchsia-500"
                                        : "text-fuchsia-500 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                <i className="fa fa-graduation-cap text-base mr-1"></i>  Fashion Education
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg border-2 rounded block leading-normal " +
                                    (openTab === 4
                                        ? "text-white bg-red-600"
                                        : "text-red-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                <i className="fa fa-heartbeat text-base mr-1"></i>  Enhanced Wellness
                            </a>
                        </li>
                    </ul>
                    <div className={`relative flex flex-col min-w-0 break-words ${bgColor[openTab-1]} w-full pb-6 rounded`}>
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space w-4/5 md:w-4/6 lg:w-1/2 m-auto">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <img
                                        src="./Green-environment-by-recycling.svg"
                                        alt="Green environment by Sustainable Fashion"
                                        className="w-1/4 m-auto"
                                    />
                                    <h2 className="text-2xl my-4">Developing a Circular Fashion Economy</h2>
                                    <p>
                                        We are promoting a cleaner and greener planet through sustainable fashion. We do this by taking action on two fronts. First, we actively work to recycle clothing from landfills, reducing the amount of waste that ends up in the environment. This not only helps to preserve our planet&#39;s resources but also supports our mission to create a more sustainable fashion industry.
                                        <br />
                                        <br />
                                        Second, we rely on the generosity of people like you to help us achieve our goals. By donating your gently used clothing to us, you play an active role in supporting our mission. Whether you are donating a single item or a whole wardrobe, your contributions help us to keep clothing out of landfills and promote a more sustainable future for the fashion industry.
                                        <br /><br /> Together, we can create a cleaner, healthier, and greener planet through sustainable fashion.
                                    </p>
                                    <br /><br />
                                    <Link href="/blog">
                                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                            Learn More
                                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </Link>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <img 
                                        src="./boosting-economy-through-sustainable-fashion.svg"
                                        alt="Boosting Economy with Sustainable Fashion"
                                        className="w-1/4 m-auto"
                                    />
                                    <h2 className="text-2xl my-4">Creating More Jobs</h2>
                                    <p>
                                        We believe in the power of sustainable fashion to drive economic growth, especially in underdeveloped areas like those in Africa.
                                        <br />
                                        <br />
                                        By creating biodegradable and recycled clothes, we are cleaning up landfills, creating more job opportunities, and providing better wages (and working conditions) to the workers in the fashion industry. 
                                        <br />
                                        <br />
                                        We understand the importance of investing in local communities and helping to boost the economy while also promoting sustainability and ethical practices. By doing so, we are not only creating a better future for the environment but also for the individuals and communities we aim to serve.
                                    </p>
                                    <br /><br />
                                    <Link href="/blog">
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                            Learn More
                                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </Link>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <img
                                        src="./Charitable-Fashion-school.svg"
                                        alt="Charitable Fashion School"
                                        className="w-1/4 m-auto"
                                    />
                                    <h2 className="text-2xl my-4">Free-of-cost Fashion School</h2>
                                    <p>
                                        Do you know that it costs thousands of dollars to study from a fashion-school?.
                                        <br /><br />
                                        <b>How we are helping in that?</b>
                                        <br /><br />
                                        The revenue generated from selling sustainable fashion products will be re-invested in establishing and running a <u>Charitable Fashion School</u>. The students who are passionate about driving change with sustainable fashion will learn all of it for free!
                                        <br /><br />
                                        Our goal is to provide education and training in sustainable fashion practices to individuals from all walks of life, free of charge. By educating the next generation of fashion professionals and designers, we hope to foster a more responsible and sustainable fashion industry. Our aim is to build a complete ecosystem for talented individuals, and raise awareness about the importance of ethical and sustainable practices in the fashion industry. By doing so, we believe that we can make a positive impact on the fashion industry and help to create a more equitable and sustainable world. 
                                    </p>
                                    <br /><br />
                                    <Link href="/blog">
                                        <button type="button" className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                            Learn More
                                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </Link>
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <img
                                        src="./Safeguarding-health-with-sustainable-fashion.svg"
                                        alt="Safeguarding health by Sustainable Fashion"
                                        className="w-1/4 m-auto"
                                    />
                                    <h2 className="text-2xl my-4">Safeguarding Health</h2>
                                    <p>
                                        Fast fashion not only harms the environment, but also poses a threat to our health. The use of cheap-toxic chemicals in the production process can cause skin irritation, allergies, and even lead to cancer. 
                                        <br /><br />
                                        At Larry Rowbs Foundation, we are dedicated to creating a healthier future for all by producing sustainable and safe clothing. Our clothes are made from non-toxic materials and undergo strict quality control to ensure their safety for you and the environment. By choosing sustainable fashion, we are not only helping the planet, but also taking care of our own health and well-being. 
                                        <br /><br />
                                        Join us in this mission to create a safer, greener, and healthier world for all.
                                    </p>
                                    <br /><br />
                                    <Link href="/blog">
                                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                            Learn More
                                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};