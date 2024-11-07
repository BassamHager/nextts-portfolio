"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// style
import styles from "./technologies.module.scss";
// context
import { AppContext } from "@/context";
import { Skill } from "@/types";

type Props = {
  technologies: Skill[];
};

const Responsibilities = ({ technologies }: Props) => {
  // context
  const { setExperienceDetails } = useContext(AppContext);

  // internal state
  const [techName, setTechName] = useState("");

  return (
    <div className={styles.technologiesWrapper}>
      <h3 className={styles.title}>Technologies</h3>

      <ul>
        {technologies.map((technology, ind) => (
          <li key={ind} onMouseEnter={() => setTechName(technology.title)}>
            <Link href={technology.link} target="_blank">
              <Image src={technology.image} alt="tech" />
            </Link>
          </li>
        ))}
      </ul>
      <h3 className={styles.techName}>{techName}</h3>

      <div className={styles.backButtonContainer}>
        <button
          onClick={() => setExperienceDetails()}
          className={styles.backButton}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Responsibilities;
