import React from "react";
import { Button, Link, Image } from "@nextui-org/react";
import NextImage from "next/image";

const landfillImages = [
    "/dumpedclothes/1.jpeg",
    "/dumpedclothes/2.jpeg",
    "/dumpedclothes/3.jpg",
    "/dumpedclothes/4.jpg",
];

export default function WhatsHappening() {
    return (
        <div className="w-11/12 sm:w-4/5 md:w-3/5 mx-auto py-6 flex flex-col gap-6">
            <div className="bg-gradient-to-r from-stone-700 to-emerald-600 bg-clip-text text-transparent">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Why we are doing this?
                </span>{" "}
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl">
                    - Because a truck full of used clothes ends up in landfills
                    each second!
                </span>
            </div>
            <div onContextMenu={(e) => e.preventDefault()}>
                <video
                    width={1472}
                    height={916}
                    autoPlay
                    muted
                    loop
                    title="A truck dumping used clothes into landfills"
                    className="max-w-[85%] mx-auto lg:drop-shadow-2xl border-dashed border-1 md:border-2 lg:border-3 border-red-500 rounded-lg lg:rounded-xl"
                >
                    <source src="/LandfillAnimation.mp4" type="video/mp4" />
                </video>
            </div>
            <p className="md:text-lg">
                The fashion industry prioritizes cutting costs by making use of{" "}
                <b>cheap and toxic materials</b>. This also reduces the{" "}
                <b>lifespan</b> of the clothes.
                <br />
                Discarding the clothes in this fast fashion era leads to
                excessive textile waste. <b>Millions of tonnes</b> of clothes
                are donated to Africa, but 70% ending up in <b>landfills</b> of
                Uganda, Nigeria, Kenya and other countries.
            </p>
            <div className="flex items-center justify-center">
                <Button
                    size="lg"
                    className="bg-green-700 text-slate-50 font-bold text-lg sm:text-xl"
                    as={Link}
                    href="/blog"
                >
                    Learn More
                </Button>
            </div>
            <div className="pt-6 flex flex-col gap-6">
                <div className="text-2xl sm:text-3xl md:text-4xl text-green-700 font-bold text-center">
                    Have a look at the condition of these landfills
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {landfillImages.map((src, index) => {
                        return (
                            <Image
                                as={NextImage}
                                src={src}
                                width={800}
                                height={800}
                                loading="lazy"
                                alt="Landfills in Africa filled with used clothes donated to developing nations"
                                key={index}
                                loader={({ src }) => {
                                    return src;
                                }}
                                className="rounded sm:rounded-lg drop-shadow-md sm:drop-shadow-lg max-w-full max-h-full"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
