'use client'

import { motion } from 'framer-motion'

export default function CheckoutSuccessModal() {
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
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-12 h-12 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Thank You! 🎉
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    Your pre-order for Don K has been received! You&apos;ve just
                    joined a movement that transforms fashion waste into hope
                    and dignity.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-emerald-800 font-medium mb-2">
                        What happens next:
                    </p>
                    <ul className="text-sm text-emerald-700 text-left space-y-2">
                        <li>
                            ✓ You&apos;ll receive a confirmation email shortly
                        </li>
                        <li>
                            ✓ Your limited edition Don K will be crafted with
                            care
                        </li>
                        <li>
                            ✓ You&apos;re making a real impact on the
                            environment and communities
                        </li>
                    </ul>
                </div>
                <button
                    onClick={() => window.history.replaceState({}, '', '/donk')}
                    className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                    Continue Exploring
                </button>
            </motion.div>
        </motion.div>
    )
}
