import styles from "@/styles/WhatsHappening.module.css"
import Link from "next/link"
import { useEffect, useState } from "react";
import { BsFillCameraReelsFill } from "react-icons/bs";

const skeleton = (
    <div className="w-full h-full bg-gray-300 rounded-lg animate-pulse">
        <div
            width={1472}
            height={916} 
            className="m-auto text-black text-3xl font-bold flex items-center justify-center"
            style={{
                maxWidth: "100%",
                aspectRatio: "1472/916"
            }}
        >
            <BsFillCameraReelsFill size={48}/>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);


export default function WhatsHappening() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    })

    return (
        <div className="py-12">
            <div className='flex items-center justify-center'>
                <div
                    className={`${styles.sceneVisual} w-full lg:w-3/5 m-auto lg:drop-shadow-2xl border-dashed border-0 lg:border-4 border-slate-700 rounded-lg lg:rounded-xl`}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    {isLoading ? skeleton : (
                        <video 
                            width={1472}
                            height={916}
                            autoPlay
                            muted
                            loop
                            className={styles.video}
                        >
                            <source src="/LandfillAnimation.mp4" type="video/mp4" />
                        </video>
                    )}
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
