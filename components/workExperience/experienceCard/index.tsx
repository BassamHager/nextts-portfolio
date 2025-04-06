import Link from "next/link";
import { useContext } from "react";
// styles
import styles from "./experienceCard.module.scss";
// libs
import { motion } from "framer-motion";
// components
import Card from "@/components/ui/card";
import Responsibilities from "../responsibilities";
import Technologies from "../technologies";
import IkImageBuilder from "@/components/ui/IkImageBuilder";
// context
import { AppContext } from "@/context";
// types
import { Experience } from "@/types";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  // context
  const { experienceDetails, setExperienceDetails } = useContext(AppContext);

  // @todo: extract out
  const dateOptions = {
    year: "numeric",
    month: "short",
  } as const;

  return (
    <Card
      cardDetails={
        experienceDetails === "responsibilities" ? (
          <Responsibilities responsibilities={experience?.responsibilities} />
        ) : experience?.technologies && experienceDetails === "technologies" ? (
          <Technologies technologies={experience?.technologies} />
        ) : (
          <div className={styles.experienceCardWrapper}>
            {/* job title */}
            <h3 className={styles.jobTitle}>{experience?.jobTitle}</h3>

            {/* company */}
            <div className={`group/workplace ${styles.workplace}`}>
              {/* logo */}
              {experience?.companyImage && experience?.companyLink ? (
                <motion.div className={`peer ${styles.companyLogoContainer}`}>
                  <Link href={experience?.companyLink} target="_blank">
                    <IkImageBuilder
                      width={100}
                      height={100}
                      path={experience?.companyImage}
                      alt={`work experience at ${experience?.company}`}
                      className={styles.companyLogo}
                    />
                  </Link>
                </motion.div>
              ) : null}

              {/* name */}
              {experience?.companyLink ? (
                <p className={`${styles.companyName} peer-hover:animate-pulse`}>
                  <Link href={experience?.companyLink} target="_blank">
                    <span>@</span> {experience?.company}
                  </Link>
                </p>
              ) : null}
            </div>

            {/* Date And Place */}
            <div className={styles.dateAndPlaceContainer}>
              <h4 className={styles.date}>
                <span className={styles.calenderEmoji}>📅</span>
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
              </h4>
              <h4 className={styles.separator}>-</h4>
              <div className={styles.place}>
                <span className={styles.flagEmoji}>
                  {experience?.countryFlag ?? ""}
                </span>
                <h4>
                  {experience?.companyAddress?.country ?? "country"} -{" "}
                  {experience?.companyAddress?.city ?? "city"}
                </h4>
              </div>
            </div>

            {/* buttons */}
            <div className={styles.buttonsContainer}>
              <button onClick={() => setExperienceDetails("responsibilities")}>
                Responsibilities
              </button>
              {experience?.technologies ? (
                <button onClick={() => setExperienceDetails("technologies")}>
                  Technologies
                </button>
              ) : null}
              {experience?.platforms ? (
                <button onClick={() => setExperienceDetails("platforms")}>
                  Platforms
                </button>
              ) : null}
            </div>
          </div>
        )
      }
    />
  );
};

export default ExperienceCard;
