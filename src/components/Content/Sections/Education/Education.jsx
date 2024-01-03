import EducationCrd from "./EducationCrd";
import EducationTitle from "./EducationTitle";
import LanguageCrd from "./LanguageCrd";

export default function Education() {
    return (
        <section className="content__education">
            <EducationTitle />
            <div className="content__educationcrds">
            <EducationCrd title="Web Developer" dates="2022 - 2024"
                place="Self taught, I.E.S - La Puebla" />
            </div>

            <div className="content__languages">
                <LanguageCrd lang="Spanish" level="Native" />
                <LanguageCrd lang="English" level="B2" />
            </div>
        </section>
    )
}