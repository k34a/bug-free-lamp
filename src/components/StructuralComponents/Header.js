import Link from "next/link";
import { useEffect, useState } from "react";

const Header = (props) => {
    const setIsOpen = props.setIsMenuOpen;
    const isOpen = props.isMenuOpen;
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null;
    }

    const normalHeader = (
        <div className="fixed top-0 left-0 flex h-screen space-x-6 bg-violet-700 z-50">
            <div
                className={`flex flex-col items-center ${isOpen ? "w-45" : "w-16"} h-full overflow-hidden text-gray-100 bg-violet-700 rounded`}
                onMouseEnter={(e) => { setIsOpen(true) }}
                onMouseLeave={(e) => { setIsOpen(false) }}
            >
                <Link className={`flex items-center mt-3 ${isOpen ? "w-full px-3" : "justify-center"}`} href="/">
                    <img
                        className="w-8 h-8 rounded"
                        alt="Logo"
                        src='/logo.png'
                    />
                    {isOpen && <span className="ml-2 text-normal font-bold">Larry Rowbs Foundation</span>}
                </Link>
                <div className={isOpen ? "w-full px-2" : ""}>
                    <div className={`flex flex-col items-center ${isOpen ? "w-full" : ""} mt-3 border-t border-gray-700`}>
                        <Link className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Home</span>}
                        </Link>
                        <Link className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/blog">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Read Articles</span>}
                        </Link>
                        <Link className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/join">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill='currentColor'>
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Join</span>}
                        </Link>
                        <Link className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/donate">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Donate</span>}
                        </Link>
                        <Link className={`flex items-center border-t border-gray-700 ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/contact">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Contact</span>}
                        </Link>
                        <Link className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/walkwithtravis">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <circle cx="13" cy="4" r="2">
                                </circle>
                                <path d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z">
                                </path>
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Walk With Travis</span>}
                        </Link>
                        <Link className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/webinar">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Register for Webinar</span>}
                        </Link>
                        <Link className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} href="/quiztime">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06 4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z">
                                </path>
                            </svg>
                            {isOpen && <span className="ml-2 text-sm font-medium">Sustainability Quiz</span>}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
    const smallScreenHeader = (
        <div className="z-50 w-screen fixed top-0 left-0 text-white">
            <div className="flex justify-around items-center bg-violet-700 shadow h-16">
                <div className="rounded p-2">
                    <Link href="/">
                        <img
                            className="w-8 h-8 rounded"
                            alt="Logo"
                            src='/logo.png'
                        />
                    </Link>
                </div>
                <div className="rounded p-2">
                    <Link href="/blog">
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    </Link>
                </div>
                <div className="rounded p-2">
                    <Link href="/join">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill='currentColor'>
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                        </svg>
                    </Link>
                </div>
                <div className="rounded p-2">
                    <Link href="/donate">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </Link>
                </div>
                <div 
                    className="rounded p-2"
                    onClick={(e) => {setIsOpen(!isOpen)}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                </div>
            </div>
            <div 
                className="w-full flex justify-end"
                onClick={(e) => { setIsOpen(false) }}
            >
                {isOpen && <div className="z-50 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 text-slate-100">
                    <ul className="py-2 text-sm">
                        <li>
                            <Link 
                                href="/contact" 
                                className="block px-4 py-2 hover:bg-gray-600"
                            >Contact
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/walkwithtravis" 
                                className="block px-4 py-2 hover:bg-gray-600"
                            >Walk With Travis
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/webinar" 
                                className="block px-4 py-2 hover:bg-gray-600"
                            >Register for Webinar
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/quiztime" 
                                className="block px-4 py-2 hover:bg-gray-600"
                            >Sustainability Quiz
                            </Link>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    )

    return (
        <>
            <div className="hidden sm:block">{normalHeader}</div>
            <div className="block sm:hidden">{smallScreenHeader}</div>
        </>
    );
}

export default Header