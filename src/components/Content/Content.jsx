import "./Content.css";

import About from "./Sections/About/About";
import Education from "./Sections/Education/Education";
import Projects from "./Sections/Projects/Projects";

import SectionDivider from "./SectionDivider";

export default function Content() {
    return (
        <main className="main__content">
            <About />
                <SectionDivider />
            <Education />
                <SectionDivider />
            <Projects />
        </main>
    )
}