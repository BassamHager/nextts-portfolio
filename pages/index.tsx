import Head from "next/head";
import { GetStaticProps } from "next";
// components
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import WorkExperience from "../components/experience/WorkExperience";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
// typings
import { PageInfo, Skill, Social, Experience, Project } from "../types/typings";
// mocked data
import { socials } from "../data/socials";
import { pageInfo } from "../data/pageInfo";
import { skills } from "../data/skills";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
};

export default function Home({
  socials,
  pageInfo,
  experiences,
  skills,
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
        <Skills skills={skills} />
        <WorkExperience experiences={experiences} />

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
      skills,
      experiences,
      projects,
    },
    revalidate: 10,
  };
};
