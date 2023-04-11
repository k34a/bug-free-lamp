import Link from "next/link"

function YourSupportIsAllWeNeed() {
  return (
    <div>
        <div className="p-7 word-break mx-auto w-11/12 md:w-3/4 lg:w-1/2 bg-purple-200 dark:bg-black my-24 rounded-xl border-2">
              <div className="prose dark:prose-invert prose-a:text-red-600 dark:prose-a:text-yellow-200">
                <h2 className="sm:text-center">Your Support Is All We Need.</h2>
                <p>
                    <Link href="/">Our foundation</Link> aims to make the fashion industry more environmentally friendly and less exploitative towards its workers. We plan to empower the people of Africa and boost its economy.
                </p>
                <p>
                But arriving at our target needs more than simple planning. It needs support from people. Larry Rowbs Foundation invites you to support us and our cause with any of the following:
                </p>
                <ol className="">
                    <li>Helping us raise funds to set up the recycling facility in Uganda. Your <Link href="/donate">donations</Link> will go a long way.</li>
                    <li><Link href="/join">Join our team</Link>. Our team needs environment activists, researchers, designers, content writers, and social media managers. You are most welcome if you want to bring any other talent that will help us.</li>
                    <li>Help us <a href="https://www.instagram.com/thelarryrowbsfoundation/" target="_blank" rel="noreferrer noopener">spread the word</a>.</li>
                    <li>Purchase recycled clothes, and recycle old clothes as much as possible!</li>
                </ol>
            </div>
            <div className='mt-6 flex items-center justify-center'>
                <Link
                    href='/donate'
                    className='font-semibold border-4 border-lime-600 dark:border-purple-600 text-black dark:text-white hover:text-white rounded-lg px-4 lg:px-5 py-3 lg:py-3.5 hover:bg-lime-800 dark:hover:bg-purple-900 !no-underline text-center'
                >
                    Consider Supporting Us
                </Link>
            </div>
        </div>
    </div>
  )
}

export default YourSupportIsAllWeNeed
