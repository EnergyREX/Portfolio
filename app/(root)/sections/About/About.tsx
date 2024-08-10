import React, {useRef, useEffect} from 'react'
import Card from '../../../components/ui/Card'

import styles from "./About.module.css"
import Link from 'next/link'
import { FaGithub, FaInstagram, FaUserCheck, FaXTwitter } from 'react-icons/fa6'

const About = () => {
  return (
    <div>
      <h1 className={styles.about__title}><FaUserCheck className={styles.about__title__icon} /> Know about me</h1>
      <section className={styles.about__main}>
        <Card className={styles.cardBlock__phrase}>
          <h1>I learn and improve my skills and stack each day.</h1>
          <p>
            I like to develop solutions for problems who can have someone. 
            I enjoy challenging myself by doing projects that are challenging. 
            So, with them, I grow and develop myself as a developer. This website, is an 
            example of my growing. My before projects during the time, the majority are deleted, but 
            new projects that I'm making are becoming better.
            </p>
        </Card>

        <Card className={styles.cardBlock__stack}>
          <h1 className={styles.stack__title}>My stack:</h1>
          <div className={styles.stack__badges}>
          <p className={styles.stack__badge}>HTML & CSS</p> <p className={styles.stack__badge}>JavaScript</p> 
          <p className={styles.stack__badge}>TypeScript</p> <p className={styles.stack__badge}>Express.js</p> 
          <p className={styles.stack__badge}>Next.js</p> <p className={styles.stack__badge}>Linux</p>
          <p className={styles.stack__badge}>MongoDB</p> <p className={styles.stack__badge}>SQL</p> 
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
          <Link className={styles.contact__btn} href="mailto:energyrexycrystal@gmail.com">Let's talk!</Link>
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
          <div>
            <h3>Self taught fullstack developer</h3>
            <p>2020 - actuality </p>
          </div>
        </Card>

    </section>
</div>
  )
}

export default About