"use client";

// styles
import styles from "./hero.module.scss";
// libs
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { heroSectionImage } from "@/libs/imageKit/constants";
// components
import BgCircles from "@/components/ui/bgCircles";
import IkImageBuilder from "../ui/IkImageBuilder";
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
        <IkImageBuilder
          path={heroSectionImage}
          width={500}
          height={500}
          alt="Bassam"
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
