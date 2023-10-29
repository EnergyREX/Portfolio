import React from "react";
import Copyright from "./footer-comps/Copyright.jsx";
import Socials from "./footer-comps/Socials.jsx";
import Phrase from "./footer-comps/Phrase.jsx";

function Footer() {
    return (
        <footer className="footer">
            <Phrase />
            <Socials />
            <Copyright />
        </footer>
    )
}

export default Footer;