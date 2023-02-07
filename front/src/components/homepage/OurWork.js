import styles from "@/styles/OurWork.module.css"
import Link from "next/link"

export default function OurWork() {
    return (
        <div className={`grid lg:grid-cols-3 ${styles.OurWork}`}>
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
            <div className="w-4/5 m-auto lg:col-span-2">
                <h2 className="text-2xl font-bold leading-normal text-pink-800 mb-5 mt-5">
                    We are transforming this unusable clothing waste into fashionable products.
                </h2>
                <p className="mb-5">
                    By setting up a recycling facility in Uganda, Larry Rowbs Foundation is trying to mitigate these harms of fast-fashion.
                </p>
                <ul className="list-decimal list-inside mb-5">
                    <li>Shop eco-friendly clothing, stylish and durable.</li>
                    <li>Try sustainable fashion with 100% biodegradable and recycled materials.</li>
                    <li>Say NO to fast-fashion and opt-in for chemical-free clothes.</li>
                </ul>
                <Link href="/donate" className="mb-5">
                    <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Donate
                    </button>
                </Link>
            </div>
        </div>
    )
}
