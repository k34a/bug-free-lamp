'use client'

import { motion } from 'framer-motion'

export default function CheckoutCancelledModal() {
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
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-12 h-12 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Order Cancelled
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    Your pre-order was cancelled. No worries – Don K will be
                    here waiting whenever you&apos;re ready to join the
                    movement!
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                        💚 Every Don K pre-order helps rescue fashion waste and
                        create sustainable opportunities. We hope you&apos;ll
                        consider joining us soon!
                    </p>
                </div>
                <button
                    onClick={() => window.history.replaceState({}, '', '/donk')}
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Keep Exploring
                </button>
            </motion.div>
        </motion.div>
    )
}
