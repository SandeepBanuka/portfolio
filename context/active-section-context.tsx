"use client";

import type { SectionName } from "@/lib/types";
import { createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: (section: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
};

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
