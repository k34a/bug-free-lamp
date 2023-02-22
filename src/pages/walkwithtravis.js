import OrbitalRev from '@/components/WalkWithTravis/OrbitalRev'
import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import Head from 'next/head'
import { useRef } from 'react'
import About from '@/components/WalkWithTravis/About';

export default function Walkwithtravis() {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return <>
        <Head>
            <title>Walk with Travis - Larry Rowbs Foundation</title>
            <meta name="description" content="Travis (Co-founder of the Larry Rowbs Foundation) will be walking for 20,000 miles to support the fashion industry from exploiting its workers and environment. Learn more." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main style={{ overflowX: 'hidden' }}>
            <div>
                <div style={{ position: "relative" }}>
                    <button
                        className='absolute top-1/2 right-4 w-12 h-12 rounded-full bg-blue-500 hover:bg-red-500 text-white animate-bounce'
                        onClick={handleClick}
                    >
                        <b><i className="fa fa-angle-down text-4xl"></i></b>
                    </button>
                    <div
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 capitalize w-12 h-12 '
                        onClick={handleClick}
                    >
                        <h1 className='flex items-center justify-center text-3xl md:text-6xl font-black text-opacity-65 text-white'>
                            Walk for Sustainability
                        </h1>
                    </div>
                    <div>
                        <OrbitalRev />
                    </div>
                </div>
            </div>
            <div ref={ref}>
                <About />
            </div>
            <div>
                <SubscribeNewsletter />
            </div>
        </main>
    </>
};
