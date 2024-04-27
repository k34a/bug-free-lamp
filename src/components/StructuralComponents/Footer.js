import React from "react";
import Link from "next/link";
import { ImLeaf } from "react-icons/im";
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
            <div className="flex v-screen justify-center items-center">
                <a
                    href="https://www.websitecarbon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-green-300"
                >
                    <div className="border-green-300 border-4 text-green-300 font-medium inline-flex items-center px-4 py-3 rounded-lg w-full">
                        <ImLeaf size={24} className="mr-2" />
                        This website emits 0.38g of CO2
                    </div>
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
                <p>
                    Website by{" "}
                    <a
                        className="text-green-200"
                        href="https://k34a.github.io"
                        target="_blank"
                        rel="noreferrer noopenner"
                    >
                        k34a
                    </a>
                </p>
            </div>
        </section>
    );
}
