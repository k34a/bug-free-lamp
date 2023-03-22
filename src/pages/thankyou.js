import Head from 'next/head'
import Link from 'next/link'

export default function Thankyou() {
    return (
        <>
            <Head>
                <title>Thank you - Larry Rowbs Foundation</title>
                <meta name="description" content="Thank you for participating in the survey of Larry Rowbs Foundation." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='w-7/8 md:w-2/3 h-screen m-auto flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-black text-center mx-12 mt-12 mb-6 opacity-70 text-rose-600'>Thank you! &#127881;</h1>
                    <h2 className='text-2xl italic font-black text-center mx-12 mt-6 mb-12 opacity-70 text-sky-800'>&ldquo;Small acts, when multiplied by millions of people, can transform the world.&rdquo; - Howard Zinn</h2>
                    <Link href="/" className="bg-black text-white p-4 rounded-lg">
                        Return home
                    </Link>
                </div>
            </main>
        </>
    )
}
