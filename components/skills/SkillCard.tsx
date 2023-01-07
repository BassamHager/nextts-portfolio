import Image from "next/image";
import React /* , { useState } */ from "react";
import styles from "./skill.module.scss";
// external libs & packages
import { motion } from "framer-motion";
// typings
import { Skill as SkillType } from "../../types/typings";
// data
import { CATEGORIES } from "../../data/skills";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function SkillCard({ directionLeft, skill }: Props) {
  return (
    <div className={`group ${styles.skillWrapper}`}>
      {skill?.image ? (
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
            src={skill.image}
            width={200}
            height={200}
            className={`group ${styles.skillImage} group-hover:object-cover group-hover:p-0 group-hover:grayscale-0`}
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
            className={`group ${styles.skillImage} group-hover:object-cover group-hover:p-0 group-hover:grayscale-0`}
          />
        </motion.div>
      )}

      <h1 className={`${styles.skillTitle} group-hover:text-yellow-300`}>
        {skill?.title}
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
