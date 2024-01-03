import SocialNet from "./SocialNet"

import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function SocialNetworks () {
    return (
        <div>
            <ul className="footer__socials">
                <h3>My socials</h3>
                <SocialNet href="https://www.instagram.com/energyrex">
                    Instagram <span><FaInstagram /></span></SocialNet>
                <SocialNet href="https://twitter.com/RealEnergyREX">X (Twitter) <span><FaXTwitter /></span></SocialNet>
                <SocialNet href="https://github.com/energyrex">GitHub <span className="socials__icon"><FaGithub /></span></SocialNet>
            </ul>
        </div>
    )
}