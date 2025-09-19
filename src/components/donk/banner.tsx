import Image from 'next/image'
import Link from 'next/link'

export default function EdonTeaserBanner() {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="container mx-auto px-4 py-6 md:py-8">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-6">
                    {/* Left side - Hero content */}
                    <div className="space-y-4">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                <span className="text-emerald-600">e.don</span>{' '}
                                <span className="text-gray-800">Movement</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                                A global initiative transforming fashion waste
                                into hope, dignity, and opportunity
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-200">
                            <div className="flex items-center gap-4 mb-2">
                                <Image
                                    src="/images/donk-head.png"
                                    alt="Don K"
                                    width={60}
                                    height={60}
                                    className="w-12 h-12 md:w-15 md:h-15"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-emerald-800">
                                        Meet Don K
                                    </h3>
                                    <p className="text-sm text-emerald-700">
                                        Our Cause Crusader
                                    </p>
                                </div>
                            </div>
                            <blockquote className="text-base md:text-lg font-medium text-emerald-800 italic">
                                &ldquo;When we carry together, we create change.
                                When we create change, hope is reborn.&rdquo;
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                                <div className="text-xl md:text-2xl font-bold text-blue-600">
                                    92M
                                </div>
                                <div className="text-xs md:text-sm text-blue-700">
                                    Tons of textile waste annually
                                </div>
                            </div>
                            <div className="bg-pink-50 p-3 rounded-lg border border-pink-200 text-center">
                                <div className="text-xl md:text-2xl font-bold text-pink-600">
                                    100K
                                </div>
                                <div className="text-xs md:text-sm text-pink-700">
                                    Don K sales target
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Visual impact */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/donk-in-landfill.jpg"
                                alt="Don K in fashion waste landfill"
                                width={600}
                                height={400}
                                className="w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-2 left-4 right-4 text-white">
                                <h4 className="text-lg md:text-xl font-bold mb-1">
                                    From Waste to Worth
                                </h4>
                                <p className="text-sm md:text-base opacity-90">
                                    Turning discarded threads into stories of
                                    hope and dignity
                                </p>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg border-4 border-emerald-200">
                            <Image
                                src="/images/edon-logo.png"
                                alt="e.don logo"
                                width={60}
                                height={20}
                                className="w-12 h-4"
                            />
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-6 md:p-8 text-white max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            <span className="text-emerald-200">Threads</span>{' '}
                            <span className="text-blue-200">Reborn</span>.{' '}
                            <span className="text-pink-200">Impact</span>{' '}
                            <span className="text-yellow-200">Worn</span>.
                        </h3>
                        <p className="text-lg md:text-xl mb-4 opacity-90 max-w-2xl mx-auto">
                            Join us in giving clothes a second life, reducing
                            pollution, and tackling
                            <b> child trafficking and labor</b> in the fashion
                            industry. Every DON K purchased helps stop waste
                            from landfills and fights exploitation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
                            <Link
                                href="/donk"
                                className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Learn More About Our Mission
                            </Link>
                            <div className="text-sm opacity-80">
                                🌍 Global • 🧵 Sustainable • 💚 Impactful
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
