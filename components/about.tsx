"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in Computer Science in 2018, I started my
        career first as an intern then as a full time software engineer.While
        working over the years I got opportunity to work in multiple domains
        such as telecom , aviation , e-commerce. I have also worked on multiple
        POCs for my business clients using mulltiple tech stack.I also mentor
        junior developers and get them upto speed and guide them with best
        practices of development . My core stack is Angular , React, Next.js,
        Node.js, and MongoDB. I am also familiar with TypeScript and Express JS.
        I am always looking to learn new technologies. I am currently looking
        for a full-time position as a senior software developer.
      </p>

      <p>
        When I'm not coding, I enjoy playing badminton , pickle ball , cricket,
        watching movies and netflix. I also enjoy learning new things. I am
        currently learning about stock market and business strategies.
      </p>
    </motion.section>
  );
}
