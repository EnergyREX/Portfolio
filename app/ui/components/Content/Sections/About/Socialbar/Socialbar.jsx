import Social from "./Social"

import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Socialbar(props) {
    return (
        <ul className="about__socialbar">
            <Social link="https://www.instagram.com/energyrex"><FaInstagram /></Social>
            <Social link="https://github.com/energyrex"><FaGithub /></Social>
            <Social link="https://x.com/RealEnergyREX"><FaXTwitter /></Social>
        </ul>
    )
}