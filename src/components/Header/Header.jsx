import "./Header.css"

import Navbar from "./header-comps/Nav/Navbar"
import HeaderFunction from "./header-comps/HeaderFunction"
import HeaderLogo from "./header-comps/HeaderLogo"

import { FaGlobe } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

export default function Header(props) {
    return (
        <header className="header">
            <HeaderLogo> EnergyREX's Portfolio </HeaderLogo>
            <div className="header__functions">
                <HeaderFunction><FaGlobe /></HeaderFunction>
                <HeaderFunction><FaRegMoon /></HeaderFunction>
            </div>
            <Navbar />
        </header>
    )
}