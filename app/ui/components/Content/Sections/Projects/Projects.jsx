import ProjectCrd from "./ProjectCrd"

import PlaceholderImg from "../../assets/placeholder.png"
import ProjectTitle from "./ProjectTitle"
import Image from "next/image"
import astriximg from "@/app/ui/components/Content/assets/placeholder.png"

export default function Projects() {
    return (
        <section className="content__projects">
            <ProjectTitle />
            <div className="projects__cardscontainer">
            <ProjectCrd projectName="AstriXMC - MC SMP" img={astriximg}>
                
                AstriXMC is a Minecraft server created by me, whos principal aim is to give to
                users a really "free" experience, making them, in the process, to enjoy of a new
                experience by using FabricMC mods.
            </ProjectCrd>
            </div>
        </section>
    )
}