import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Larry Rowbs Foundation x SOULU | e.don Movement',
    description:
        'Join the e.don Movement by Larry Rowbs Foundation and SOULU. Transform fashion waste into hope, dignity, and sustainable community impact.',
}

export default function DonkPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
                <div className="relative container mx-auto px-4 py-16 md:py-24">
                    <div className="text-center mb-12">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Larry Rowbs Foundation
                            </h1>
                            <div className="text-3xl md:text-4xl text-blue-500 font-bold">
                                ×
                            </div>
                            <Image
                                src="/images/soulu-logo-clean.png"
                                alt="SOULU"
                                width={120}
                                height={60}
                                className="w-24 h-12 md:w-32 md:h-16"
                            />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-emerald-600">e.don</span>{' '}
                            <span className="text-gray-800">Movement</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
                            Every Thread Has a Purpose
                        </p>
                        <div className="text-3xl md:text-4xl font-bold text-center">
                            <span className="text-emerald-600">Threads</span>{' '}
                            <span className="text-blue-600">Reborn</span>.{' '}
                            <span className="text-pink-600">Impact</span>{' '}
                            <span className="text-orange-500">Worn</span>.
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            The Crisis We Face
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Fashion waste has grown so large it can be seen from
                            space
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                        <div className="relative">
                            <Image
                                src="/images/fashion-waste-landfill.jpg"
                                alt="Fashion waste landfill with people"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Mountains of Discarded Dreams
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Every year, millions of tons of clothing end up
                                in landfills, creating environmental disasters
                                that affect communities worldwide. These
                                aren&apos;t just clothes - they&apos;re missed
                                opportunities for dignity, employment, and hope.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <div className="text-2xl font-bold text-red-600">
                                        92M
                                    </div>
                                    <div className="text-sm text-red-700">
                                        Tons of textile waste annually
                                    </div>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                    <div className="text-2xl font-bold text-orange-600">
                                        2,700L
                                    </div>
                                    <div className="text-sm text-orange-700">
                                        Water to make one t-shirt
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Image
                            src="/images/clothing-pile.jpg"
                            alt="Piles of discarded clothing"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md w-full h-48 object-cover"
                        />
                        <div className="flex items-center">
                            <div>
                                <h4 className="text-xl font-bold text-gray-800 mb-3">
                                    Fast Fashion&apos;s Hidden Cost
                                </h4>
                                <p className="text-gray-700">
                                    Behind every discarded garment is a story of
                                    resources wasted, communities affected, and
                                    opportunities lost. But every thread also
                                    holds the potential for rebirth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Child Trafficking Section*/}
            <section className="w-full bg-white py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
                            The Hidden Victims of Fashion
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Child trafficking and forced labor are dark
                            realities of the fast fashion industry. Millions of
                            children are exploited in unsafe conditions,
                            stitching clothes that end up in stores worldwide.
                            Together, we can break this cycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Block 1 */}
                        <div className="flex flex-col items-center text-center bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
                            <div className="w-20 h-20 relative mb-4">
                                <Image
                                    src="/images/child-labor.jpg"
                                    alt="Child labor in textiles"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="font-bold text-xl text-red-700 mb-2">
                                Exploited Lives
                            </h3>
                            <p className="text-gray-700 text-base">
                                Millions of children are trafficked into fashion
                                supply chains each year.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div className="flex flex-col items-center text-center bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
                            <div className="w-20 h-20 relative mb-4">
                                <Image
                                    src="/images/broken-chain.jpg"
                                    alt="Breaking the chain"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="font-bold text-xl text-emerald-700 mb-2">
                                Breaking Chains
                            </h3>
                            <p className="text-gray-700 text-base">
                                Don K fights exploitation by reducing demand for
                                fast fashion and raising awareness.
                            </p>
                        </div>

                        {/* Block 3 */}
                        <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                            <div className="w-20 h-20 relative mb-4">
                                <Image
                                    src="/images/children-education.jpg"
                                    alt="Children education"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="font-bold text-xl text-blue-700 mb-2">
                                Future Freed
                            </h3>
                            <p className="text-gray-700 text-base">
                                Every DON K purchased helps free children from
                                forced labor and supports education.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
                            Your choice doesn&apos;t just reduce waste—it helps
                            end <b>child trafficking and labor</b> in the
                            fashion industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Meet Don K Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Meet Our Cause Crusader
                        </h2>
                        <p className="text-xl text-gray-600">
                            The humble donkey turning waste into worth
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
                        <div className="text-center">
                            <Image
                                src="/images/donk-head.png"
                                alt="Don K mascot head"
                                width={200}
                                height={200}
                                className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-emerald-600 mb-2">
                                Don K
                            </h3>
                            <p className="text-gray-700">
                                Our official Cause Crusader
                            </p>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                                <blockquote className="text-lg md:text-xl font-medium text-emerald-800 italic mb-4">
                                    &ldquo;When we carry together, we create
                                    change. When we create change, hope is
                                    reborn.&rdquo;
                                </blockquote>
                                <p className="text-emerald-700">
                                    Don K is a humble yet determined donkey with
                                    big listening ears, kind eyes, and a heart
                                    for carrying the weight of change. With his
                                    colorful eco-jackets and resilient nature,
                                    he reminds us that every burden can become a
                                    bridge to hope.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-blue-800 mb-2">
                                        Voice for Advocacy
                                    </h4>
                                    <p className="text-sm text-blue-700">
                                        Using humor and warmth to highlight
                                        serious issues
                                    </p>
                                </div>
                                <div className="bg-pink-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-pink-800 mb-2">
                                        Cultural Icon
                                    </h4>
                                    <p className="text-sm text-pink-700">
                                        Becoming part of culture through
                                        collectibles and stories
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <Image
                            src="/images/donk-patchwork.jpg"
                            alt="Don K wearing colorful patchwork jacket"
                            width={500}
                            height={750}
                            className="rounded-xl shadow-lg w-full object-contain"
                        />
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                                The Story of Transformation
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Born in the shadow of a bustling marketplace
                                where mountains of discarded clothes piled high,
                                Don K learned that a donkey&apos;s strength
                                isn&apos;t just for hauling loads, but for
                                carrying burdens that others cannot bear.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                One day, he noticed colors buried beneath the
                                dust - reds, blues, and greens peeking through
                                the grey. In that moment, Don K saw not waste,
                                but hope waiting to be reborn.
                            </p>
                            <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-4 rounded-lg">
                                <p className="text-emerald-800 font-medium">
                                    Now Don K invites you to walk beside him, to
                                    carry the cause, to wear the change, and be
                                    part of a movement that turns discarded
                                    threads into a future woven with dignity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Transformation Section */}
            <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            From Waste to Worth
                        </h2>
                        <p className="text-xl text-gray-600">
                            Witness the power of transformation
                        </p>
                    </div>

                    <div className="relative mb-12">
                        <Image
                            src="/images/donk-in-landfill.jpg"
                            alt="Don K standing in clothing landfill wearing colorful jacket"
                            width={1024}
                            height={1024}
                            className="rounded-2xl shadow-2xl w-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Hope Rising from the Ashes
                            </h3>
                            <p className="text-lg md:text-xl opacity-90">
                                Don K stands as a symbol of resilience, wearing
                                rebirthed fashion in the very place where hope
                                was once buried
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌱</span>
                            </div>
                            <h4 className="text-xl font-bold text-emerald-800 mb-3">
                                Rebirth
                            </h4>
                            <p className="text-gray-700">
                                Every discarded garment becomes raw material for
                                something beautiful and purposeful
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-800 mb-3">
                                Community
                            </h4>
                            <p className="text-gray-700">
                                Creating sustainable jobs and empowering
                                communities through eco-fashion enterprise
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💚</span>
                            </div>
                            <h4 className="text-xl font-bold text-pink-800 mb-3">
                                Impact
                            </h4>
                            <p className="text-gray-700">
                                Reducing environmental waste while restoring
                                dignity and creating meaningful opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Three Pillars of Change
                        </h2>
                        <p className="text-xl text-gray-600">
                            A comprehensive ecosystem for sustainable impact
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-2xl border border-emerald-200">
                            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-white">
                                    1
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
                                People Movement
                            </h3>
                            <p className="text-emerald-700 leading-relaxed mb-4">
                                Building a scalable pathway that unites people
                                from every story, every street, every
                                circumstance under the banner of purpose,
                                advocacy, and belonging.
                            </p>
                            <ul className="text-sm text-emerald-600 space-y-2">
                                <li>
                                    • Transform passive supporters into active
                                    advocates
                                </li>
                                <li>• Create ongoing sustainable funding</li>
                                <li>
                                    • Provide turnkey cause-marketing for brands
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl border border-blue-200">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-white">
                                    2
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                                Cause Crusader
                            </h3>
                            <p className="text-blue-700 leading-relaxed mb-4">
                                Don K serves as our playful, engaging character
                                that creates connection across generations,
                                using humor and warmth to make serious issues
                                accessible.
                            </p>
                            <ul className="text-sm text-blue-600 space-y-2">
                                <li>• Voice for advocacy and education</li>
                                <li>• Cultural icon through collectibles</li>
                                <li>• Brand collaboration opportunities</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-8 rounded-2xl border border-pink-200">
                            <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-white">
                                    3
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-pink-800 mb-4 text-center">
                                ReBirthed Clothing
                            </h3>
                            <p className="text-pink-700 leading-relaxed mb-4">
                                A fashion range showcasing upcycled fabrics
                                reborn into bold statement pieces, carrying
                                stories of renewal and transformation.
                            </p>
                            <ul className="text-sm text-pink-600 space-y-2">
                                <li>• Sustainable fashion statements</li>
                                <li>• Designer collaboration opportunities</li>
                                <li>• Wearable advocacy and identity</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <Image
                            src="/images/edon-logo.png"
                            alt="e.don brand logo"
                            width={300}
                            height={100}
                            className="mx-auto mb-6 w-48 h-16 md:w-64 md:h-20"
                        />
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            The creative meaning behind e.DON embeds woven
                            layers of symbolism:
                            <span className="font-semibold text-emerald-600">
                                {' '}
                                eco
                            </span>{' '}
                            for sustainability,
                            <span className="font-semibold text-blue-600">
                                {' '}
                                Don K
                            </span>{' '}
                            as our humble yet resilient character, and{' '}
                            <span className="font-semibold text-pink-600">
                                {' '}
                                DO
                            </span>{' '}
                            as a call to action.
                        </p>
                    </div>
                </div>
            </section>

            {/* Community Impact Section */}
            <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Building Community Together
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The e.don Movement is more than environmental
                                action - it&apos;s about creating belonging,
                                fostering unity, and building a global community
                                that carries change together.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">
                                            Unrestricted Membership
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Anyone can join because every thread
                                            matters
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">
                                            Cause Collectibles
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Own Don K with unique accessories
                                            and stories
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-pink-500 rounded-full flex-shrink-0 mt-1"></div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">
                                            Rewards & Benefits
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Savings, discounts, and exclusive
                                            experiences
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="font-bold text-gray-800 mb-3">
                                    Impact Goals
                                </h4>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-emerald-600">
                                            100K
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Don K Target
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-blue-600">
                                            Global
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            No Boundaries
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Image
                                src="/images/lions-community.jpg"
                                alt="Lions representing strength and community"
                                width={500}
                                height={300}
                                className="rounded-xl shadow-lg w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-b from-emerald-600 via-blue-600 to-white">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Join the Movement
                    </h2>

                    <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Where every thread has a purpose, and every person can
                        help weave change. Together, we can carry the weight of
                        change—turning waste into wear, wear into hope, and
                        ending <b>child trafficking and labor</b> in fashion.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <h4 className="font-bold mb-2">
                                Every Thread Rescued
                            </h4>
                            <p className="text-sm opacity-90">
                                Transforming fashion waste into hope
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <h4 className="font-bold mb-2">
                                Every Wear Makes a Difference
                            </h4>
                            <p className="text-sm opacity-90">
                                Creating sustainable impact through fashion
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                            <h4 className="font-bold mb-2">
                                Every Person Matters
                            </h4>
                            <p className="text-sm opacity-90">
                                Building community through shared purpose
                            </p>
                        </div>
                    </div>

                    <div className="text-2xl md:text-3xl font-bold mb-8">
                        <div>
                            🌍 Global Movement • 🧵 Fashion Rebirth • 💚
                            Community Impact
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
