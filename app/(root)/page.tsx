import Link from "next/link"
import Content from "../ui/components/Content/Content"
import Hero from "../ui/components/Content/Sections/Hero/Hero"
import { FaArrowRight } from "react-icons/fa6"

import styles from "./main.module.css";

export default function Portfolio() {
    return (
      <>
        <section className={styles.hero__main}>
          <h1 className={styles.hero__title}>Transforming ideas into <span className={styles.hero__title__highlight}>real project ideas</span></h1>
          <p className={styles.hero__subtitle}>I'm Francisco, a fullstack developer based on Spain.</p>
          <Link className={styles.hero__button} href="#projects">Show my work <span className={styles.hero__button__cosmetic}><FaArrowRight /></span></Link>
        </section>
        <section className={styles.about__main}>

        </section>
      </>
    )
}