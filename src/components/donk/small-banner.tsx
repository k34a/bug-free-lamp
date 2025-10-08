'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const DonkBanner = () => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 text-white text-sm sm:text-base shadow-md"
        >
            <Link
                href="/donk"
                className="block text-center py-4 px-6 hover:bg-green-900/60 transition-colors duration-300"
            >
                <span className="font-semibold tracking-wide">
                    Introducing Don K:
                </span>{' '}
                <span className="font-light">
                    Turning fashion waste into dignity, jobs, and opportunity.
                </span>{' '}
                <span className="underline font-medium">Pre-order now →</span>
            </Link>
        </motion.div>
    )
}

export default DonkBanner
