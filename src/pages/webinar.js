import RegistrationForm from "@/components/Webinar/RegistrationForm";
import Head from "next/head";
import styles from "@/styles/RegistrationForm.module.css"

export default function Webinar(params) {
    return (
        <>
            <Head>
                <title>Webinar</title>
            </Head>
            <div className={styles.mainbody}>
                <RegistrationForm />
            </div>
        </>
    )
};
