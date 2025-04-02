"use client";

import Image from "next/image";
// styles
import styles from "./hero.module.scss";
// external libs
import { Cursor, useTypewriter } from "react-simple-typewriter";
// components
import BgCircles from "@/components/ui/bgCircles";
// types
import { PageInfo } from "@/types";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, my name is Bassam 🤙",
      "Cats 😸😻😽 are my l❤️ve",
      "👨‍💻 Coding is my ❤️ 🔥 💃",
      "Perfection 💯 is my sin 😎",
      "Let's build 🏗️ great apps 💪",
      "🚀 🎆 🚀 🎆 🚀 🎆 🌍",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={styles.heroWrapper}>
      <BgCircles />

      {/* @todo: update image placeholder */}
      {pageInfo?.heroImage && (
        <Image
          src={pageInfo.heroImage}
          alt={"Bassam"}
          width={500}
          height={500}
          className={styles.heroImage}
          priority
        />
      )}

      <div className={styles.contentContainerBelowImage}>
        <h2 className={styles.role}>{pageInfo?.role}</h2>

        <h2 className={styles.heroText}>
          <span className="">{text}</span> <Cursor cursorColor="#ff0000" />
        </h2>
      </div>
    </div>
  );
};

export default Hero;
