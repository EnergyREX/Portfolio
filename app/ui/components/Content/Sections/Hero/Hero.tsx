import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
        <h1>Fullstack developer</h1>
        <p>Hi! I'm Francisco, a fullstack developer based on Spain.</p>
        <Link href="projects">Show my work <FaArrowRight /></Link>
    </div>
  )
}

export default Hero