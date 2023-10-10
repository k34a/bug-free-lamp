import Benefits from '@/components/homepage/Benefits'
import HarmsCaused from '@/components/homepage/HarmsCaused'
import OurMission from '@/components/homepage/OurMission'
import OurWork from '@/components/homepage/OurWork'
// import TextileWasteCarousel from '@/components/homepage/TextileWasteCarousel'
import WhatsHappening from '@/components/homepage/WhatsHappening'
import Partners from '@/components/homepage/Partners'
import Head from 'next/head'
import { Carousel } from 'flowbite-react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - Larry Rowbs Foundation</title>
                <meta name="description" content="Larry Rowbs Foundation is a registered non-governmental organization working on mitigating the harms of the fast-fashion industry" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="bg-[#48968f]">
                    <div className="w-11/12 md:w-3/4 lg:w-1/2 m-auto text-white">
                        <h2 className="text-xl font-bold py-6">
                            We have initiated a fundraiser on <a
                                href="https://www.gofundme.com/f/larry-rowbs-clothing-recycling-initiative"
                                title="Go Fund Me Fundraiser"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Gofundme
                            </a>. Please donate to support our mission.
                        </h2>

                    </div>
                </div>
                <WhatsHappening />
                <OurMission />
                <HarmsCaused />
                <OurWork />
                <div className='bg-yellow-300 py-12'>
                    <div className='w-11/12 sm:w-10/12 m-auto flex flex-col gap-12'>
                        <div className='text-xl sm:text-2xl md:text-3xl font-bold text-yellow-800'>
                            And... here are some samples of 100% biodegradable recycled products that we have produced.
                        </div>
                        {/*
                            5 images
                            1st - 1208 * 617
                            Others - 462 * 617
                        */}
                        <div className='h-[617px]'>
                            <Carousel slideInterval={5000}>
                                <div>
                                    <img
                                        src="/samples/aso_oke_shoes.jpg"
                                        alt="shoes sample created by LRF"
                                        loading='lazy'
                                        width={1208}
                                        height={617}
                                        className='max-w-full max-h-full rounded-md drop-shadow-md'
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/samples/finished_product_5.jpg"
                                        alt="Shirt sample created by LRF"
                                        loading='lazy'
                                        width={462}
                                        height={617}
                                        className='m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md'
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/samples/finshed_product.jpg"
                                        alt="Shirt sample created by LRF"
                                        loading='lazy'
                                        width={462}
                                        height={617}
                                        className='m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md'
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/samples/finished_sample.jpg"
                                        alt="Shirt sample created by LRF"
                                        loading='lazy'
                                        width={462}
                                        height={617}
                                        className='m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md'
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/samples/finished_sample_2.jpg"
                                        alt="Shirt sample created by LRF"
                                        loading='lazy'
                                        width={462}
                                        height={617}
                                        className='m-auto h-full max-w-full max-h-full aspect-462/617 rounded-md drop-shadow-md'
                                    />
                                </div>
                            </Carousel>
                        </div>
                        <div className='text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-yellow-800'>
                            We are hoping to produce more such products - soon this year.
                        </div>
                        <div className='flex items-center justify-center'>
                            <a
                                href="https://www.gofundme.com/f/larry-rowbs-clothing-recycling-initiative"
                                className='text-xl sm:text-xl md:text-2xl font-semibold py-3 px-5 border-black border-4 rounded-lg !no-underline hover:bg-purple-700 hover:text-white'
                            >
                                <div className='flex items-center justify-center gap-2'>
                                    Support our mission
                                    <FaArrowRight />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <TextileWasteCarousel /> */}
                <Benefits />
                <Partners />
            </div>
        </>
    )
}
