import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Error() {
    return (
        <>
            <Head>
                <title>Oops! Page not found</title>
            </Head>

            <main className="grid grid-cols-1 gap-4 my-24 sm:grid-cols-2">
                <div>
                    <img
                        src="/astranout-working.svg"
                        alt="error image"
                        className="m-auto w-1/3 my-12 animate-[animateMove_5s_ease-in-out_infinite]"
                    />
                </div>
                <div className="m-auto">
                    <h1 className="text-8xl my-6">500</h1>
                    <p className="text-4xl my-4">
                        It&apos;s not you, it&apos;s us!
                    </p>
                    <p className="text-xl my-4">
                        Our engineers are working on resolving this error.
                    </p>
                    <button class="my-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        <Link href="/">Go home</Link>
                    </button>
                </div>
            </main>
        </>
    );
}
