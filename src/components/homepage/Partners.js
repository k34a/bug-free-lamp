export default function Partners(){
    return (
        <div>
            <div className="w-11/12 md:w-3/4 lg:w-1/2 m-auto py-12">
                <img 
                    src="/collaborated-hand.svg"
                    alt="Our Partners"
                    className="w-1/4 lg:w-1/4 m-auto hidden md:block"
                />
                <h2 className="font-bold text-3xl md:hidden text-center capitalize">We have partnered with</h2>
                <div className="grid divide-y-4">
                    <div className="grid md:grid-cols-2 gap-4 m-2">
                        <div className="m-2 flex justify-center items-center">
                            <img
                                src="/Christian-Ministry-Alliance.png"
                                alt="Christian Ministry Alliance"
                            />
                        </div>
                        <div className="m-2 md:text-lg lg:text-xl">
                            We are proud to announce that <a className="underline" target="_blank" rel="noopener noreferrer" href="https://christianministryalliance.org">the Christian Ministry Alliance</a> has endorsed our work and vision.
                            <br /><br />
                            The Christian Ministry Alliance is a registered 501(c)(3) Corporation with the U.S. Internal Revenue Service.
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 m-2">
                        <div className="m-2 flex justify-center items-center">
                            <img
                                src="/WorldWideWeavingOfWomen.webp"
                                alt="World Wide Weaving Of Women"
                            />
                        </div>
                        <div className="m-2 md:text-lg lg:text-xl">
                            <a className="underline" target="_blank" rel="noopener noreferrer" href="https://www.joy-of-weaving-wwwow.com/">World Wide Weaving of Women</a>, an initiative fostering a global network for women engaged in textile art, has partnered with the Larry Rowbs Foundation to support the development of a sustainable textile industry.
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#48968f]">
                <div className="w-11/12 md:w-3/4 lg:w-1/2 m-auto py-12 text-white">
                    <a 
                        href="https://www.kickstarter.com/projects/lrf/the-larry-rowbs-foundation-fashion-recycling-in-africa" 
                        title="Check this out!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="text-3xl font-bold py-6">
                            We are now on Kickstarter. Check it out!
                        </h2>
                        <img src='./kick_starter_pix.png' alt="Larry Rowbs Foundation on Kickstarter" />
                    </a>
                </div>
            </div>
        </div>
    );
}
