// data
import { pageInfo } from "@/data/pageInfo";
import { experiences } from "@/data/workExperience";
import { projects } from "@/data/projects";
// components
import {
  AboutMe,
  Projects,
  Hero,
  Clients,
  WorkExperience,
  Approach,
  Contact,
  // WipButtons,
} from "@/components";
// context
import { AppContextProvider } from "@/context";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col justify-center items-center px-2 md:px3 sm:px-5 overflow-clip">
      <ErrorBoundary>
        <AppContextProvider>
          <div className="max-w-7xl w-full">
            <Hero pageInfo={pageInfo} />
            <AboutMe pageInfo={pageInfo} />
            <WorkExperience experiences={experiences} />
            <Projects projects={projects} />
            <Approach />
            <Clients />
            {/* <WipButtons /> */}
            <Contact />
          </div>
        </AppContextProvider>
      </ErrorBoundary>
    </main>
  );
}
