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
      <div className={styles.base} />
      <div className={styles.n13} />
      <div className={styles.n21} />
      <div className={styles.n34} />
      <div className={styles.n89} />
      <div className={styles.n144} />
      <div className={styles.n233} />
    </motion.div>
  );
}
