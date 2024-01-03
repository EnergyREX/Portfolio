import { Link } from "react-router-dom"

export default function FooterLink (props) {
    return (
        <li className="footerlinks__link"><Link className="footerlinks__link" to={props.link}>{props.children}</Link></li>
    )
}