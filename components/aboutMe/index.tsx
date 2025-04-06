"use client";

import { useState } from "react";
// styles
import styles from "./aboutMe.module.scss";
// external libs
import { motion } from "framer-motion";
import { heroSectionImage } from "@/libs/imageKit/constants";
// components
import IkImageBuilder from "@/components/ui/IkImageBuilder";
// types
import { PageInfo } from "@/types";
type Props = { pageInfo: PageInfo };

const AboutMe = ({ pageInfo }: Props) => {
  const [linesCounter, setLinesCounter] = useState(0);
  const showNext = () => {
    setLinesCounter(
      linesCounter !== pageInfo?.bgInformation.length - 1 ? (pre) => pre + 1 : 0
    );
  };
  const showPrevious = () => {
    setLinesCounter(linesCounter - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.aboutWrapper}
      id="about"
    >
      <h3 className={styles.mainTitle}>About me</h3>

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
            <IkImageBuilder
              path={heroSectionImage}
              alt="Bassam"
              width={300}
              height={300}
              className={styles.aboutImage}
            />
          </motion.div>
        )}

        <div className={styles.textContainer}>
          <h4 className={styles.subtitle}>
            {`Here's a `}
            <span className={styles.accentText}>little background</span>
          </h4>

          <ul className={styles.textLinesContainer}>
            {pageInfo?.bgInformation?.map((line: string, ind: number) => {
              return linesCounter === ind ? (
                <div key={ind}>
                  <li id={`line-${ind}`} className={styles.textLine}>
                    <p>{line}</p>
                  </li>
                  <div className={styles.bullet}>{ind + 1}</div>
                </div>
              ) : null;
            })}
          </ul>

          <h2 className={styles.linesCount}>
            {linesCounter + 1} / {pageInfo?.bgInformation?.length}
          </h2>

          <div className={styles.linesActionButton}>
            <div className={styles.arrowsContainer}>
              {linesCounter ? (
                <button onClick={showPrevious}>prev</button>
              ) : null}

              {linesCounter < pageInfo.bgInformation.length - 1 && (
                <button id="next-button" onClick={showNext}>
                  next
                </button>
              )}
            </div>

            <button onClick={() => setLinesCounter(0)}>reset</button>
          </div>
        </div>
      </>
    </motion.div>
  );
};

export default AboutMe;
