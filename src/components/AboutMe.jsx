import React from "react";
import Card from "./about-comps/Card";
import Introduction from "./about-comps/Introduction.jsx";
import Projects from "./about-comps/Projects.jsx";
import TechSkills from "./about-comps/TechSkills.jsx";
import SectDivider from "./sect-divider";

import UXUI from "./images/icons/ux-design.png";
import BackEndImage from "./images/icons/back-end.png";
import FrontEndImage from "./images/icons/front-end.png";

import bgAstrix from "./images/logos-Or-Backgrounds/astrix.png"


function AboutMe() {
    return (
    <section>
        <section className="about-me">
            <Introduction />
        </section>    
            <section className="tech-skills">
                <TechSkills 
                img={UXUI}
                title="UX & UI"
                description="I like to design layouts and make a great 
                experience for users, with satisfactory interaction."
                section1="Tools what I use:"
                tech1="Figma"
                tech2="Pen and Paper"
                tech3="Google Fonts"
                />

            <TechSkills 
                img={FrontEndImage} 
                title="FrontEnd Development"
                description="I like to design layouts and make a great 
                experience for users, with satisfactory interaction."
                section1="Lenguages what I use"
                tech1="HTML & CSS"
                tech2="JavaScript"
                tech3="React"
                section2="Dev Tools"
                tool1="Shadcdn UI"
                tool2="Bootstrap"
                />

            <TechSkills 
                img={BackEndImage}
                title="BackEnd Development"
                description="I also like to develop the logic on the server-side of the websites, 
                I've learnt Java and I'd like to learn Rust too."
                section1="Lenguages what I use"
                tech1="JavaScript w/ Node.js"
                tech2="Java"
                tech3="Bash"
                tech4="SQL"
                section2="Dev Tools"
                tool1="Git & GitHub"
                tool2="Unix-based OS"
                tool3="Oracle SQL"
                tool4="MySQL"
                />
             
            </section>   
            <SectDivider />
            <section>

            <Projects />
             <section className="container-projects">  
            <Card 
            class="card"
            title="AstriXMC - Minecraft SMP"
            desc="A Minecraft server based on the FabricMC mod loader."
            bgImg={bgAstrix}
            />
            <Card 
            class="card-noimg"
            title="Components"
            desc="Self-made by me UI components"
            bgImg="../images/stock-images/image-placeholder.png"   
            />
            </section>
        </section>
    </section>
    )
}

export default AboutMe;