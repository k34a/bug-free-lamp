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
      </Head>
      <div>
        <WhatsHappening />
        <OurMission />
        <HarmsCaused />
        <OurWork />
        <TextileWasteCarousel />
        <Benefits />
        <Partners />
        <SubscribeNewsletter />
      </div>
    </>
  )
}
