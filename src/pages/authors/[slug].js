import Head from 'next/head'

import { getDetailsForAuthor, getAllAuthors } from '../../lib/notion/author';
import { BsLinkedin } from 'react-icons/bs';


export async function getStaticPaths(context) {
    const authorIds = await getAllAuthors();
    const paths = authorIds.map(({ authorId }) => ({ params: { slug: toString(authorId) } }));
    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    try {
        const authorDetails = await getDetailsForAuthor(params.slug)
        if (!authorDetails || Object.keys(authorDetails).length == 0) {
            return {
                notFound: true,
            }
        }
        return {
            props: {
                authorDetails,
                slug: params.slug
            },
            revalidate: 120
        };
    }
    catch (err) {
        console.log(err);
        return {
            notFound: true,
        }
    }
}

const getInitialsFromName = (name) => {
    const words = name.trim().split(/\s+/);
    const firstInitial = words.length > 0 ? words[0].charAt(0).toUpperCase() : '';
    const lastInitial = words.length > 1 ? words[words.length - 1].charAt(0).toUpperCase() : '';
    const initials = firstInitial + lastInitial;
    return initials;
}

export default function BlogPost({ authorDetails, slug }) {
    const aboutAuthor = authorDetails.about.split('\n');
    const About = aboutAuthor.map((line, index) => {
        return <div key={index}>{line}&nbsp;</div>
    })
    const titleValue = `${authorDetails.author} - Larry Rowbs Foundation`;
    const descriptionValue = `This is a profile page for ${authorDetails.author}, who is a volunteer and a content writer at the Larry Rowbs Foundation.`;
    return (
        <div className="bg-white dark:bg-slate-800 dark:text-white selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white">
            <Head>
                <title>{titleValue}</title>
                <meta name="description" content={descriptionValue} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className='p-12 sm:p-16'
            >
                <div className='md:w-2/3 mx-auto grid grid-cols-1 gap-6'>
                    <div className='flex align-center justify-center select-none'>
                        {
                            authorDetails.authorPic?
                            <div className='h-36 w-36 sm:h-56 sm:w-56 m-0 relative inline-flex mr-3 items-center justify-center rounded-full overflow-hidden ring-4 sm:ring-8 ring-purple-300 dark:ring-purple-500'>
                                <img
                                    src={authorDetails.authorPic} 
                                    alt={authorDetails.author} 
                                    className='inline h-full w-auto'
                                    loading="lazy"
                                />
                            </div>
                            :
                                <div className="m-0 relative inline-flex mr-3 items-center justify-center h-36 w-36 sm:h-56 sm:w-56 overflow-hidden bg-purple-200 rounded-full dark:bg-purple-600 ring-4 sm:ring-8 ring-purple-300 dark:ring-purple-500">
                                <span className="font-semibold text-purple-600 dark:text-purple-200 text-3xl sm:text-5xl">{getInitialsFromName(authorDetails.author)}</span>
                            </div>
                        }
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <h1 className="text-4xl font-bold">{authorDetails.author}</h1>
                        <h3 className="text-2xl">Volunteer (Research, Content Writing)</h3>
                    </div>
                    {authorDetails.authorLinkedIn.length > 0 && (
                        <div>
                            <a 
                                href={authorDetails.authorLinkedIn}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <BsLinkedin 
                                    size={24} 
                                    className="inline text-blue-600"/>
                            </a>
                        </div>
                    )}
                    <div>
                        <div className="text-xl">{About}</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
