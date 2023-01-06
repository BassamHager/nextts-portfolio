import styles from "./about.module.scss";
import Image from "next/image";
// external libs & packages
import { motion } from "framer-motion";
import { PageInfo } from "../../types/typings";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  const [isSsg, setIsSsg] = useState(false);
  const [linesCounter, setLinesCounter] = useState(0);
  const showNext = () =>
    setLinesCounter(
      linesCounter !== pageInfo?.bgInformation.length - 1 ? (pre) => pre + 1 : 0
    );
  const resetLines = () => {
    const aboutImage = document.querySelector(".aboutImage");

    setLinesCounter(0);
  };

  useEffect(() => {
    setIsSsg(true);
  }, [isSsg]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.aboutWrapper}
      id="about"
    >
      <h3 className={styles.mainTitle}>About</h3>
      <>
        {pageInfo?.profilePic && (
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
            }}
          >
            <Image
              src={pageInfo.profilePic}
              alt={"Bassam"}
              width={300}
              height={300}
              className={styles.aboutImage}
              id="aboutImage"
            />
          </motion.div>
        )}
        <div className={styles.textContainer}>
          <h4 className={styles.subtitle}>
            {`Here's a `}
            <span className={styles.wordDecoration}>little background</span>
          </h4>
          <ul className={styles.textLinesContainer}>
            {pageInfo?.bgInformation?.map((line: string, ind: number) => {
              return linesCounter >= ind ? (
                <li
                  key={ind}
                  id={`line-${ind}`}
                  className={`${styles.textLine}`}
                >
                  <div className={styles.bullet}>{ind + 1}</div> {line}
                </li>
              ) : null;
            })}
          </ul>
          <h2 className={styles.linesCount}>
            {linesCounter + 1} / {pageInfo?.bgInformation?.length}
          </h2>
          <div className={styles.linesActionButton}>
            <Link href={"#aboutImage"} onClick={() => setLinesCounter(0)}>
              <button>reset</button>
            </Link>
            {linesCounter < pageInfo.bgInformation.length - 1 ? (
              <Link href={`#line-${linesCounter - 1}`}>
                <button onClick={showNext}>next</button>
              </Link>
            ) : null}
          </div>
        </div>
      </>
    </motion.div>
  );
}
