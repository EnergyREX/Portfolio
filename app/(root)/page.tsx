'use client'

import react, { useState, useEffect, useRef } from "react";

import Hero from "../components/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";


export default function Portfolio() {

    return (
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    )
}