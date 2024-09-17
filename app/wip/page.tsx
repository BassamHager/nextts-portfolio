"use client";

// data
import { socials } from "@/data/socials";
// components
import {
  Header,
  WayOfWork,
  RecentProjects,
  Footer,
  Contact,
  Challenges,
} from "@/components";
// context
import { AppContextProvider } from "@/context";

export default function Page() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto px-3 sm:px-10  overflow-clip">
      <AppContextProvider>
        <div className="max-w-7xl w-full">
          <Header socials={socials} />
          <RecentProjects />
          <WayOfWork />
          <Challenges />
          <Contact />
          <Footer />
        </div>
      </AppContextProvider>
    </main>
  );
}
