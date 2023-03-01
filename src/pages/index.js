import Benefits from '@/components/homepage/Benefits'
import HarmsCaused from '@/components/homepage/HarmsCaused'
import OurMission from '@/components/homepage/OurMission'
import OurWork from '@/components/homepage/OurWork'
import TextileWasteCarousel from '@/components/homepage/TextileWasteCarousel'
import WhatsHappening from '@/components/homepage/WhatsHappening'
import Partners from '@/components/homepage/Partners'
import SubscribeNewsletter from '@/components/Forms/SubscribeNewsletter'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Larry Rowbs Foundation</title>
        <meta name="description" content="Larry Rowbs Foundation is a registered not-for-profit organization working on mitigating the harms of the fast-fashion industry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TextileWasteCarousel />
        <OurMission />
        <WhatsHappening />
        <HarmsCaused />
        <OurWork />
        <Benefits />
        <Partners />
        <SubscribeNewsletter />
        <div className='bg-green-100'>
          <div className='w-1/2 lg:w-1/3 m-auto py-12'>
            <div className="bg-green-600 text-white text-xl font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg border border-gray-500">
              <svg aria-hidden="true" className="w-10 h-10 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <a href="https://www.websitecarbon.com/" target="_blank" rel="noopener noreferrer">This website emits 0.38g of CO<sub>2</sub></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
