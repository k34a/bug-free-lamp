import React from "react";
import Link from "next/link";
import { Tooltip, Button } from "@nextui-org/react";
import SubscribeEmail from "../Forms/SubscribeEmail";

export default function Footer() {
    return (
        <section className="bg-black py-8 space-y-8 text-white break-words">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="mx-auto my-12 max-w-screen-md text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
                        JOIN THE MOVEMENT!
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-gray-300 md:mb-12 sm:text-xl">
                        Stay up to date with the roadmap progress, announcements
                        and events conducted by signing up for our weekly
                        newsletter.
                    </p>
                    <SubscribeEmail
                        formType="Subscribe"
                        submitButtonText="Subscribe"
                        successMessage="Thank you for subscribing."
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <a
                    href="https://www.linkedin.com/company/larryrowbsfoundation/"
                    className="mr-6 text-slate-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-facebook"></i>
                </a>
                <a
                    href="https://www.instagram.com/thelarryrowbsfoundation/"
                    className="mr-6 text-slate-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-instagram"></i>
                </a>
                <a
                    href="https://www.linkedin.com/company/larryrowbsfoundation/"
                    className="mr-6 text-slate-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
            <div className="flex justify-center">
                <Link href="/terms" className="mr-6 text-slate-200 text-sm">
                    Terms & Conditions
                </Link>
            </div>
            <div className="text-center px-6 text-sm">
                <span>&copy; Copyright 2019-{new Date().getFullYear()} </span>
                <Link className="text-green-200" href="/">
                    Larry Rowbs Foundation
                </Link>
            </div>
            <div className="text-center px-3 text-sm leading-relaxed">
                <Tooltip
                    content={
                        <div className="w-[270px] flex flex-col gap-2 p-2">
                            <h2 className="font-bold">K34a</h2>
                            <p>
                                Your product. Our craft. Let&apos;s collaborate
                                to make an impact.
                            </p>
                            <a
                                href="mailto:k34a@live.in"
                                className="text-green-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Contact us
                            </a>
                        </div>
                    }
                >
                    <div
                        variant="bordered"
                        className="flex items-center justify-center "
                    >
                        <div className="text-white border-white bg-black">
                            Site designed & developed by{" "}
                            <span className="text-green-300">k34a</span>
                        </div>
                    </div>
                </Tooltip>
            </div>
        </section>
    );
}
