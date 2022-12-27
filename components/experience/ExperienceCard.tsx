import React from "react";
// external libs & packages
import { motion } from "framer-motion";
import { Experience } from "../../types/typings";
import { urlFor } from "../../sanity";
import styles from "./experienceCard.module.scss";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const dateOptions = {
    year: "numeric",
    month: "short",
  } as const;
  return (
    <div className={styles.cardBg}>
      <div className={styles.anime}>
        <div className={styles.animeFive}></div>
        <div className={styles.animeOne}></div>
      </div>
      <article className={styles.experienceCardWrapper}>
        {experience?.companyImage && (
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            src={urlFor(experience?.companyImage).url()}
            alt={`work experience at ${experience?.company}`}
            className={styles.companyLogo}
          />
        )}

        <div className={styles.contentContainerUnderLogo}>
          <h4 className={styles.jobTitle}>{experience?.jobTitle}</h4>
          <p className={styles.companyName}>{experience?.company}</p>
          <div className={styles.techContainer}>
            {experience?.technologies?.map((tech) => (
              <img
                key={tech?._id}
                src={urlFor(tech.image).url()}
                alt={tech.title}
                className={styles.techLogo}
              />
            ))}
          </div>
          <button className={styles.readButton}>Read More</button>
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
