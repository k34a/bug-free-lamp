import ContactUs from '@/components/Forms/ContactUs'
import FAQ from '@/components/FAQ/FAQ'
import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact us - Larry Rowbs Foundation</title>
                <meta name="description" content="Get in touch. Have a question? Send us a note using the form below and someone from the Larry Rowbs Foundation team will be in touch soon." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <FAQ />
                <ContactUs />
                <div className="mx-6 py-10 text-center md:text-left flex items-center justify-center">
                    <div>
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-home" aria-hidden="true"></i>
                            2459 Sugar Bottom Rd
                            Furlong, Pennsylvania
                            United States - 18925
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-envelope" aria-hidden="true"></i>
                            info@larryrowbs.com
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-phone" aria-hidden="true"></i>
                            + 01 605 954 8885
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
