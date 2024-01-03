export default function Copyright (props) {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <p className="footer__copyright">Copyright EnergyREX @ {year}</p>
    )
}