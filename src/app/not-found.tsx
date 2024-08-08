import Image from "next/image";
import Link from "next/link";
import styles from "./Error.module.css";

export default function NotFound() {
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
                <h1 className="text-2xl font-bold">404</h1>
                <p className="text-2xl font-bold">
                    Opps! This page is lost in space.
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
