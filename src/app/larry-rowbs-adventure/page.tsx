import YoutubeVideo from "@/components/Youtube";
import Link from "next/link";
import Image from "next/image";
import SubscribeEmail from "@/components/Forms/subscribe-email";

import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Larry Rowbs Adventure: Educative Sustainable Fashion",
    description:
        "This adventurous educative game will transform the way you think about the fashion industry.",
};

const Page = () => {
    return (
        <>
            <div className="w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto my-16 flex flex-col gap-6">
                <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        Get Ready for Larry Rowbs Adventure:{" "}
                        <span className="text-blue-500">Educative</span>{" "}
                        <span className="text-green-500">Sustainable</span>{" "}
                        <span className="text-pink-500">Fashion</span>
                    </h1>
                    <p className="sm:text-lg md:text-xl italic">
                        - by Larry Rowbs Foundation
                    </p>
                </div>
                <br />
                <p>
                    <span className="italic">
                        Larry Rowbs Adventure: Educative Sustainable Fashion
                    </span>{" "}
                    is the{" "}
                    <span className="font-bold underline">
                        first eduventurous game in the fashion industry
                    </span>
                    {". "}
                    It is both - adventurous and educative. This mixture of a
                    fun learning experience crossed with a fast-paced
                    runner-like game delivers a unique twist. Players earn
                    scores and rewards in the field by completing a range of
                    lessons that expand their understanding of the fashion and
                    recycling industries. You will get to learn the benefits and
                    harms of different materials, pollution statistics, and a
                    lot more - really valuable knowledge - as you embark on
                    adventurous missions like redirecting dump trucks to
                    recycling plants, etc.
                </p>
                <p> Check out this preview video.</p>
                <div className="w-full">
                    <YoutubeVideo videoId="geGdb89rU98" />
                </div>
                <div>
                    <SubscribeEmail
                        heading="Can we count on your pledge for our upcoming project?"
                        formName="game-preregistration"
                        submitButton={{
                            text: "Signup",
                            onLoading: "loading...",
                        }}
                        successMessage="Thank you for signing up for the Larry Rowbs Adventure."
                        info="Get project news and updates by providing your email."
                    />
                </div>
                <p>
                    Our goal is to make fashion sustainable - one step at a
                    time. To solve the social hazards and environmental harms
                    caused fast fashion, the{" "}
                    <Link href="/" className="text-green-700">
                        Larry Rowbs Foundation
                    </Link>{" "}
                    will be starting a full-scale clothing facility to recycle
                    the fashion waste into brand new and 100% biodegradable
                    products. The proceeds from the recycling facility will be
                    used to start a FREE of cost sustainable fashion school for
                    people to learn about sustainable practices in fashion
                    industry.
                </p>
                <p>
                    This game is the first step we are taking to be able to get
                    the word out about the depths and harm of fast fashion and
                    to be able to raise funds for our main recycling project.
                </p>
                <h2 className="font-bold text-xl md:text-2xl">Platforms</h2>
                <p>
                    Larry Rowbs Adventure will be playable on mobile devices
                    through the Google Play Store and Apple&apos;s iOS App
                    Store, as well as on PC through Steam.
                </p>
                <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
                    <Image
                        src="/googlePlay.png"
                        loading="lazy"
                        alt="Coming soon on Google Play Store"
                        width={250}
                        height={100}
                    />
                    <Image
                        src="/appstore.png"
                        loading="lazy"
                        alt="Coming soon on Apple App Store"
                        width={250}
                        height={100}
                    />
                    <Image
                        src="/steam.png"
                        loading="lazy"
                        alt="Coming soon on Steam"
                        width={250}
                        height={90}
                        className="rounded-lg"
                    />
                </div>
                <h2 className="font-bold text-xl md:text-2xl">
                    Who should play this game?
                </h2>
                <p>
                    Our primary focus is on Generation Z, ranging from ages 9 to
                    30, as they represent the demographic most inclined to
                    purchase fashion products, contributing significantly to
                    landfill waste. We aim to reach millions of individuals
                    through a game designed to raise awareness and educate them
                    about sustainable fashion. We plan to achieve this through
                    social media campaigns, physical advertisements, and posters
                    distributed across schools, churches, mosques, and various
                    communities and nations.
                </p>
                <h2 className="font-bold text-xl md:text-2xl">Requirement</h2>
                <p>
                    To reach our goal of engaging million players in this game,
                    we anticipate requiring a modest investment for advertising,
                    various types of posters, seminars, and other promotional
                    activities. To facilitate this, we&apos;ve chosen to launch
                    the paid version of the game on the Kickstarter platform.
                    This strategy aims to generate a substantial amount of funds
                    to support our promotional efforts. To execute this plan
                    successfully, we seek funding in the range of $20,000 to
                    $30,000. These funds will be allocated towards hiring
                    crowdfunding experts and advertising budgets. With their
                    expertise and established audience or backers, we aim to
                    raise a target of at least $300,000 and beyond.
                </p>
                <h2 className="font-bold text-xl md:text-2xl">
                    Production Team
                </h2>
                <p>
                    <Link href="/" className="font-bold text-green-600">
                        Larry Rowbs Foundation
                    </Link>
                    <br />
                    <br />
                    <b>Contact:</b>
                    <br />
                    <a href="mailto:info@larryrowbs.org">info@larryrowbs.org</a>
                    <br />
                    <a href="mailto:info@larryrowbsfoundation.org">
                        info@larryrowbsfoundation.org
                    </a>
                    <br />
                    <a href="mailto:lin.sheppard66@gmail.com">
                        lin.sheppard66@gmail.com
                    </a>
                </p>
                <h2 className="font-bold text-xl md:text-2xl">
                    Development Team
                </h2>
                <p>
                    <a
                        href="https://www.dominicbarbuto.com/"
                        className="font-bold text-green-600"
                    >
                        Dominic Barbuto
                    </a>
                    <br />
                    <br />
                    <b>Contact:</b>
                    <br />
                    <a href="mailto:dominicabarbuto@gmail.com">
                        dominicabarbuto@gmail.com
                    </a>
                </p>
                <div>
                    <SubscribeEmail
                        heading="Can we count on your pledge for our upcoming project?"
                        formName="game-preregistration"
                        submitButton={{
                            text: "Signup",
                            onLoading: "loading...",
                        }}
                        successMessage="Thank you for signing up for the Larry Rowbs Adventure."
                        info="Get project news and updates by providing your email."
                    />
                </div>
                <hr />
                <Link
                    href="/donate"
                    className="font-semibold text-lg md:text-xl text-green-600"
                >
                    Check these other ways in which you can make a difference!
                </Link>
            </div>
        </>
    );
};

export default Page;
