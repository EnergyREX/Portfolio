import React from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa6"; 

function handleTheme() {
    let isDark = true;
    if(isDark) {
        return (<FaRegMoon />)
    } else if (!isDark) {
        return (<FaRegSun />)
    }
}

export default function ThemeToggler() {
    handleTheme();
}