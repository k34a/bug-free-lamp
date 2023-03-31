import Link from "next/link";

export default function RegistrationForm(params) {
    const webinarEnded = (
        <div>
            <p className="text-lg font-bold">This form is no longer accepting responses.</p>
            <br />
            <p className="text-lg font-bold">Kindly share your <Link href="/survey" className="text-purple-700">feedback</Link> with us after attending the webinar. We would appreciate hearing your thoughts. Thank you!</p>
        </div>
    );

    return (
        <div className="w-11/12 md:w-1/2 mx-auto py-12 bg-transparent">
            <div className="border-purple-500 py-6 px-5 border-4 bg-white">
                <div className="mb-12">
                    <h1 className="font-black text-4xl mb-6 capitalize text-slate-600">
                        Stylish Sustainability Webinar
                    </h1>
                    <h2 className="font-black text-2xl mb-6 capitalize text-slate-600">
                        A sneak-peak into the realm of circular fashion in Africa
                    </h2>
                    <p className="mb-6">
                        Join us as we explore the fascinating world of recycling clothing in Africa in a thought-provoking webinar! 
                        The prospects and difficulties of revamping the African fashion sector through cutting-edge recycling techniques will be introduced by the Larry Rowbs Foundation Team. 
                        <br /><br />Learn how recycling and reusing can lead to new opportunities for sustainable development and growth in addition to helping to reduce waste. Learn how to join this movement and engage with a global impact project. Anyone interested in sustainability, fashion, or the future of Africa must attend this webinar. Create a better future for the African fashion sector by registering right away!
                    </p>
                    <div className="text-xl mb-6">
                        <i className="fa fa-calendar"></i>
                        &nbsp;&nbsp;March 24th, 2023
                    </div>
                    <div className="text-xl mb-6">
                        <i className="fa fa-clock-o"></i>
                        &nbsp;&nbsp;09:00 AM EST
                    </div>
                </div>

                {webinarEnded}
            </div>
        </div>
    );
};
