"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Error.module.css";

export default function Error() {
    return (
        <div className="flex flex-col items-center gap-12 justify-center py-24">
            <Image
                className={styles.image}
                src="/error.svg"
                width={640}
                height={220}
                alt="error image"
            />
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">500</h1>
                <p className="text-2xl font-bold">
                    It&apos;s not you, it&apos;s us! Our engineers are working
                    on resolving this error.
                </p>
                <div>
                    <Link href="/" className="underline">
                        Return home
                    </Link>
                </div>
            </div>
        </div>
    );
}
