import "./Header.css"

import Navbar from "../Nav/Navbar"

import { FaGlobe } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { ReactNode } from "react";

export default function Header() {
    return (
        <header className="header">
            <h2>EnergyREX's Portfolio</h2>
            <div className="header__functions">
            </div>
        </header>
    )
}