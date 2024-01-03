import ProjectCrd from "./ProjectCrd"

import PlaceholderImg from "../../assets/placeholder.png"
import ProjectTitle from "./ProjectTitle"

export default function Projects() {
    return (
        <section className="content__projects">
            <ProjectTitle />
            <div className="projects__cardscontainer">
            <ProjectCrd projectName="AstriXMC - MC SMP" img={PlaceholderImg}>
                AstriXMC is a Minecraft server created by me, whos principal aim is to give to
                users a really "free" experience, making them, in the process, to enjoy of a new
                experience by using (future) mods.
            </ProjectCrd>
            </div>
        </section>
    )
}