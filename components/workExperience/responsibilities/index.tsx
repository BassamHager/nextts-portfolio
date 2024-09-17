import React, { useContext } from "react";
// style
import styles from "./responsibilities.module.scss";
// context
import { AppContext } from "@/context";

type Props = {
  responsibilities: string[];
};

const Responsibilities = ({ responsibilities }: Props) => {
  // context
  const { setExperienceDetails } = useContext(AppContext);

  return (
    <div className={styles.responsibilitiesWrapper}>
      <h3 className={styles.title}>Responsibilities:</h3>

      <div>
        <ul>
          {responsibilities.map((responsibility, ind) => (
            <li key={ind}>
              <p>
                <span>{`➢ `}</span>
                {responsibility}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setExperienceDetails()}
        className={styles.backButton}
      >
        Back
      </button>
    </div>
  );
};

export default Responsibilities;
