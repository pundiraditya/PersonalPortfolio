"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="bg-black text-white overflow-x-hidden"
    >
      <Navbar />

      <Hero />

      <SectionWrapper delay={0.1}>
        <About />
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <Skills />
      </SectionWrapper>

      <SectionWrapper delay={0.3}>
        <Experience />
      </SectionWrapper>

      <SectionWrapper delay={0.4}>
        <Projects />
      </SectionWrapper>

      <SectionWrapper delay={0.5}>
        <Certificates />
      </SectionWrapper>

      <SectionWrapper delay={0.6}>
        <Contact />
      </SectionWrapper>

      <Footer />
    </motion.main>
  );
}