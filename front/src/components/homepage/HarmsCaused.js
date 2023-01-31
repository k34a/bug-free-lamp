import Link from "next/link";

export default function HarmsCaused() {
    return (
        <div className="container mx-auto">
            <div className="grid auto-cols-max grid-cols-1 md:grid-cols-3 shadow text-white text-center">
                <div className="p-6 bg-orange-700 border rounded-lg">
                    <i className="text-6xl fa fa-globe"></i>
                    <h2 className="text-2xl my-4">Environmental Effects</h2>
                    <p className="my-6">
                        Fast fashion, with its endless cycle of production and consumption, leaves a damaging trail on the environment- from water contamination, accelerating global warming, deforestation, to the piles of waste in landfills.
                    </p>
                    <Link href="/blog" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-slate-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn more</span>
                        <span className="relative invisible">Learn more</span>
                    </Link>
                </div>
                <div className="p-6 bg-blue-700 border rounded-lg">
                    <i className="text-6xl fa fa-user-times"></i>
                    <h2 className="text-2xl my-4">Social Harms</h2>
                    <p className="my-6">
                        Workers in the fast-fashion industry are exploited with extremely low wages, dangerous working conditions and denied human rights.
                    </p>
                    <Link href="/blog" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-slate-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn more</span>
                        <span className="relative invisible">Learn more</span>
                    </Link>
                </div>
                <div className="p-6 bg-violet-700 border rounded-lg">
                    <i className="text-6xl fa fa-hospital-o"></i>
                    <h2 className="text-2xl my-4">Health Issues</h2>
                    <p className="my-6">
                        The cheap and toxic chemical used to dye the clothes are carcinogenic in nature, and potentially cause developmental issues.
                    </p>
                    <Link href="/blog" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-slate-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white-500 transition-all duration-300 transform group-hover:translate-x-full ease">Learn more</span>
                        <span className="relative invisible">Learn more</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
