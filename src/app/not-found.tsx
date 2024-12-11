"use client";

import Link from "next/link";
import "./globals.css";

export default function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center gap-12 justify-center py-24">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">404</h1>
                    <p className="text-xl font-bold">
                        Oops! This page is lost in space.
                    </p>
                    <div>
                        <Link href="/" className="underline">
                            Return home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
