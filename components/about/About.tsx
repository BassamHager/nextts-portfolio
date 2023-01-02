import styles from "./about.module.scss";
import Image from "next/image";
// external libs & packages
import { motion } from "framer-motion";
import { PageInfo } from "../../types/typings";
import { useEffect, useState } from "react";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  const [isSsg, setIsSsg] = useState(false);

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
              src={urlFor(pageInfo?.profilePic).url()}
              alt={"Bassam"}
              width={300}
              height={300}
              className={styles.aboutImage}
            />
          </motion.div>
        )}
        <div className={styles.textContainer}>
          <h4 className={styles.subtitle}>
            {`Here's a `}
            <span className={styles.wordDecoration}>little background</span>
          </h4>
          <ul className={styles.textsContainer}>
            {pageInfo?.bgInformation?.map((line: string, ind: number) => (
              <li key={ind} className={`${styles.mainText}`}>
                <div className={styles.bullet}>{ind + 1}</div> {line}
              </li>
            ))}
          </ul>
        </div>
      </>
    </motion.div>
  );
}
