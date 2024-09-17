import { createContext, ReactNode, useState } from "react";

export const AppContext = createContext<any>({});

// extract
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

  // value
  const value = {
    experienceDetails,
    setExperienceDetails,
    currentIndex,
    setCurrentIndex,
  };

  // render
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
