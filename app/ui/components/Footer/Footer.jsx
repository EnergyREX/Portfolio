import "./footer.css";
import Link from "next/link";

import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer () {

    const year = 2024

    return (
        <footer className="container__footer">
            <section>
                <ul className="footer__footerlinks">
                    <li><h3 className="footerlinks__title">Navigate</h3></li>
                    <li><Link href="/">Portfolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/work">Work</Link></li>
                </ul>
            </section>
            <section>
                <ul className="footer__socials">
                <h3>My socials</h3>
                    <li><Link href="https://www.instagram.com/energyrex">Instagram <span><FaInstagram /></span></Link></li>
                    <li><Link href="https://twitter.com/RealEnergyREX">X (Twitter) <span><FaXTwitter /></span></Link></li>
                    <li><Link href="https://github.com/energyrex">GitHub <span className="socials__icon"><FaGithub /></span></Link></li>
                </ul>
            </section>
            <div className="footer__text">
                <p className="footer__copyright">Copyright EnergyREX @ {year}</p>
                <p className="footer__phrase">Growing each day, becoming a better developer.</p>
            </div>
        </footer>
    )
}