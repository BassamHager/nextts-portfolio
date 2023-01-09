import Image from "next/image";
import styles from "./hero.module.scss";
import Link from "next/link";
// external libs & packages
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../../types/typings";
import BgCircles from "./BgCircles";
import { imageLoader } from "../../utils/urlBuilder";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, my name is Bassam🤙",
      "cats 😸😻😽 are my l❤ve",
      "⌨coding is my lust💓",
      "perfection💯 is my sin😎",
      "Let's build🏗 great apps💪",
      // "*  *  *  *  *  *  *  *",
      " 🎆  🎆  🎆  🎆  🎆",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={styles.heroWrapper} id="hero">
      <BgCircles />
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
        <h1 className={styles.heroText}>
          <span className="mr-3">{text}</span> <Cursor cursorColor="red" />
        </h1>
        <div className={styles.linksContainer}>
          <Link href={"#about"}>
            <button className={styles.neonButton}>About</button>
          </Link>
          <Link href={"#experience"}>
            <button className={styles.neonButton}>Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className={styles.neonButton}>Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className={styles.neonButton}>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
