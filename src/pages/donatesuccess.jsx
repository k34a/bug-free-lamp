import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Donate() {
    return (
        <>
            <Head>
                <title>Thank you - Larry Rowbs Foundation</title>
                <meta
                    name="description"
                    content="Thank you for support Larry Rowbs Foundation in cleaning Africa and making the fashion industry more sustainable."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="w-7/8 md:w-2/3 h-screen m-auto flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-black text-center m-12 opacity-70 text-green-600">
                        Thank you for supporting us! You are truly a Change
                        Maker &#128522;
                    </h1>
                    <Link
                        href="/"
                        className="bg-black text-white p-4 rounded-lg"
                    >
                        Return home
                    </Link>
                </div>
            </main>
        </>
    );
}
