'use client'

import react, { useState, useEffect, useRef } from "react";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";


export default function Portfolio() {

    return (
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    )
}