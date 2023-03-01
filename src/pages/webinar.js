import RegistrationForm from "@/components/Webinar/RegistrationForm";
import Head from "next/head";
import styles from "@/styles/RegistrationForm.module.css"

export default function Webinar(params) {
    return (
        <>
            <Head>
                <title>Stylish Sustainability Webinar - Larry Rowbs Foundation</title>
                <meta name="description" content="Join the Stylish Sustainability Webinar to explore how taking a step towards sustainable fashion may brighten the future of Africa, and how Larry Rowbs Foundation is working on its forefront. Register Now." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.mainbody}>
                <RegistrationForm />
            </div>
        </>
    )
};
