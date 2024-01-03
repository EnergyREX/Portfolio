import FooterLink from "./FooterLink"

export default function FooterLinks() {
    return (
            <ul className="footer__footerlinks">
                <li><h3 className="footerlinks__title">Navigate</h3></li>
                <FooterLink link="/">Portfolio</FooterLink>
                <FooterLink link="/contact">Contact</FooterLink>
                <FooterLink link="/work">Work</FooterLink>
            </ul>
    )
}