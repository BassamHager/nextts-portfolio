import Head from "next/head";
import Header from "../components/header/Header";
import { Social } from "../types/typings";
import { GetStaticProps } from "next";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  socials: Social[];
};

export default function Home({ socials }: Props) {
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

  return {
    props: {
      socials,
    },
    revalidate: 10,
  };
};
