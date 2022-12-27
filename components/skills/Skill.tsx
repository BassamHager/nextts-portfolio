import React /* , { useState } */ from "react";
import styles from "./skill.module.scss";
// external libs & packages
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
// typings
import { Skill as SkillType } from "../../types/typings";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
  // const [src, setSrc] = useState(urlFor(skill.image).url());

  return (
    <div className={`group ${styles.skillWrapper}`}>
      {skill?.image ? (
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(skill.image).url()}
          alt={skill?.title || "tech skill"}
          className={`group ${styles.skillImage} group-hover:object-cover group-hover:p-0 group-hover:grayscale-0`}
          // onError={() => setSrc("/assets/images/not-found-img.png")}
        />
      ) : (
        <motion.img
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          src={"/assets/images/not-found-img.png"}
          alt={skill?.title || "tech skill"}
          className={`group ${styles.skillImage} group-hover:object-cover group-hover:p-0 group-hover:grayscale-0`}
        />
      )}

      <h1 className={`${styles.skillTitle} group-hover:text-yellow-300`}>
        {skill.title}
      </h1>

      {/* @TODO: <div className="">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black">
            {skill?.progress || "100"}
          </p>
        </div>
      </div> */}
    </div>
  );
}