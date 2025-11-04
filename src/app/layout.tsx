import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import CookieConsent from '@/components/cookies'
import Footer from '@/components/Footer'
import HeaderMegaMenu from '@/components/structure/header'
import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from '@mantine/core'
import { ngoDetails } from '@/config/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: ngoDetails.name,
    description: ngoDetails.description,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <GoogleAnalytics gaId="G-CL7HRH1ZH9" />
            <CookieConsent />
            <body className={inter.className}>
                <MantineProvider>
                    {/* <Header /> */}
                    <HeaderMegaMenu />
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    )
}
