import React from "react";
import "@/styles/globals.css";
import Header from "@/components/StructuralComponents/Header";
import Footer from "@/components/StructuralComponents/Footer";
import NextNProgress from "nextjs-progressbar";
import CookieConsent from "@/components/StructuralComponents/CookieConsent";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextNProgress options={{ showSpinner: false }} />
            <NextUIProvider>
                <main className={`h-screen`}>
                    <Header />
                    <div className="w-full">
                        <CookieConsent />
                        <Component {...pageProps} />
                        <Footer />
                    </div>
                </main>
            </NextUIProvider>
        </>
    );
}
