"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const renderedSkills = useMemo(() => 
    skillsData.map((skill, index) => (
      <motion.li
        key={skill}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
        className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
      >
        {skill}
      </motion.li>
    )),
    []
  );

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {renderedSkills}
      </ul>
    </section>
  );
}
