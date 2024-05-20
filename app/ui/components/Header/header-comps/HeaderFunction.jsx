export default function HeaderFunction(props) {
    return (
        <button className="header__function" onClick={props.function}>{props.children}</button>
    )
}