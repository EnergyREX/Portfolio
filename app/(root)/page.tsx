'use client'

import react, { useState, useEffect, useRef } from "react";
import Link from "next/link"
import { FaArrowRight, FaGithub, FaInstagram, FaXTwitter, FaArrowRightFromBracket } from "react-icons/fa6"
import { FaUserCheck, FaCode } from "react-icons/fa";

import gsap from "gsap";

import Hero from "../components/Hero/Hero";

import styles from "./main.module.css";
import Card from "../components/ui/Card";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";


export default function Portfolio() {

    function handleContact () {
      const mailto = `mailto:energyrexycrystal@gmail.com`
    }

    return (
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    )
}