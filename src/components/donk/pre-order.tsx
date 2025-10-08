'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PreorderForm from './form'
import Link from 'next/link'

export default function PreorderSection() {
    return (
        <section className="container mx-auto px-4 py-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left image + message */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <div className="relative rounded-2xl border bg-gray-50 shadow-sm aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/donk-patchwork.jpg"
                            alt="Don K standing among clothing waste wearing a colorful jacket"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <p className="text-sm text-gray-600">
                        Every purchase helps transform fashion waste into
                        dignity, jobs, and opportunity.
                    </p>
                </motion.div>

                {/* Right pre-order card */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Pre-order Don K
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Limited edition. Not just a teddy bear - a cause
                        collectable.
                    </p>

                    <ul className="list-disc ml-5 text-gray-700 space-y-2 mb-6">
                        <li>Your name can be stitched on your Don K</li>
                        <li>
                            Environmental impact: less landfill, less pollution
                        </li>
                        <li>
                            Helps fight child trafficking and exploitation in
                            fashion
                        </li>
                        <li>
                            Visit our facility once built and see the impact
                            firsthand
                        </li>
                    </ul>

                    <div className="flex items-baseline gap-3 mb-6">
                        <div className="text-3xl font-extrabold text-emerald-700">
                            $50
                        </div>
                        <div className="text-sm text-gray-500">
                            pre-order price
                        </div>
                    </div>

                    <PreorderForm />

                    <p className="mt-4 text-sm text-gray-600">
                        Social impact investors: interested in larger orders or
                        aligned campaigns?{' '}
                        <Link
                            className="text-blue-600 underline"
                            href="/contact"
                        >
                            Contact us
                        </Link>{' '}
                        to explore win-win partnerships.
                    </p>
                </motion.div>
            </div>

            {/* Separate investment note below the main section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-10 text-center"
            >
                <p className="text-base md:text-lg text-gray-800 font-medium">
                    Each Don K can also be resold in future years and serves as
                    a meaningful social impact investment.
                </p>
            </motion.div>
        </section>
    )
}
