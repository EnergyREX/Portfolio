import React from "react";
import {FaHouse, FaUserLarge, FaRegNewspaper} from "react-icons/fa6";

function Navbar () {
    return (
        <nav class="nav">
        <ul class="nav">
            <li class="nav"><a className="nav__element" href="index.html"><FaHouse /> Home</a></li>
            <li class="nav"><div class="vr"></div></li>
            <li class="nav"><a href="index.html"><FaUserLarge /> About me!</a></li>
            <li class="nav"><div class="vr"></div></li>
            <li class="nav"><a href="index.html"><FaRegNewspaper /> Projects</a></li>
        </ul>
    </nav>
    );
}

export default Navbar;