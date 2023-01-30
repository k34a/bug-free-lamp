//import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <Link href="/"><b>LARRY ROWBS FOUNDATION</b></Link>
            <div>Reducing waste, creating fashion</div>
            <div>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/join">Join</Link></li>
                    <li><Link href="/donate">Donate</Link></li>
                    <li><Link href="/donate">Terms and Conditions</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link href="/about"><i className="fa fa-instagram"></i></Link></li>
                    <li><Link href="/blog"><i className="fa fa-linkedin"></i></Link></li>
                </ul>
            </div>
            <div>
                <div>
                    <small>
                        Copyright &copy; <Link href="/">Larry Rowbs Foundation</Link> 2019-2023
                        <br />
                        <small>Website Designed and Developed by <a href="https://www.linkedin.com/in/sak1sham/" rel="noopener noreferrer" target="_blank">Saksham Garg</a></small>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Header
