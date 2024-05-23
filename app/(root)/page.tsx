import Link from "next/link"
import { FaArrowRight, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"

import styles from "./main.module.css";
import Card from "../ui/components/Card";

export default function Portfolio() {
    return (
      <main>
        <section className={styles.hero__main}>
          <h1 className={styles.hero__title}>Transforming ideas into <span className={styles.hero__title__highlight}>real project ideas</span></h1>
          <p className={styles.hero__subtitle}>I'm Francisco, a fullstack developer based on Spain.</p>
          <Link className={styles.hero__button} href="#projects">Show my work <span className={styles.hero__button__cosmetic}><FaArrowRight /></span></Link>
        </section>

        <section className={styles.about__main}>
          
          <Card className={styles.cardBlock__phrase}>
            <h1>I learn and improve my skills and stack each day.</h1>
            <p>I like to develop </p>
          </Card>

          <Card className={styles.cardBlock__stack}>
            <h1>My stack:</h1>
            HTML & CSS, JavaScript, TypeScript, Express.js, Next.js, Linux...
          </Card>
          <Card className={styles.cardBlock__languages}>
            <h1>I Talk...</h1>
            Spanish
            English
            German (Learning)
          </Card>

          <Card className={styles.cardBlock__contact}>
            <h1>Want to get in touch?</h1>
            <Link href="contact">Let's talk!</Link>
          </Card>

          <Card className={styles.cardBlock__socials}>
              <Link className={styles.footer__socialBtn} href="https://instagram.com/energyrex"><FaInstagram /></Link>
              <Link className={styles.footer__socialBtn} href="https://x.com/RealEnergyREX"><FaXTwitter /></Link>
              <Link className={styles.footer__socialBtn} href="https://github.com/EnergyREX"><FaGithub /></Link>
          </Card>

          <Card className={styles.cardBlock__actualProject}>
            <p>My education:</p>
            <h3>Ollama-chat application.</h3>
          </Card>

        </section>

        <section>
          <h1>Some projects I've build</h1>
          <Card className={styles.cardBlock__actualProject}>
            <p>Right now working on...</p>
            <h3>Ollama-chat application.</h3>
          </Card>

        </section>
      </main>
    )
}