import Link from "next/link";
import styles from "./footer.module.css"

import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer () {

    const year = 2024

    return (
        <footer className={styles.footer__main}>
            <div className="footer__text">
                <p className={styles.footer__copyright}>Copyright EnergyREX © {year}</p>
            </div>
            <div>
                <Link className={styles.footer__socialBtn} href="https://instagram.com/energyrex"><FaInstagram /></Link>
                <Link className={styles.footer__socialBtn} href="https://x.com/RealEnergyREX"><FaXTwitter /></Link>
                <Link className={styles.footer__socialBtn} href="https://github.com/EnergyREX"><FaGithub /></Link>
            </div>
        </footer>
    )
}