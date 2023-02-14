import Head from "next/head";
import { GetStaticProps } from "next";
// components
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import WorkExperience from "../components/experiences";
import Projects from "../components/projects";
import Contact from "../components/contact";
// typings
import { PageInfo, Skill, Social, Experience, Project } from "../types/typings";
// mocked data
import { socials } from "../data/socials";
import { pageInfo } from "../data/pageInfo";
import { skillsData } from "../data/skills";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
  skillsData: Skill[];
  experiences: Experience[];
  projects: Project[];
};

export default function Home({
  socials,
  pageInfo,
  experiences,
  skillsData,
  projects,
}: Props) {
  return (
    <>
      <Head>
        <title>{`Bassam Hager's Portfolio`}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="rating" content="safe for kids" />
        {/* <link rel="icon" href="/favicon.ico" /> */} {/* @TODO: */}
      </Head>

      <main>
        <Header socials={socials} />
        <Hero pageInfo={pageInfo} />
        <About pageInfo={pageInfo} />
        <WorkExperience experiences={experiences} />
        <Skills skills={skillsData} />
        <Projects projects={projects} />
      </main>

      <footer>
        <Contact />
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // fetch from a CMS
  return {
    props: {
      socials,
      pageInfo,
      skillsData,
      experiences,
      projects,
    },
    revalidate: 10,
  };
};
