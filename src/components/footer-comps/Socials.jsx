import React from "react";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";

const twitter = "https://twitter.com/RealEnergyREX";
const github = "https://github.com/energyrex";
const linkedin = "";

function Socials() {
    return (
        <div className="footer__socialsnetworks">
        <a className="socialsnetworks__icon" href={twitter}><FaXTwitter className="socialsnetworks__icon"/></a>
        <a className="socialsnetworks__icon" href={github}><FaGithub className="socialsnetworks__icon"/></a>
        <a className="socialsnetworks__icon" href={linkedin}><FaLinkedinIn className="socialsnetworks__icon"/></a>
        </div>
    )
}

export default Socials;