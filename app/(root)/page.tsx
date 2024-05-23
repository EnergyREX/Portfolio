import Link from "next/link"
import { FaArrowRight, FaGithub, FaInstagram, FaXTwitter, FaArrowRightFromBracket } from "react-icons/fa6"

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
            <p>I like to develop solutions for problems who can have someone, </p>
          </Card>

          <Card className={styles.cardBlock__stack}>
            <h1 className={styles.stack__title}>My stack:</h1>
            <div className={styles.stack__badges}>
            <p className={styles.stack__badge}>HTML & CSS</p> <p className={styles.stack__badge}>JavaScript</p> 
            <p className={styles.stack__badge}>TypeScript</p> <p className={styles.stack__badge}>Express.js</p> 
            <p className={styles.stack__badge}>Next.js</p> <p className={styles.stack__badge}>Linux...</p>
            </div>
          </Card>
          <Card className={styles.cardBlock__languages}>
            <h1 className={styles.languages__title}>I Talk...</h1>
            <p className={styles.languages__lang}>🇪🇸 Spanish</p>
            <p className={styles.languages__lang}>🇬🇧 English</p>
            <p className={styles.languages__lang}>🇩🇪 German (Learning)</p>
          </Card>

          <Card className={styles.cardBlock__contact}>
            <h1 className={styles.contact__title}>Do you want to contact me?</h1>
            <Link className={styles.contact__btn} href="#contact">Let's talk!</Link>
          </Card>

          <Card className={styles.cardBlock__socials}>
              <Link className={styles.footer__socialBtn} href="https://instagram.com/energyrex"><FaInstagram /></Link>
              <Link className={styles.footer__socialBtn} href="https://x.com/RealEnergyREX"><FaXTwitter /></Link>
              <Link className={styles.footer__socialBtn} href="https://github.com/EnergyREX"><FaGithub /></Link>
          </Card>

          <Card className={styles.cardBlock__actualProject}>
            <h2>My education</h2>
            <div>
            <h3>Social Sciences and Humanities Bachillerato.</h3>
            <p>2020 - 2022</p>
            </div>
          </Card>

        </section>

        <h1 className={styles.projects__title}>Projects I've done so far</h1>

        <section className={styles.projects__main}>
          

          <Card className={styles.projects__card}>
            <h2 className={styles.card__title}>[Working on] Ollama-chat</h2>
            <h4 className={styles.card__subtitle}>Chat application</h4>

            <p>This project aims to create an application simillar to ChatGPT, but instead of using GPT-4 or GPT-3.5, using Ollama.</p>
            
            <Link className={styles.pcard__button} href="https://github.com/EnergyREX/ollama-chat">See more <span className={styles.pcard__button__icon}> <FaArrowRightFromBracket /> </span></Link>
          </Card>
        </section>
      </main>
    )
}