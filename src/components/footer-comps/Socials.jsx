import React from "react";
import TwitterImg from "./socials/twitter.png"
import GitHubImg from "./socials/github.png"
import LinkedinImg from "./socials/linkedin.png"

const twitter = "https://twitter.com/RealEnergyREX";
const github = "https://github.com/energyrex";
const linkedin = "";

function Socials() {
    return (
        <div class="socials">
        <a href={twitter}><img src={TwitterImg} alt="Social" /></a>
        <a href={github}><img src={GitHubImg} alt="Social" /></a>
        <a href={linkedin}><img src={LinkedinImg} alt="Social" /></a>
        </div>
    )
}

export default Socials;