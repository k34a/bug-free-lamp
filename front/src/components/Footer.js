import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-lime-700 text-white">
            <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                <div className="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/company/larryrowbsfoundation/" className="mr-6 text-slate-300" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/thelarryrowbsfoundation/" className="mr-6 text-slate-300" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/larryrowbsfoundation/" className="mr-6 text-slate-300" target="_blank" rel="noopener noreferrer">
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
                        <p>
                            Reducing waste, creating fashion
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Take Action
                        </h6>
                        <p className="mb-4">
                            <Link href="/donate" className="text-slate-300">Donate</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/join" className="text-slate-300">Join</Link>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-slate-300">Walk with Travis</a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4">
                            <Link href="/" className="text-slate-300">Home</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/blog" className="text-slate-300">Blog</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/contact" className="text-slate-300">Contact</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="/terms" className="text-slate-300">Terms & Conditions</Link>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-home" aria-hidden="true"></i>
                            2459 Sugar Bottom Rd
                            Furlong, Pennsylvania
                            United States - 18925
                        </p>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-envelope" aria-hidden="true"></i>
                            info@larryrowbs.com
                        </p>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                            <i className="w-4 mr-4 fa fa-phone" aria-hidden="true"></i>
                            + 01 605 954 8885
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-lime-700">
                <span>&copy; Copyright 2019-2023 </span>
                <Link className="text-white font-semibold" href="/">Larry Rowbs Foundation</Link>
            </div>
            <div className="text-center p-6 bg-purple-700">
                <span>Designed, developed and maintained with <i className="fa fa-heart text-red-500"></i> by </span>
                <a className="text-white font-semibold" href="https://www.linkedin.com/in/sak1sham/">Saksham Garg</a>
            </div>
        </footer>
    );
}

export default Footer;