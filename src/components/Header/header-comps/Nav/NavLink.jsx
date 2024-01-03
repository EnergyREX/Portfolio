import { Link } from "react-router-dom"

export default function NavLink(props) {
    return (
        <li className="navbar__navlink">
            <Link className="navbar__navlink navlink__selected" to={props.link}>{props.children}</Link>
            
        </li>
    )
}