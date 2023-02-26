import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-yellow-200 text-black">
            <div className="flex justify-center items-center lg:justify-between p-6 border-b border-slate-700">
                <div className="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/company/larryrowbsfoundation/" className="mr-6 text-slate-600" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/thelarryrowbsfoundation/" className="mr-6 text-slate-600" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/larryrowbsfoundation/" className="mr-6 text-slate-600" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                            <i className="fa fa-recycle" aria-hidden="true">&nbsp;</i>
                            Larry Rowbs Foundation
                        </h6>
                        <p className="text-slate-600">
                            Reducing waste, creating fashion
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Take Action
                        </h6>
                        <p className="mb-4">
                            <Link href="/donate" className="text-slate-600">Donate</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/join" className="text-slate-600">Join</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/walkwithtravis" className="text-slate-600">Walk with Travis</Link>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4">
                            <Link href="/" className="text-slate-600">Home</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/blog" className="text-slate-600">Blog</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/contact" className="text-slate-600">Contact</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/terms" className="text-slate-600">Terms & Conditions</Link>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-home" aria-hidden="true"></i>
                            2459 Sugar Bottom Rd
                            Furlong, Pennsylvania
                            United States - 18925
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-envelope" aria-hidden="true"></i>
                            info@larryrowbs.com
                        </p>
                        <p className="flex items-center text-slate-600 justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-phone" aria-hidden="true"></i>
                            + 01 605 954 8885
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-yellow-200">
                <span>&copy; Copyright 2019-2023 </span>
                <Link className="text-slate-600 font-semibold" href="/">Larry Rowbs Foundation</Link>
            </div>
            <div className="text-center p-3 bg-purple-500 text-white">
                <a className="text-white font-semibold" href="https://www.linkedin.com/in/sak1sham/">
                    <span>Made with <i className="fa fa-heart text-red-500"></i> in India</span>
                    </a>
            </div>
        </footer>
    );
}

export default Footer;