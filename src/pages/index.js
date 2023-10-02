import Benefits from '@/components/homepage/Benefits'
import HarmsCaused from '@/components/homepage/HarmsCaused'
import OurMission from '@/components/homepage/OurMission'
import OurWork from '@/components/homepage/OurWork'
import TextileWasteCarousel from '@/components/homepage/TextileWasteCarousel'
import WhatsHappening from '@/components/homepage/WhatsHappening'
import Partners from '@/components/homepage/Partners'
import Head from 'next/head'

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
              </a> - Check it out.
            </h2>

          </div>
        </div>
        <WhatsHappening />
        <OurMission />
        <HarmsCaused />
        <OurWork />
        {/* <TextileWasteCarousel /> */}
        <Benefits />
        <Partners />
      </div>
    </>
  )
}
