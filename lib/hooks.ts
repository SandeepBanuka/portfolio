import { useActiveSectionContext } from "@/context/active-section-context";
import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold,
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
};
