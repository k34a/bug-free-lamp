"use client";

import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [consent, setConsent] = useState(
        typeof window !== "undefined"
            ? localStorage.cookiesConsent
            : "undefined"
    );
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cookiesConsent", consent);
        }
        setHydrated(true);
    }, [consent]);

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
                <div className="fixed bottom-3 sm:left-3 z-50 max-w-[400px] border-2 border-amber-700 bg-white rounded-lg p-4">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <h5 className="text-lg sm:text-xl font-bold">
                                Cookies
                            </h5>
                            <FaCookieBite
                                color="brown"
                                className="inline ml-2"
                                size={24}
                            />
                        </div>
                        <div>
                            <div>
                                We use cookies to provide a better experience.
                            </div>
                        </div>
                        <div>
                            <button
                                className="bg-green-600 dark:bg-green-400 text-white dark:text-black px-2 py-1 rounded-lg"
                                onClick={(e) => {
                                    handleAccept();
                                }}
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
