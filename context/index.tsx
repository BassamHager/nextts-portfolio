import { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<any>({});

type ExperienceDetails =
  | "responsibilities"
  | "platforms"
  | "technologies"
  | undefined;

export function AppContextProvider({ children }: { children: ReactNode }) {
  // state
  const [experienceDetails, setExperienceDetails] =
    useState<ExperienceDetails>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExperienceCard, setIsExperienceCard] = useState(false);

  // value
  const value = {
    experienceDetails,
    setExperienceDetails,
    currentIndex,
    setCurrentIndex,
    isExperienceCard,
    setIsExperienceCard,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
