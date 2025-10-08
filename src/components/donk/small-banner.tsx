'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const DonkBanner = () => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="w-full bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 text-white text-sm sm:text-base shadow-md"
        >
            <Link
                href="/donk"
                className="flex items-center justify-center gap-3 py-4 px-6 hover:bg-green-900/60 transition-colors duration-300"
            >
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                    <Image
                        src="/images/donk-patchwork.jpg"
                        alt="Don K mascot icon"
                        fill
                        className="object-contain"
                        sizes="32px"
                        priority
                    />
                </div>

                <p className="text-center leading-tight">
                    <span className="font-semibold tracking-wide">
                        Introducing Don K:
                    </span>{' '}
                    <span className="font-light">
                        Turning fashion waste into dignity, jobs, and
                        opportunity.
                    </span>{' '}
                    <span className="underline font-medium">
                        Pre-order now →
                    </span>
                </p>
            </Link>
        </motion.div>
    )
}

export default DonkBanner
