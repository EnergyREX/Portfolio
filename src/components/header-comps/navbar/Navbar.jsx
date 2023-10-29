import React from "react";
import NavElement from "./NavElement";
import NavVerticalRule from "./NavVerticalRule";
import ThemeToggler from "./ThemeToggler";

function Navbar () {
    return (
        <nav className="navbar">
            <ThemeToggler />
            <NavVerticalRule />
            <NavElement icon="home" link="index.html" name="Home"/>
            <NavElement icon="user" link="index.html" name="About Me"/>
            <NavElement icon="projects" link="index.html" name="Projects"/>
        </nav>

    );
}

export default Navbar;