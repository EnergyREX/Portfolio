import { HiOutlineTranslate } from "react-icons/hi";

export default function LanguageCrd(props) {
    return (
        <div className="content__langcrd">
            <HiOutlineTranslate className="langcrd__ico"/>
            <p>{props.lang}</p>
            <p>{props.level}</p>
        </div>
    )
}