'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CheckoutErrorModal() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => window.history.replaceState({}, '', '/donk')}
        >
            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-12 h-12 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Oops! Something went wrong
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    We encountered an issue setting up your checkout. Please try
                    again in a moment, or{' '}
                    <Link href="/contact" className="underline">
                        contact our team
                    </Link>{' '}
                    if the problem persists.
                </p>
                <button
                    onClick={() => window.history.replaceState({}, '', '/donk')}
                    className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Try Again
                </button>
            </motion.div>
        </motion.div>
    )
}
