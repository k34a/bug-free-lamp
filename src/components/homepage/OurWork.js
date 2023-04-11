import styles from "@/styles/OurWork.module.css"
import Link from "next/link"

export default function OurWork() {
    return (
        <div className={`py-12 md:py-24 grid lg:grid-cols-3 ${styles.OurWork}`}>
            <div className="flex justify-center items-center">
                <div className={styles.OurWorkAnimation}>
                    <img
                        id="OurWorkBg"
                        className={styles.OurWorkBg}
                        src="/recycle-animation/OurWorkBg.svg"
                        alt="Colourful background for recycling clothes animation"
                    />
                    <img
                        id="OurWorkShirts"
                        className={styles.OurWorkShirts}
                        src="/recycle-animation/OurWorkShirts.svg"
                        alt="Shirts to be recycled"
                    />
                </div>
            </div>
            <div className="w-4/5 mx-auto my-24 lg:col-span-2 space-y-8 md:text-lg lg:text-xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-normal text-pink-800">
                    We are transforming this unusable clothing waste into fashionable products.
                </h2>
                <p className="">
                    By setting up a recycling facility in Uganda, Larry Rowbs Foundation is trying to mitigate these harms of fast-fashion.
                </p>
                <ul className="list-decimal list-inside">
                    <li>Shop eco-friendly clothing, stylish and durable.</li>
                    <li>Try sustainable fashion with 100% biodegradable and recycled materials.</li>
                    <li>Say NO to fast-fashion and opt-in for chemical-free clothes.</li>
                </ul>
                <div>
                    <Link
                        href="/donate"
                        className="!no-underline text-white bg-cyan-700 hover:bg-cyan-600 focus:ring-4 focus:outline-none font-medium rounded-lg p-5 text-center inline-flex items-center">
                        Consider Supporting Us
                    </Link>
                </div>
            </div>
        </div>
    )
}
