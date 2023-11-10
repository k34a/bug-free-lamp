import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head></Head>
            <body>
                <Main />
                <NextScript />
                <link
                    type="text/css"
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                ></link>
            </body>
        </Html>
    );
}
