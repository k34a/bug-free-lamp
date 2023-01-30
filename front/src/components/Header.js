import styles from '@/styles/Header.module.css'
import Link from 'next/link'

import { useState } from 'react'

const Header = () => {
    const [navActive, setNavActive] = useState(false);
    function toggleActiveStatus(e){
        e.preventDefault();
        setNavActive(!navActive);
    }
    return (
        <div className={styles.header}>
            <Link href="/" className={styles.logo}><b>LARRY ROWBS FOUNDATION</b></Link>
            <Link href="#" className={styles.menuBarIcon} onClick={toggleActiveStatus}>
                <i className={`menu-icon fa fa-${navActive ? "close" : "bars"}`}></i> Menu
            </Link>
            <div className={`${styles.linksContainer} ${navActive ? styles.navbarActive : ""}`}>
                <ul id="menuItems" className={navActive ? styles.navbarActive: ""}>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/blog">BLOG</Link></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                    <li><Link href="/join">JOIN</Link></li>
                    <li><Link href="/donate">DONATE</Link></li>
                </ul>
            </div>
        </div>
  )
}

export default Header
