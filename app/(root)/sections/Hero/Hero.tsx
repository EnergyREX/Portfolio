import Link from 'next/link'
import React, { use, useEffect, useRef } from 'react'

import styles from "./Hero.module.css"
import gsap from "gsap";
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {

    const heroHeader = useRef(null)

    useEffect(() => {
      gsap.to(heroHeader.current, {
        opacity: 1,
        y: -20,
        ease: 'power3',
        duration: 1
      })
    }
  )

  return (
    <section ref={heroHeader} className={styles.hero__main}>
    <h1 className={styles.hero__title}>Transforming ideas into <span className={styles.hero__title__highlight}>real project ideas</span></h1>
    <p className={styles.hero__subtitle}>I'm Francisco, a fullstack developer based on Spain.</p>
    <Link className={styles.hero__button} href="#projects">Show my work <span className={styles.hero__button__cosmetic}><FaArrowRight /></span></Link>
  </section>
  )
}

export default Hero