export default function SocialNet (props) {
    return (
        <li className="socials__socialnet"><a className="socials__socialnet" href={props.href}>{props.children}</a></li>
    )
}