import Image from "next/image";
import styles from "./experienceCard.module.scss";
import Link from "next/link";
// external libs & packages
import { motion } from "framer-motion";
import useSWR from "swr";
// typings
import { Experience } from "../../types/typings";
// components
import Card from "../shared/card";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const { data: techName, mutate: setTechName } = useSWR<string>({
    key: "techName",
    initial: "",
  });

  const dateOptions = {
    year: "numeric",
    month: "short",
  } as const;

  return (
    <Card
      cardDetails={
        <article className={styles.experienceCardWrapper}>
          {/* company logo */}
          {experience?.companyLink && (
            <motion.div className={styles.companyLogoContainer}>
              <Link href={experience?.companyLink} target="_blank">
                <Image
                  src={experience?.companyImage}
                  alt={`work experience at ${experience?.company}`}
                  width={100}
                  className={styles.companyLogo}
                />
              </Link>
            </motion.div>
          )}

          {/* content under company logo */}
          <div className={styles.contentContainerUnderLogo}>
            <h4 className={styles.jobTitle}>{experience?.jobTitle}</h4>

            {/* company name */}
            {experience?.companyLink && (
              <Link href={experience?.companyLink} target="_blank">
                <p className={styles.companyName}>{experience?.company}</p>
              </Link>
            )}

            {/* techs used in company */}
            <div className={styles.expCardTechContainer}>
              {experience?.technologies.slice(0, 8)?.map((tech, ind) => (
                <Image
                  key={tech?.image + ind}
                  src={tech?.image}
                  alt={tech.title || "technology"}
                  width={100}
                  height={100}
                  className={styles.expCardTechLogo}
                  onMouseOver={() => setTechName(tech.title ? tech.title : "")}
                  onMouseLeave={() => setTechName("")}
                />
              ))}
            </div>

            {/* tech name displayed on hovering above the tech logo */}
            <h3
              className={`${styles.techName} ${
                techName ? styles.showTech : ""
              }`}
            >
              {techName}
            </h3>

            <div className={styles.readMoreAndDateContainer}>
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

              {/* @TODO: */}
              <button className={styles.readButton}>Read More</button>
            </div>
          </div>
        </article>
      }
    />
  );
}
