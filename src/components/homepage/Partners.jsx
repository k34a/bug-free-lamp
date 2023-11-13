import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function Partners() {
    return (
        <div>
            <div className="w-11/12 md:w-3/4 lg:w-1/2 m-auto py-12 flex flex-col gap-6">
                <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl text-center capitalize text-green-700">
                    Sustainable Fashion has become a movement!
                </h2>
                <p className="font-bold text-xl sm:text-2xl md:text-3xl text-center capitalize text-green-700">
                    Here are some of our supporters
                </p>
                <div className="grid divide-y-4">
                    <div className="grid md:grid-cols-2 gap-4 m-2">
                        <div className="m-2 flex justify-center items-center">
                            <img
                                src="/Christian-Ministry-Alliance.png"
                                alt="Christian Ministry Alliance"
                            />
                        </div>
                        <div className="m-2 md:text-lg lg:text-xl">
                            We are proud to announce that{" "}
                            <a
                                className="underline"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://christianministryalliance.org"
                            >
                                the Christian Ministry Alliance
                            </a>{" "}
                            has endorsed our work and vision.
                            <br />
                            <br />
                            The Christian Ministry Alliance is a registered
                            501(c)(3) Corporation with the U.S. Internal Revenue
                            Service.
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 m-2">
                        <div className="m-2 flex justify-center items-center">
                            <img
                                src="/WorldWideWeavingOfWomen.webp"
                                alt="World Wide Weaving Of Women"
                            />
                        </div>
                        <div className="m-2 md:text-lg lg:text-xl">
                            <a
                                className="underline"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.joy-of-weaving-wwwow.com/"
                            >
                                World Wide Weaving of Women
                            </a>
                            , an initiative fostering a global network for women
                            engaged in textile art, has partnered with the Larry
                            Rowbs Foundation to support the development of a
                            sustainable textile industry.
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        size="lg"
                        className="bg-green-700 text-slate-50 font-bold text-lg sm:text-xl"
                        as={Link}
                        href="/donate"
                    >
                        Become our supporter
                    </Button>
                </div>
            </div>
        </div>
    );
}
