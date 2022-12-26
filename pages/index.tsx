import Head from "next/head";
import Header from "../components/header/Header";
import { PageInfo, Social } from "../types/typings";
import { GetStaticProps } from "next";
import { fetchSocials } from "../utils/fetchSocials";
import Hero from "../components/hero/Hero";
import { fetchPageInfo } from "../utils/fetchPageInfo";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

export default function Home({ socials, pageInfo }: Props) {
  return (
    <>
      <Head>
        <title>{`Bassam's `}Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */} {/* @TODO: */}
      </Head>
      <main>
        {/* header */}
        <Header socials={socials} />

        {/* hero */}
        <Hero pageInfo={pageInfo} />
        {/* about */}
        {/* experiences */}
        {/* skills */}
        {/* projects */}
      </main>
      <footer>{/* contact */}</footer>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials = (await fetchSocials()) ?? ([] as Social[]);
  const pageInfo = (await fetchPageInfo()) ?? ({} as PageInfo);

  return {
    props: {
      socials,
      pageInfo,
    },
    revalidate: 10,
  };
};
