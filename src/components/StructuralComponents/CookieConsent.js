import React from "react";
import { useEffect, useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";

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
                <Card className="fixed bottom-3 sm:left-3 z-50 max-w-[400px] border-3 border-amber-700">
                    <CardHeader>
                        <h5 className="text-lg sm:text-xl font-bold">Cookies</h5>
                        <FaCookieBite color='brown' className='inline ml-2' size={24} />
                    </CardHeader>
                    <CardBody>
                        <div>
                            We use cookies and similar technologies to help personalize content, tailor and measyre ads, and provide a better experience. By clicking accept you agree to this.
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button
                            size="lg"
                            className="bg-green-600 dark:bg-green-400 text-white dark:text-black"
                            onClick={(e) => { handleAccept(); }}
                        >Accept</Button>
                    </CardFooter>
                </Card>
            )}
        </>
    );
};

export default CookieConsent;
