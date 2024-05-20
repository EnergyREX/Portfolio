import "./Header.css"

import Navbar from "../Nav/Navbar"
import HeaderFunction from "./header-comps/HeaderFunction"
import HeaderLogo from "./header-comps/HeaderLogo"

import { FaGlobe } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { ReactNode } from "react";

export default function Header() {
    return (
        <header className="header">
            <HeaderLogo> EnergyREX's Portfolio </HeaderLogo>
            <div className="header__functions">
                <HeaderFunction><FaGlobe /></HeaderFunction>
                <HeaderFunction><FaRegMoon /></HeaderFunction>
            </div>
        </header>
    )
}