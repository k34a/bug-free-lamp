import OurWork from '@/app/components/OurWork'
import WhatsHappening from '@/app/components/WhatsHappening'
import Partners from '@/app/components/Partners'
import AnimationVideo from '@/app/components/AnimationVideo'
import Image from 'next/image'
import Link from 'next/link'
import EdonTeaserBanner from '@/components/donk/banner'
import DonkBanner from '@/components/donk/small-banner'
import NewsletterSubscribe from '@/components/newsletter-subscribe'

const benefits = [
    {
        title: 'Creating More Jobs',
        icon: '/iconmonstr-party-22.svg',
        description: (
            <>
                Sustainable fashion gives a boost to the economies of
                underdeveloped areas. It creates new jobs and <b>fair-wage</b>{' '}
                opportunities.
            </>
        ),
    },
    {
        title: 'Ensuring Better Health',
        icon: '/basketball-player-scoring-svgrepo-com.svg',
        description: (
            <>
                Fast fashion harms the environment and threatens health with
                toxic chemicals. We&apos;re committed to safe,{' '}
                <b>sustainable</b> clothing for a greener, <b>healthier</b>{' '}
                world.
            </>
        ),
    },
    {
        title: 'Providing Free Education',
        icon: '/iconmonstr-school-30.svg',
        description: (
            <>
                Fashion school costs <b>$$$</b>. We will fund a{' '}
                <b>Charitable Fashion School</b> with revenue from selling
                sustainable fashion, offering free education to drive industry
                change.
            </>
        ),
    },
]

export default function Home() {
    return (
        <main>
            <div className="flex flex-col pt-18 sm:pt-24 pb-6 md:pt-30 gap-16 sm:gap-24 md:gap-30">
                <EdonTeaserBanner />
                <div className="px-3 text-center flex flex-col items-center justify-center gap-8 md:gap-12">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-700 to-emerald-600 bg-clip-text text-transparent">
                        Making fashion sustainable
                        <br />- one step at a time
                    </div>
                    <div className="text-lg sm:text-xl">
                        Larry Rowbs Foundation is recycling the waste generated
                        by fast-fashion into 100% biodegradable products,
                        <br />
                        ensuring a greener earth and empowering lives of fashion
                        workers.
                    </div>
                    <Link
                        className="bg-green-700 text-white font-bold text-lg sm:text-xl p-4 rounded-lg"
                        href="/donate"
                    >
                        Support Our Project
                    </Link>
                </div>
                <DonkBanner />
                <div className="w-11/12 sm:w-3/4 md:w-3/5 mx-auto drop-shadow-lg md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <AnimationVideo src="/AnimationVideo.mp4" />
                </div>
                <div className="w-11/12 sm:w-3/4 mx-auto flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
                        {benefits.map((benefit, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-3 justify-center px-6 py-12 h-full border-2 rounded-lg"
                                >
                                    <Image
                                        src={benefit.icon}
                                        alt={benefit.title}
                                        width={60}
                                        height={60}
                                        className="max-w-[50%] m-auto aspect-1"
                                    />
                                    <h2 className="capitalize font-bold text-xl sm:text-2xl md:text-3xl text-center">
                                        {benefit.title}
                                    </h2>
                                    <p className="text-center text-lg">
                                        {benefit.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-center items-center">
                        <Link
                            className="bg-green-700 text-white font-bold text-lg sm:text-xl p-4 rounded-lg"
                            href="/blog"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="bg-red-200 px-9 py-9 w-11/12 md:w-3/4 mx-auto rounded-xl ">
                        <p className="text-lg md:text-xl lg:text-2xl text-green-700">
                            <span className="text-red-600">Fun fact:</span> We
                            are developing the{' '}
                            <Link
                                href="/larry-rowbs-adventure"
                                className="font-semibold text-lg md:text-xl lg:text-2xl text-green-700 underline"
                            >
                                world&apos;s first eduventurous game
                            </Link>{' '}
                            to make the fashion industry more sustainable. Find
                            more about it{' '}
                            <Link
                                href="/larry-rowbs-adventure"
                                className="font-semibold text-lg md:text-xl lg:text-2xl text-green-700 underline"
                            >
                                here
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <div>
                    <NewsletterSubscribe />
                </div>
                <WhatsHappening />
                <div className="w-11/12 sm:w-3/4 md:w-3/5 mx-auto drop-shadow-lg md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <AnimationVideo src="/larry01 (360p).mp4" />
                </div>
                <OurWork />
                <Partners />
                <div>
                    <NewsletterSubscribe />
                </div>
            </div>
        </main>
    )
}
