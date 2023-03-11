import Head from 'next/head'
import Link from 'next/link'

export default function Donate() {
    return (
        <>
            <Head>
                <title>Thank you - Larry Rowbs Foundation</title>
                <meta name="description" content="Get in touch. Have a question? Send us a note using the form below and someone from the Larry Rowbs Foundation team will be in touch soon." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className='w-7/8 md:w-2/3 m-auto mb-12 flex flex-col items-center'>
                    <h1 className='text-4xl font-black text-center m-12 opacity-70 text-rose-600'>Thank you for supporting us! You are truly a Change Maker &#128522;</h1>
                    <Link href="/" className="bg-black text-white p-4">
                        Return home
                    </Link>
                </div>
            </main>
        </>
    )
}
