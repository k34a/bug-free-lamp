import RegistrationForm from "@/components/Webinar/RegistrationForm";
import Head from "next/head";
import tsparticlesConfig from "@/components/Webinar/tsparticles.config";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Webinar(params) {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
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
                <RegistrationForm />
            </div>
        </>
    )
};
