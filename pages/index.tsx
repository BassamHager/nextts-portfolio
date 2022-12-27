import Head from "next/head";
import Header from "../components/header/Header";
import { PageInfo, Skill, Social, Experience } from "../types/typings";
import { GetStaticProps } from "next";
import { fetchSocials } from "../utils/fetchSocials";
import Hero from "../components/hero/Hero";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import About from "../components/about/About";
import { fetchSkills } from "../utils/fetchSkills";
import Skills from "../components/skills/Skills";
import { fetchExperiences } from "../utils/fetchExperiences";
import WorkExperience from "../components/experience/WorkExperience";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
  skills: Skill[];
  experiences: Experience[];
};

export default function Home({
  socials,
  pageInfo,
  experiences,
  skills,
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
        {/* projects */}
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

  return {
    props: {
      socials,
      pageInfo,
      skills,
      experiences,
    },
    revalidate: 10,
  };
};
