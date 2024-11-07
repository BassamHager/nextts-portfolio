"use client";

import styles from "./bgCircles.module.scss";
// external libs & packages
import { motion } from "framer-motion";

type Props = {};

export default function BgCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className={styles.bgCirclesWrapper}
    >
      <div className={styles.aaa}></div>
      <div className={styles.bbb}></div>
      <div className={styles.ccc}></div>
      <div className={styles.ddd}></div>
      <div className={styles.eee}></div>
    </motion.div>
  );
}
