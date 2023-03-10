export default function Partners(){
    return (
        <div>
            <div className="w-11/12 md:w-3/4 lg:w-1/2 m-auto py-12">
                <img 
                    src="/collaborated-hand.svg"
                    alt="Our Partners"
                    className="w-1/4 lg:w-1/4 m-auto"
                />
                <div className="grid md:grid-cols-2 gap-4 m-2">
                    <div className="m-2 flex justify-center items-center">
                        <img
                            src="/Christian-Ministry-Alliance.png"
                            alt="Christian Ministry Alliance"
                        />
                    </div>
                    <div className="m-2 md:text-lg lg:text-xl">
                        We are proud to announce that <a  className="underline" target="_blank" rel="noopener noreferrer" href="https://christianministryalliance.org">the Christian Ministry Alliance</a> has endorsed our work and vision.
                        <br /><br />
                        The Christian Ministry Alliance is a registered 501(c)(3) Corporation with the U.S. Internal Revenue Service.
                    </div>
                </div>
            </div>
        </div>
    );
}