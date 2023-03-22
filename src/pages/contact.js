import ContactUs from '@/components/Forms/ContactUs'
import FAQ from '@/components/FAQ/FAQ'
import Head from 'next/head'
import Link from 'next/link';
import { BiSmile } from 'react-icons/bi';

const faq = [
    {
        ques: "How does the Larry Rowbs Foundation promote sustainability in the Fashion Industry?",
        ans: (
            <>
                Our Foundation is working on building a clothing recylcing facility in Uganda. This facility aims to recycle unusable clothing from landfills into fashionable and super-durable garments, thereby reducing the environmental impact of discarded materials and promoting the use of recycled materials in the fashion industry.
                <br /><br />
                While the recycling facility is in process, we are empowering artisans to create beautiful products from unusable clothing and create funds from their sale!
                <br /><br />
                In addition to this, we are engaging in educating the public about the environmental and social impacts of the fashion industry, advocating for sustainable fashion practices and policies, and collaborating with other organizations and individuals to drive change within the industry.
                <br /><br />
                It is worth noting that the specific ways in which the Larry Rowbs Foundation promotes sustainability in the fashion industry may vary and evolve over time, as the organization works to address the challenges and opportunities of the industry.
            </>
        )
    },
    {
        ques: "How can I purchase products made from recycled/sustainable materials from the Foundation?",
        ans: (
            <>
                We will soon add a product store to this site for you to explore our products and support our initiative. You can also share your email in the contact form below, and we will take the burden of notifying you when our catalogue is live (which will be very soon!)
            </>
        )
    },
    {
        ques: "How can I learn more about sustainable fashion and the environmental impact of the fashion industry?",
        ans: (
            <>
                Please look at the <Link href="/blog" className="text-red-700">repository of knowledge</Link> collated by our team. We are certain that most of your doubts will be resolved from here. Otherwise, please contact us below, and we will help resolve your query.
            </>
        )
    },
    {
        ques: "How does the Larry Rowbs Foundation create jobs and education opportunities in Uganda?",
        ans: (
            <>
                The organization aims to create new jobs and education opportunities in Uganda by recycling unusable clothing from landfills into new garments. By setting up a factory in Uganda that processes and recycles this clothing, the Larry Rowbs Foundation aims to provide employment opportunities for local workers and contribute to the development of the local economy.
                <br /><br />
                In addition to this, the Larry Rowbs Foundation may also engage in other activities to create jobs and education opportunities in Uganda, such as setting up a foundation-sponsored school with several training programs and workshops to teach new skills and knowledge to local workers and supporting initiatives that aim to improve education and access to education in the region.
            </>
        )
    },
    {
        ques: "Can I visit the Larry Rowbs Foundation's facility in Uganda?",
        ans: (
            <>
                Definitely! Once the facility is functional, we would love to have you there. In fact, we will show you around <BiSmile className="inline" />
            </>
        )
    },
];

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
                <FAQ 
                    heading="Frequently Asked Questions (FAQs)"
                    description="The most common questions about how our foundation works and what we do."
                    faq={faq}
                />
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
