export default function Social(props) {
    return (
        <a className="socialbar__social" href={props.link}>{props.children}</a>
    )
}