import RegistrationForm from "@/components/Webinar/RegistrationForm";
import Head from "next/head";
import tsparticlesConfig from "@/components/Webinar/tsparticles.config";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const webinarData = {
    title: "Stylish Sustainability Webinar",
    subheading: "A sneak-peak into the realm of circular fashion in Africa",
    description: (
        <p className="mb-6">
            Join us as we explore the fascinating world of recycling clothing in Africa in a thought-provoking webinar!
            The prospects and difficulties of revamping the African fashion sector through cutting-edge recycling techniques will be introduced by the Larry Rowbs Foundation Team.
            <br /><br />Learn how recycling and reusing can lead to new opportunities for sustainable development and growth in addition to helping to reduce waste. Learn how to join this movement and engage with a global impact project. Anyone interested in sustainability, fashion, or the future of Africa must attend this webinar. Create a better future for the African fashion sector by registering right away!
        </p>
    ),
    date: "March 24th, 2023",
    time: "09:00 AM EST",
    surveyForm: "/survey",
    lastRegistrationDate: "25 Apr 2023 06:00:00 GMT",
}

export default function Webinar(params) {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <Head>
                <title>Stylish Sustainability Webinar - Larry Rowbs Foundation</title>
                <meta name="description" content="Join the Stylish Sustainability Webinar to explore how taking a step towards sustainable fashion may brighten the future of Africa, and how Larry Rowbs Foundation is working on its forefront. Register Now." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={tsparticlesConfig}
                    className="-z-10 fixed w-full"
                >
                </Particles>
                <RegistrationForm
                    data={webinarData}
                />
            </div>
        </>
    )
};
