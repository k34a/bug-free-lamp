import Link from "next/link";
import { useEffect, useState } from "react";
import { IoReader, IoCall } from 'react-icons/io5';
import { FaHome, FaWalking } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdQuiz } from 'react-icons/md';
import { BsLaptopFill } from 'react-icons/bs';

const MenuItems = {
    main: [
        ["Home", <FaHome key="home" size={24} />, '/home'],
        ["Read Articles", <IoReader key="blog" size={24} />, '/blog'],
        ["Join", <RiTeamFill key="blog" size={24} />, '/join'],
        ["Donate", <AiFillHeart key="blog" size={24} />, '/donate'],
    ],
    extra: [
        ["Contact", <IoCall key="blog" size={24} />, '/contact'],
        ["Walk With Travis", <FaWalking key="blog" size={24} />, '/walkwithtravis'],
        ["Register For Webinar", <BsLaptopFill key="blog" size={24} />, '/webinar'],
        ["Sustainability Quiz", <MdQuiz key="blog" size={24} />, '/quiztime'],
    ]
}

const SmallMenuItems = {
    main: [
        ["Home", <FaHome key="home" size={24} />, '/home'],
        ["Read Articles", <IoReader key="blog" size={24} />, '/blog'],
        ["Donate", <AiFillHeart key="blog" size={24} />, '/donate'],
    ],
    extra: [
        ["Join", <RiTeamFill key="blog" size={24} />, '/join'],
        ["Contact", <IoCall key="blog" size={24} />, '/contact'],
        ["Walk With Travis", <FaWalking key="blog" size={24} />, '/walkwithtravis'],
        ["Register For Webinar", <BsLaptopFill key="blog" size={24} />, '/webinar'],
        ["Sustainability Quiz", <MdQuiz key="blog" size={24} />, '/quiztime'],
    ]
}

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
        <div className="fixed top-0 left-0 flex h-screen space-x-6 bg-violet-700 z-50 shadow-2xl">
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
                    <div className={`flex flex-col items-center ${isOpen ? "w-full" : ""} mt-3 border-t border-gray-400`}>
                        {MenuItems.main.map((ele, index)=> {
                            return (
                                <Link 
                                    key={index} 
                                    className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`} 
                                    href={ele[2]}
                                >
                                    {ele[1]}
                                    {isOpen && <span className="ml-2 text-sm font-medium">{ele[0]}</span>}
                                </Link>
                            );
                        })}
                    </div>
                    <div className={`flex flex-col items-center ${isOpen ? "w-full" : ""} mt-3 border-t border-gray-400`}>
                        {MenuItems.extra.map((ele, index) => {
                            return (
                                <Link
                                    key={index}
                                    className={`flex items-center ${isOpen ? "w-full" : "w-12 justify-center"} h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
                                    href={ele[2]}
                                >
                                    {ele[1]}
                                    {isOpen && <span className="ml-2 text-sm font-medium">{ele[0]}</span>}
                                </Link>
                            );
                        })}
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
                {SmallMenuItems.main.map((ele, index) => {
                    return (
                        <div
                            className="rounded p-2"
                            key={index}
                        >
                            <Link href={ele[2]}>
                                {ele[1]}
                            </Link>
                        </div>
                    );
                })}
                <div 
                    className="rounded p-2"
                    onClick={(e) => {setIsOpen(!isOpen)}}
                >
                    <BiDotsVerticalRounded size={24}/>
                </div>
            </div>
            <div 
                className="w-full flex justify-end"
                onClick={(e) => { setIsOpen(false) }}
            >
                {isOpen && <div className="z-50 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 text-slate-100">
                    <ul className="py-2 text-sm">
                        {SmallMenuItems.extra.map((ele, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <Link href={ele[2]} className="block px-4 py-2 hover:bg-gray-600">
                                        {ele[0]}
                                    </Link>
                                </li>
                            );
                        })}
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