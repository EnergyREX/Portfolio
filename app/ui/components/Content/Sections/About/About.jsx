import Link from "next/link"

import AboutPhoto from "./AboutPhoto"
import Socialbar from "./Socialbar/Socialbar"
import AboutTitle from "./AboutTitle"

export default function About() {
    return(
        <section className="content__about">
            <section className="about__text">
            <AboutTitle>About</AboutTitle>
            <p>My name is Francisco Javier Martín Fernández</p>
            <p>
               I'm a programming student, I'm focusing on FrontEnd development but,
               I'm also very interested on other sides of programming, as like, AI or
               Backend development.
            </p>
            <p>
               I like as well, to develop UX and UI designs, so I like to create good
               products while I develop. You can see some of my designs on this website
               or on my <Link className="text__link" href="/projects"><span className="text__link">projects (comming soon).</span></Link>
            </p>
            <p>Also, If you like, you can visit my social networks.</p>

            <Socialbar />
            </section>
            <section className="about__image">
                <AboutPhoto />
            </section>
        </section>
    )
}
