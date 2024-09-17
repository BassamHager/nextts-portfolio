"use client";

// data
import { socials } from "@/data/socials";
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
  Footer,
  Header,
  Contact,
  WipButtons,
} from "@/components";
// context
import { AppContextProvider } from "@/context";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center mx-auto px-3 sm:px-10  overflow-clip">
      <AppContextProvider>
        <div className="max-w-7xl w-full">
          <Header socials={socials} />
          <Hero pageInfo={pageInfo} />
          <AboutMe pageInfo={pageInfo} />
          <WorkExperience experiences={experiences} />
          <Projects projects={projects} />
          <Approach />
          <Clients />
          <WipButtons />
          <Contact />
          <Footer />
        </div>
      </AppContextProvider>
    </main>
  );
}
