import { HiAcademicCap } from "react-icons/hi";

export default function EducationCrd(props) {
    return (
        <div className="content__educard">
            <HiAcademicCap className="educard__ico" />
            <p className="educard__title">{props.title}</p>
            <p className="educard__place">{props.place}</p>
            <p className="educard__dates">{props.dates}</p>
        </div>
    )
}