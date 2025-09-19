import ContactUs from '@/components/Forms/contact-us'
import FAQ from '@/components/FAQ/FAQ'
import { Metadata } from 'next'
import { BiEnvelope, BiHome, BiPhoneCall } from 'react-icons/bi'
import { faqs } from './cfg'

export const metadata: Metadata = {
    title: 'Contact us - Larry Rowbs Foundation',
    description:
        'Get in touch. Have a question? Send us a note using the form below and someone from the Larry Rowbs Foundation team will be in touch soon.',
}

export default function Contact() {
    return (
        <>
            <main>
                <FAQ
                    heading="Frequently Asked Questions (FAQs)"
                    description="The most common questions about how our foundation works and what we do."
                    faqs={faqs}
                />
                <ContactUs />
                <div className="mx-6 py-10 text-center md:text-left flex items-center justify-center">
                    <div>
                        <h2 className="text-3xl mb-6 font-bold">
                            Contact Information
                        </h2>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start gap-3 mb-4">
                            <BiHome size={24} />
                            2459 Sugar Bottom Rd Furlong, Pennsylvania United
                            States - 18925
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start gap-3 mb-4">
                            <BiEnvelope size={24} />
                            info@larryrowbsfoundation.org
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start gap-3 mb-4">
                            <BiPhoneCall size={24} />+ 01 605 954 8885
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
