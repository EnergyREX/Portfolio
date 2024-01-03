import Copyright from "./Copyright"
import SocialNetworks from "./SocialNetworks/SocialNetworks"
import FooterLinks from "./FooterLinks/FooterLinks"
import FooterPhrase from "./FooterPhrase"

import "./footer.css";

export default function Footer () {
    return (
        <footer className="container__footer">
            <FooterLinks />
            <SocialNetworks />
            <div className="footer__text">
                <Copyright />
                <FooterPhrase />
            </div>
        </footer>
    )
}