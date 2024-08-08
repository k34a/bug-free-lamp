import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="mt-12 md:mt-24 bg-black py-8 space-y-8 text-white break-words">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <p className="font-semibold">Social media handles:</p>
                <div className="flex justify-center gap-1">
                    <a
                        href="https://www.linkedin.com/company/larryrowbsfoundation/"
                        className="mr-6 text-slate-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/thelarryrowbsfoundation/"
                        className="mr-6 text-slate-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/larryrowbsfoundation/"
                        className="mr-6 text-slate-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>
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
            <div className="text-center px-3 leading-relaxed">
                <div>
                    <div className="flex items-center justify-center ">
                        <div className="text-white border-white bg-black">
                            <p className="text-sm">
                                Site designed & developed by{" "}
                                <span className="text-green-300">k34a</span>
                            </p>
                            <p className="text-xs">
                                Your product. Our craft. Let&apos;s collaborate
                                to make an impact!{" "}
                                <a
                                    href="mailto:k34a@live.in"
                                    className="text-green-300 hover:text-green-200"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Contact us
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
