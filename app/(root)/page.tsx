'use client'

import react, { useState, useEffect, useRef } from "react";
import Link from "next/link"
import { FaArrowRight, FaGithub, FaInstagram, FaXTwitter, FaArrowRightFromBracket } from "react-icons/fa6"
import { FaUserCheck, FaCode } from "react-icons/fa";

import gsap from "gsap";
import { useGSAP } from '@gsap/react';

import styles from "./main.module.css";
import Card from "../components/ui/Card";


export default function Portfolio() {

    const [stack, setStack] = useState('')
    const heroHeader = useRef(null)
    const heroIcon = useRef(null)

    let callCount = 0;

    useEffect(() => {
      console.log("useEffect() call", ++callCount);
      
      gsap.to(heroHeader.current, {
        opacity: 1,
        y: -20,
        ease: 'power3',
        duration: 1
      })
  
    })




    function handleContact () {
      const mailto = `mailto:energyrexycrystal@gmail.com`
    }

    return (
      <main>
        <section ref={heroHeader} className={styles.hero__main}>
          <h1 className={styles.hero__title}>Transforming ideas into <span className={styles.hero__title__highlight}>real project ideas</span></h1>
          <p className={styles.hero__subtitle}>I'm Francisco, a fullstack developer based on Spain.</p>
          <Link className={styles.hero__button} href="#projects">Show my work <span className={styles.hero__button__cosmetic}><FaArrowRight /></span></Link>
        </section>
        <h1 className={styles.about__title}><FaUserCheck className={styles.about__title__icon} /> Know about me</h1>
        <section className={styles.about__main}>
          

          <Card className={styles.cardBlock__phrase}>
            <h1>I learn and improve my skills and stack each day.</h1>
            <p>
              I like to develop solutions for problems who can have someone. 
              I enjoy challenging myself by doing projects that are challenging. 
              So, with them, I grow and develop myself as a developer. This website, is an 
              example of my growing. My before projects during the time, the majority are deleted, but 
              new projects that I'm making, are becoming better and better.
              </p>
          </Card>

          <Card className={styles.cardBlock__stack}>
            <h1 className={styles.stack__title}>My stack:</h1>
            <div className={styles.stack__badges}>
            <p className={styles.stack__badge}>HTML & CSS</p> <p className={styles.stack__badge}>JavaScript</p> 
            <p className={styles.stack__badge}>TypeScript</p> <p className={styles.stack__badge}>Express.js</p> 
            <p className={styles.stack__badge}>Next.js</p> <p className={styles.stack__badge}>Linux</p>
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
          </Card>

        </section>

        <h1 className={styles.projects__title}><FaCode className={styles.about__title__icon}/>Projects I've done so far</h1>

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