import styles from "@/styles/WhatsHappening.module.css"
import Link from "next/link"

export default function WhatsHappening() {
    return (
        <div className="py-12">
            <div className='flex items-center justify-center'>
                <div className="relative">
                    <div className={`${styles.sceneVisual} lg:drop-shadow-2xl border-dashed border-0 lg:border-4 border-slate-700 rounded-lg lg:rounded-xl`}>
                        <img
                            id="landfill"
                            className={styles.landfill}
                            src="/landfill-animation/landfill-bg.svg"
                            alt="landfill background"
                        />
                        <img
                            id="landfill-clouds"
                            className={styles.landfillClouds}
                            src="/landfill-animation/landfill-clouds.svg"
                            alt="landfill clouds"
                        />
                        <img
                            id="landfill-birds"
                            className={styles.landfillBirds}
                            src="/landfill-animation/landfill-birds.svg"
                            alt="landfill birds"
                        />
                        <img
                            id="landfill-truck-garbage"
                            className={styles.landfillTruckGarbage}
                            src="/landfill-animation/landfill-truck-garbage.svg"
                            alt="landfill truck garbage"
                            />
                        <img
                            id="landfill-truck-static"
                            className={styles.landfillTruckStatic}
                            src="/landfill-animation/landfill-truck-static.svg"
                            alt="landfill truck static"
                        />
                        <img
                            id="landfill-truck-body"
                            className={styles.landfillTruckBody}
                            src="/landfill-animation/landfill-truck-body.svg"
                            alt="landfill truck body"
                            />
                        <img
                            id="landfill-truck-incliner"
                            className={styles.landfillTruckIncliner}
                            src="/landfill-animation/landfill-truck-incliner.svg"
                            alt="landfill truck incliner"
                            />
                        <img
                            id="landfill-truck-container"
                            className={styles.landfillTruckContainer}
                            src="/landfill-animation/landfill-truck-container.svg"
                            alt="landfill truck container"
                        />
                    </div>
                </div>
            </div>
            <div className="w-11/12 sm:w-4/5 lg:w-3/5 m-auto py-12 leading-relaxed">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-red-500 mb-5 capitalize">
                    Every Second, a truck full of clothes ends up in landfills!
                </h2>
                <p className="mb-6 lg:mb-10 lg:text-xl">
                    The fashion industry is putting emphasis on cutting costs, by shifting towards cheaper, low-quality fabrics. The average lifespan of a garment, such as a t-shirt, has decreased significantly.
                    <br />
                    This trend is also generating loads of textile waste. Countries like the US, UK, China, and Canada donate millions of tonnes of used clothes to Africa, but 70% of these donations are unusable and ultimately and up in landfills.
                </p>
                <Link href="/blog" className="no-underline">
                    <button className="text-white font-bold bg-gradient-to-r from-violet-400 via-violet-500 to-pink-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Explore more
                    </button>
                </Link>
            </div>
        </div>
    )
}
