import React from "react";

import TeamMemberCard from "./TeamMemberCard";

const detailsMembers = [
    {
        Name: "Rowaiye Olanrewaju",
        Role: "Founder",
        Bio: "10 years experience in the fashion industry, masters in interna,tional trade and bachelors in economics, fashion designer, and an entrepreneur",
        LinkedIn: "https://www.linkedin.com/in/rowaiye-olanrewaju-a4a912227/",
    },
    {
        Name: "Travis Robbins",
        Role: "Co-founder",
        Bio: "6 years of team management experience, service in the Mari,ne Corps and founder of business scaling startup Pains To Profits",
        LinkedIn: "https://www.linkedin.com/in/travis-pains-to-profits/",
    },
    {
        Name: "Hannah Craik",
        Role: "Co-founder",
        Bio: "Founder of Salonvironment. Professional environmental ad,vocate, consultant, lobbyist, and entrepreneur with 10 years experience in the beauty & salon industry.",
        LinkedIn: "https://www.linkedin.com/in/hannah-craik-michigan/",
    },
    {
        Name: "Lin Sheppard",
        Role: "Chief Adviser",
        Bio: "53 years as a successful businessman who has ru,n a number of businesses and who holds an MBA from the Wharton School at the University of Pennsylvania",
        LinkedIn: "https://www.linkedin.com/in/lin-sheppard/",
    },
    {
        Name: "Saksham Garg",
        Role: "Technology Lead",
        Bio: "Transforming businesses into money minting units by strategically saving costs, and boosting sales. All about software, automation, and hustle",
        LinkedIn: "https://www.linkedin.com/in/sak1sham/",
    },
    {
        Name: "Susan Chapin",
        Role: "Board of Directors",
        Bio: "Senior Sustainability and Energy Risk Pro, BS in Chemis,try, certified in ESG Disclosures & Frameworks. Formulate policies & build world-class GRC frameworks for ESG goals & disclosures. Expert on legislative & regulatory matters, lobbies for climate-based legislation",
        LinkedIn: "https://www.linkedin.com/in/susanachapin-mysticct",
    },
    {
        Name: "Anoop Raghuram",
        Role: "Sustainability Engineer",
        Bio: "Sustainability professional with experience in Sustainable ,Business Models & Circular economy, Masters in Energy and Environmental engineering, and Bachelor’s in mechanical engineering.",
        LinkedIn: "https://www.linkedin.com/in/anoop-raghuram-5bb0b8193/",
    },
    {
        Name: "Clementina Martinez-Masarweh",
        Role: "Board Member",
        Bio: "Slow fashion maven, zero-waste artist. Founder of DNA Sustain,able Threds. Award-winning filmmaker. Sustainable fashion advocate. SB62 Bill influencer. Inspiring change for 20+ years.",
        LinkedIn: "https://www.linkedin.com/in/clementinamasarwehdesigner/",
    },
    {
        Name: "Dominic Barbuto",
        Role: "Game Development Lead",
        Bio: "A professional game developer, graduated from Full Sail University, Founder-Domention Studios",
        LinkedIn: "https://www.linkedin.com/in/dombarbuto",
    },
];

export default function OurTeam() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white py-6">
            <div className="flex flex-col">
                <div className="flex flex-col mt-8">
                    <div className="container max-w-7xl px-4">
                        <div className="flex flex-wrap justify-center text-center mb-12">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-gray-900 text-4xl font-bold mb-8">
                                    Meet the Team
                                </h2>

                                <p className="text-gray-700 text-lg font-light">
                                    With over 100 years of combined experience,
                                    we have got a well-seasoned team at the
                                    helm.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            {detailsMembers.map((ele, index) => {
                                return (
                                    <TeamMemberCard
                                        name={ele.Name}
                                        role={ele.Role}
                                        bio={ele.Bio}
                                        linkedin={ele.LinkedIn}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
