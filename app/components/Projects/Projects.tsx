import Link from 'next/link'
import React from 'react'

import styles from "./Projects.module.css"
import { FaArrowRightFromBracket, FaCode } from 'react-icons/fa6'
import Card from '../ui/Card'

const Projects = () => {
  return (
    <div>
    <h1 className={styles.projects__title}><FaCode className={styles.card__title__icon}/>Projects I've done so far</h1>

        <section className={styles.projects__main}>
        <Card className={styles.projects__card}>
        <h2 className={styles.card__title}>[Working on] Ollama-chat</h2>
        <h4 className={styles.card__subtitle}>Chat application</h4>

        <p>This project aims to create an application simillar to ChatGPT, but instead of using GPT-4 or GPT-3.5, using Ollama.</p>
    
        <Link className={styles.pcard__button} href="https://github.com/EnergyREX/ollama-chat">See more <span className={styles.pcard__button__icon}> <FaArrowRightFromBracket /> </span></Link>
    </Card>
</section>

    </div>
  )
}

export default Projects