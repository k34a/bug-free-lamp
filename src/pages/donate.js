import DonateForm from '@/components/Forms/DonateForm'
import SubscribeNewsletter from '@/components/Forms/SubscribeNewsletter'
import Head from 'next/head'

export default function Donate() {
    return (
        <>
            <Head>
                <title>Donate - Larry Rowbs Foundation</title>
                <meta name="description" content="Become a Sustainability Hero by helping us fight the hazards of fast fashion and create a sustainable future. Donate today!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='w-11/12 md:w-2/3 m-auto'>
                    <h1 className='text-4xl font-black text-center m-12 opacity-70 text-rose-600'>Be a Sustainable Fashion Hero: Donate Today!</h1>
                    <p>
                        When you donate to Larry Rowbs Foundation, you help us fight the hazards of fast fashion, improve the well-being of workers in the social industry, and create a sustainable future. Your contribution, no matter the size, can make a meaningful impact and support our mission.
                    </p>
                    <br />
                    <p>
                        <u><b>Benefits of Donation:</b></u>
                    </p>
                    <ul className='list-disc list-inside'>
                        <li>Promote Sustainable Fashion: Your donation supports initiatives that raise awareness about sustainable fashion and its benefits for the environment and society.</li>
                        <li>Support Workers&apos; Rights: Your donation helps us improve the well-being of workers in the social industry and promote fair labor practices.</li>
                        <li>Create a Sustainable Future: Your donation funds research and development of sustainable materials and technologies that can reduce the environmental impact of the fashion industry.</li>
                        <li>Make a Difference: Your donation can create a positive change and support our efforts to create a more ethical and eco-friendly fashion industry.</li>
                    </ul>
                    <p>
                        <br />
                        Whether you make a one-time donation or become a monthly donor, your contribution can make a significant difference. Join us in our mission to promote sustainable fashion and create a more equitable and sustainable future for all.
                        <br />
                        <br />
                        Thank you for your support!
                    </p>
                </div>
                <DonateForm />
                <SubscribeNewsletter />
            </main>
        </>
    )
}
