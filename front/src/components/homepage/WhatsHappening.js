import styles from "@/styles/WhatsHappening.module.css"
import Link from "next/link"

export default function WhatsHappening() {
    return (
        <div className="grid lg:grid-cols-2">
            <div>
                <div className={styles.sceneVisual}>
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
            <div className="w-4/5 m-auto">
                <h2 className="text-2xl font-bold leading-normal text-pink-800 mb-5">
                    A truck full of clothes ends up in landfill every second!
                </h2>
                <p className="mb-5">
                    The fashion industry is putting emphasis on cutting costs, by shifting towards cheaper, low-quality fabrics. The average lifespan of a garment, such as a t-shirt, has decreased significantly.
                    <br />
                    This trend is also generating loads of textile waste. Countries like the US, UK, China, and Canada donate millions of tonnes of used clothes to Africa, but 70% of these donations are unusable and ultimately and up in landfills.
                </p>
                <Link href="/blog" className="no-underline">
                    <button className="text-gray-900 font-bold bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Explore more
                    </button>
                </Link>
            </div>
        </div>
    )
}
