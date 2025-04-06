"use client";

import { useMemo } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const timelineElements = useMemo(() => 
    experiencesData.map((item, index) => (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element"
        contentStyle={{
          background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: theme === "light" 
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
          fontSize: "1.5rem",
        }}
        visible={true}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0 font-normal text-gray-700 dark:text-white/75">
          {item.location}
        </p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    )),
    [theme]
  );

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[75rem]">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline animate={true} lineColor={theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.05)"}>
        {timelineElements}
      </VerticalTimeline>
    </section>
  );
}
