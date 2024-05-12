import React from "react";
import styles from "@/styles/OurWork.module.css";
import { Button, Link } from "@nextui-org/react";
import { Carousel } from "flowbite-react";

export default function OurWork() {
    return (
        <div>
            <div className="py-12 grid lg:grid-cols-3 items-center justify-center overflow-hidden bg-green-100">
                <div className="flex items-center justify-center overflow-hidden">
                    <img
                        id="OurWorkShirts"
                        src="/recycle-animation/OurWorkShirts.svg"
                        alt="Shirts to be recycled"
                        width={800}
                        height={800}
                        className={`${styles.OurWorkShirts} max-w-[50%] sm:max-w-[40%] lg:max-w-[80%]`}
                    />
                </div>
                <div className="w-4/5 mx-auto my-24 lg:col-span-2 space-y-8 md:text-lg lg:text-xl">
                    <div className="bg-gradient-to-r from-stone-700 to-emerald-600 bg-clip-text text-transparent">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            We are transforming the fashion industry
                        </span>{" "}
                        <br />
                        <span className="text-2xl sm:text-3xl md:text-4xl">
                            - by recycling the used clothes into biodegradable
                            fashion products
                        </span>
                    </div>
                    <p className="">
                        The Larry Rowbs Foundation is trying to mitigate the
                        harms of fast-fashion by setting up a recycling facility
                        in Africa.
                    </p>
                    <ul className="list-decimal list-inside">
                        <li>
                            Our products are made from{" "}
                            <b>100% recyclied materials</b>, are biodegradable,
                            and eco-friendly
                        </li>
                        <li>
                            Experience fashion with <b>stylish</b> and durable
                            clothing.
                        </li>
                        <li>
                            Say NO to fast-fashion and opt-in for{" "}
                            <b>chemical-free</b> clothes.
                        </li>
                    </ul>
                    <div>
                        <Button
                            size="lg"
                            className="bg-green-700 text-slate-50 font-bold text-lg sm:text-xl"
                            as={Link}
                            href="/donate"
                        >
                            Support our project
                        </Button>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="w-11/12 sm:w-10/12 m-auto flex flex-col gap-12">
                    <div className="text-green-800 text-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold ">
                            Samples of our 100% biodegradable recycled products
                        </span>
                        <br />
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                            - Free from toxins, safe for your health, and highly
                            durable
                        </span>
                    </div>
                    <div className="h-[617px]">
                        <Carousel slideInterval={5000}>
                            <div>
                                <img
                                    src="/samples/finished_product_5.jpg"
                                    alt="Shirt sample created by LRF"
                                    loading="lazy"
                                    width={462}
                                    height={617}
                                    className="m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md"
                                />
                            </div>
                            <div>
                                <img
                                    src="/samples/finshed_product.jpg"
                                    alt="Shirt sample created by LRF"
                                    loading="lazy"
                                    width={462}
                                    height={617}
                                    className="m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md"
                                />
                            </div>
                            <div>
                                <img
                                    src="/samples/finished_sample.jpg"
                                    alt="Shirt sample created by LRF"
                                    loading="lazy"
                                    width={462}
                                    height={617}
                                    className="m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="/samples/aso_oke_shoes.jpg"
                                    alt="shoes sample created by LRF"
                                    loading="lazy"
                                    width={1208}
                                    height={617}
                                    className="max-w-[50%] max-h-full rounded-md drop-shadow-md"
                                />
                            </div>
                            <div>
                                <img
                                    src="/samples/finished_sample_2.jpg"
                                    alt="Shirt sample created by LRF"
                                    loading="lazy"
                                    width={462}
                                    height={617}
                                    className="m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md"
                                />
                            </div>
                        </Carousel>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-green-800 text-center">
                        We are hoping to produce more such products - soon this
                        year.
                    </div>
                </div>
            </div>
            <div className="bg-[#48968f]">
                <div className="w-11/12 md:w-3/4 lg:w-1/2 m-auto text-white">
                    <h2 className="text-xl lg:text-2xl md:text-3xl font-bold py-6">
                        We have initiated a fundraiser on{" "}
                        <a
                            href="https://www.civicdawn.org/funds/campaign/CPNA00A00A11"
                            title="Civic Dawn Fundraiser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Civic Dawn
                        </a>
                        . Please donate to support our project.
                    </h2>
                </div>
            </div>
        </div>
    );
}
