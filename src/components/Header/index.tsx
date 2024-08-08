"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./header.module.css";

const SecondaryLinks = [
    ["Blog", "/blog"],
    ["Join", "/join"],
    ["Contact", "/contact"],
];

const Header = () => {
    const [menuBarOpen, setMenuBarOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-around py-4">
                <div
                    className="font-bold text-lg md:text-xl lg:text-2xl text-green-800"
                    id="logo"
                >
                    <Link href="/">Larry Rowbs Foundation</Link>
                </div>
                <button
                    type="button"
                    className="flex sm:hidden cursor-pointer"
                    onClick={() => setMenuBarOpen((e) => !e)}
                >
                    <GiHamburgerMenu size={24} />
                </button>
                <div className={`hidden sm:flex items-center gap-4`}>
                    {SecondaryLinks.map((l, index) => {
                        return (
                            <Link
                                key={index}
                                href={l[1]}
                                className={`py-2 px-4 font-bold border-2 border-green-700 ${styles.secondaryLink}`}
                            >
                                {l[0]}
                            </Link>
                        );
                    })}
                </div>
                <div className="hidden sm:flex">
                    <Link
                        href="/donate"
                        className="py-2 px-3 bg-green-700 hover:bg-green-500 duration-200 text-white rounded-lg font-bold"
                    >
                        Donate
                    </Link>
                </div>
            </header>
            <AnimatePresence>
                {menuBarOpen && (
                    <motion.div
                        className="flex flex-col sm:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {SecondaryLinks.map((l, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={l[1]}
                                    className={`p-4 ${styles.secondaryLink}`}
                                >
                                    {l[0]}
                                </Link>
                            );
                        })}
                        <Link
                            href="/donate"
                            className="bg-green-700 text-white hover:bg-green-500 p-4 duration-200 font-bold"
                        >
                            Donate
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
