import React from "react";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";

const twitter = "https://twitter.com/RealEnergyREX";
const github = "https://github.com/energyrex";
const linkedin = "";

function Socials() {
    return (
        <div class="socialsnetworks">
        <a className="socialsnetworks__icon" href={twitter}><FaXTwitter /></a>
        <a className="socialsnetworks__icon" href={github}><FaGithub /></a>
        <a className="socialsnetworks__icon" href={linkedin}><FaLinkedinIn /></a>
        </div>
    )
}

export default Socials;