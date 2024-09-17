"use client";

import Link from "next/link";
import { useState } from "react";
// styles
import styles from "./wipButtons.module.scss";

const WipButtons = () => {
  const [showMoreButtons, setShowMoreButtons] = useState(false);

  return (
    <div className={styles.wipButtonsWrapper}>
      <div className={styles.linksContainer}>
        {!showMoreButtons && (
          <button
            className={styles.neonButton}
            onClick={() => setShowMoreButtons(true)}
          >
            WIP Sections 🏗️ 🧑‍🚒
          </button>
        )}

        {showMoreButtons && (
          <>
            {/* @todo: skills + search & filter */}
            <Link href={"/wip#recent-projects"}>
              <button className={styles.neonButton}>Recent Projects</button>
            </Link>
            <Link href={"/wip#way-of-work"}>
              <button className={styles.neonButton}>Way of Work</button>
            </Link>
            <Link href={"/wip#challenges"}>
              <button className={styles.neonButton}>Challenges</button>
            </Link>
            <button
              className={styles.neonButton}
              onClick={() => setShowMoreButtons(false)}
            >
              {"<<"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WipButtons;
