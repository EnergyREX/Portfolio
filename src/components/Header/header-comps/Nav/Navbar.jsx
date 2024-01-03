import NavLink from "./NavLink"

import { FaHouse } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="header__navbar">
            <ul className="navbar__ul">
                <NavLink link="/" className="navlink__selected"><FaHouse /> Home</NavLink>
                <NavLink link="/work"><FaToolbox /> Work</NavLink>
                <NavLink link="/contact"><FaEnvelope /> Contact</NavLink>
            </ul>
        </nav>
    )
}