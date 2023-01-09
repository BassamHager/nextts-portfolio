import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./experienceCard.module.scss";
// external libs & packages
import { motion } from "framer-motion";
import useSWR from "swr";
// typings
import { Experience, Skill } from "../../types/typings";
import Link from "next/link";
// utils

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const { data: techName, mutate: setTechName } = useSWR<string>({
    key: "techName",
    initial: "hola",
  });

  const dateOptions = {
    year: "numeric",
    month: "short",
  } as const;
  return (
    <div className={styles.cardBg}>
      <div className={styles.anime}>
        <div className={styles.redSaber}></div>
        <div className={styles.goldSaber}></div>
        <div className={styles.solidBg}></div>
        {/* <div className={styles.glass}></div> */}
      </div>

      <article className={styles.experienceCardWrapper}>
        {experience?.companyImage && (
          <motion.div
            // initial={{
            //   y: -100,
            //   opacity: 0,
            // }}
            // transition={{
            //   duration: 1.2,
            // }}
            // whileInView={{
            //   opacity: 1,
            //   y: 0,
            // }}
            // viewport={{
            //   once: true,
            // }}
            className={styles.companyLogoContainer}
          >
            <Link href={experience.companyLink} target="_blank">
              <Image
                src={experience?.companyImage}
                alt={`work experience at ${experience?.company}`}
                width={100}
                className={styles.companyLogo}
              />
            </Link>
          </motion.div>
        )}

        <div className={styles.contentContainerUnderLogo}>
          <h4 className={styles.jobTitle}>{experience?.jobTitle}</h4>

          <Link href={experience.companyLink} target="_blank">
            <p className={styles.companyName}>{experience?.company}</p>
          </Link>

          <div className={styles.techContainer}>
            {experience?.technologies?.map((tech, ind) => (
              <Image
                key={tech?.image + ind}
                src={tech?.image}
                alt={tech.title || "technology"}
                width={100}
                height={100}
                className={styles.techLogo}
                onMouseOver={() => setTechName(tech.title ? tech.title : "")}
                onMouseLeave={() => setTechName("")}
              />
            ))}
          </div>

          {
            <h3
              className={`${styles.techName} ${
                techName ? styles.showTech : ""
              }`}
            >
              {techName}
            </h3>
          }

          {/* <button className={styles.readButton}>Read More</button> */}

          <p className={styles.date}>
            {new Date(experience?.dateStarted).toLocaleDateString(
              "en-US",
              dateOptions
            )}{" "}
            -{" "}
            {experience?.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience?.dateEnded).toLocaleDateString(
                  "en-US",
                  dateOptions
                )}
          </p>
        </div>
      </article>
    </div>
  );
}
