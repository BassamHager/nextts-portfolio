import Image from "next/image";
import Link from "next/link";
// styles
import styles from "./skillCard.module.scss";
// external libs & packages
import { motion } from "framer-motion";
// typings
import { Skill as SkillType } from "../../../types/typings";
// components
import ProgressBar from "./progressBar";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function SkillCard({ directionLeft, skill }: Props) {
  return (
    <li className={styles.skillCardWrapper}>
      <div className={styles.skillInnerContainer}>
        <Link href={skill.link} target="_blank">
          <h1 className={styles.skillTitle}>{skill?.title}</h1>
        </Link>

        {skill?.image ? (
          <motion.div>
            <Image
              src={skill.image}
              width={100}
              className={styles.skillImage}
              alt={skill?.title || "tech skill"}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src={"/../public/assets/images/not-found-img.png"}
              alt={skill?.title || "tech skill"}
              className={styles.skillImage}
            />
          </motion.div>
        )}

        {true && <ProgressBar progress={50} /* @TODO: update */ />}
      </div>
    </li>
  );
}
