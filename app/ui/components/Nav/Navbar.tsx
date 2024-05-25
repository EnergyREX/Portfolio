'use client'

import Link from "next/link";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar__main}>
            <ul className={styles.navbar__body}>
                <Link href="/" className={styles.navbarLink__main}>Home</Link>
                <Link href="#work" className={styles.navbarLink__main}>Work</Link>
                <a href="mailto:energyrexycrystal@gmail.com" className={styles.navbarLink__main}>Contact</a>
            </ul>
        </nav>
    )
}