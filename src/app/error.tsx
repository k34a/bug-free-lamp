"use client";

import Link from "next/link";

export default function Error() {
    return (
        <>
            <div className="flex flex-col items-center gap-12 justify-center py-24">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">500</h1>
                    <p className="text-2xl font-bold">
                        It&apos;s not you, it&apos;s us! Our engineers are
                        working on resolving this error.
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
