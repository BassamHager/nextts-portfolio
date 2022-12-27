import Head from "next/head";
import Header from "../components/header/Header";
import { PageInfo, Skill, Social, Experience, Project } from "../types/typings";
import { GetStaticProps } from "next";
import { fetchSocials } from "../utils/fetchSocials";
import Hero from "../components/hero/Hero";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import About from "../components/about/About";
import { fetchSkills } from "../utils/fetchSkills";
import Skills from "../components/skills/Skills";
import { fetchExperiences } from "../utils/fetchExperiences";
import WorkExperience from "../components/experience/WorkExperience";
import Projects from "../components/projects/Projects";
import { fetchProjects } from "../utils/fetchProjects";
import Contact from "../components/contact/Contact";

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
        <title>{`Bassam's `}Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */} {/* @TODO: */}
      </Head>

      <main>
        <Header socials={socials} />
        <Hero pageInfo={pageInfo} />
        <About pageInfo={pageInfo} />
        <Skills skills={skills} />
        <WorkExperience experiences={experiences} />
        <Projects projects={projects} />
        <Contact />
      </main>

      <footer>{/* contact */}</footer>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials = (await fetchSocials()) ?? ([] as Social[]);
  const pageInfo = (await fetchPageInfo()) ?? ({} as PageInfo);
  const skills = (await fetchSkills()) ?? ([] as Skill[]);
  const experiences = (await fetchExperiences()) ?? ([] as Experience[]);
  const projects = (await fetchProjects()) ?? ([] as Project[]);

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
