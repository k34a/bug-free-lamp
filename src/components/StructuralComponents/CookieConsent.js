import React from "react";
import { useEffect, useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';

const CookieConsent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [consent, setConsent] = useState(
        typeof window !== "undefined" ? localStorage.cookiesConsent : "undefined"
    );
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cookiesConsent", consent);
        }
        setHydrated(true);
    }, [consent])

    if (!hydrated) {
        return null;
    }

    const handleAccept = () => {
        setIsOpen(false);
        setConsent("allowed");
    };

    return (
        <>
            {consent !== "allowed" && isOpen && (
                <div
                    className="border-purple-700 border-2 fixed bottom-0 right-0 w-full bg-purple-100 p-4 flex flex-col lg:flex-row justify-center items-center z-50 text-sm"
                >
                    <p className="mr-4">
                        <FaCookieBite color='brown' className='inline mr-2' size={24} />Psst... we can&apos;t offer you actual chocolate chip cookies, but we do have some cookies on our website that might make your browsing experience just as satisfying (minus the chocolatey goodness, of course).
                    </p>
                    <button
                        className="bg-purple-700 text-white rounded-md px-4 py-2 hover:bg-purple-800"
                        onClick={(e) => { handleAccept(); }}
                    >
                        Sure, why not!
                    </button>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
