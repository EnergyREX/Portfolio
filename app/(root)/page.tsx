import Link from "next/link"
import Content from "../ui/components/Content/Content"
import Hero from "../ui/components/Content/Sections/Hero/Hero"
import { FaArrowRight } from "react-icons/fa6"

import styles from "./main.module.css";
import Card from "../ui/components/Card";

export default function Portfolio() {
    return (
      <>
        <section className={styles.hero__main}>
          <h1 className={styles.hero__title}>Transforming ideas into <span className={styles.hero__title__highlight}>real project ideas</span></h1>
          <p className={styles.hero__subtitle}>I'm Francisco, a fullstack developer based on Spain.</p>
          <Link className={styles.hero__button} href="#projects">Show my work <span className={styles.hero__button__cosmetic}><FaArrowRight /></span></Link>
        </section>

        <section className={styles.about__main}>
          
          <Card>
            <h1>I learn and improve my skills and stack each day.</h1>
          </Card>

          <Card>
            <h1>My stack right now is:</h1>
            <p>Java, JavaScript & TypeScript</p>
            <p>Express.js, SQL, MongoDB</p>
            <p>Linux...</p>
          </Card>
          <Card>
            <h1>I Talk...</h1>
            <h2>Spanish</h2>
            <h2>English</h2>
            <h2>(Learning) German</h2>
          </Card>

          <Card>
            <p>Right now working on...</p>
            <h3>Ollama-chat application.</h3>
          </Card>

          <Card>
            <h1>Want to get in touch?</h1>
            <Link href="contact">Let's talk!</Link>
          </Card>
        </section>
      </>
    )
}