import FAQItem from "./FAQItem";

const faq = [
    {
        ques: "How does the Larry Rowbs Foundation promote sustainability in the Fashion Industry?",
        ans: `
        Our Foundation is working on building a clothing recylcing facility in Uganda. This facility aims to recycle unusable clothing from landfills into fashionable and super-durable garments, thereby reducing the environmental impact of discarded materials and promoting the use of recycled materials in the fashion industry. 
        \nWhile the recycling facility is in process, we are empowering artisans to create beautiful products from unusable clothing and create funds from their sale! 
        \nIn addition to this, we are engaging in educating the public about the environmental and social impacts of the fashion industry, advocating for sustainable fashion practices and policies, and collaborating with other organizations and individuals to drive change within the industry. 
        \nIt is worth noting that the specific ways in which the Larry Rowbs Foundation promotes sustainability in the fashion industry may vary and evolve over time, as the organization works to address the challenges and opportunities of the industry.`
    },
    {
        ques: "How can I purchase products made from recycled/sustainable materials from the Foundation?",
        ans: "We will soon add a product store to this site for you to explore our products and support our initiative. You can also share your email in the contact form below, and we will take the burden of notifying you when our catalogue is live (which will be very soon!)"
    },
    {
        ques: "How can I learn more about sustainable fashion and the environmental impact of the fashion industry?",
        ans: "Please look at the repository of knowledge our team has collated in the list of Blogs. We are certain that most of your doubts will be resolved from here. Otherwise, please contact us below, and we will help resolve your query."
    },
    {
        ques: "How does the Larry Rowbs Foundation create jobs and education opportunities in Uganda?",
        ans: "The organization aims to create new jobs and education opportunities in Uganda by recycling unusable clothing from landfills into new garments. By setting up a factory in Uganda that processes and recycles this clothing, the Larry Rowbs Foundation aims to provide employment opportunities for local workers and contribute to the development of the local economy.\nIn addition to this, the Larry Rowbs Foundation may also engage in other activities to create jobs and education opportunities in Uganda, such as setting up a foundation-sponsored school with several training programs and workshops to teach new skills and knowledge to local workers and supporting initiatives that aim to improve education and access to education in the region."
    },
    {
        ques: "Can I visit the Larry Rowbs Foundation's facility in Uganda?",
        ans: "Definitely! Once the facility is functional, we would love to have you there. In fact, we will show you around :)"
    },
];

export default function FAQ(){
    return (
        <div className="my-12">
            <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-base leading-relaxed w-4/5 xl:w-2/4 lg:w-3/4 m-auto">
                The most common questions about how our foundation works and what we do.
            </p>
            <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full px-4 py-2">
                    {faq.map((ele, index) => {
                        return (
                            <FAQItem question={ele.ques} answer={ele.ans} key={index}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}