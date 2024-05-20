import { FaHouse } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="header__navbar">
            <ul className="navbar__ul">
                <Link link="/" className="navlink__selected">Home</Link>
                <Link link="/work">Work</Link>
                <Link link="/contact">Contact</Link>
            </ul>
        </nav>
    )
}