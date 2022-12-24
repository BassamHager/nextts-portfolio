import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Bassam's `}Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */} {/* @TODO: */}
      </Head>
      <main>
        {/* header */}
        <Header />

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
