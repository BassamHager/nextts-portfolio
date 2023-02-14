import React from "react";
// style
import styles from "./responsibilities.module.scss";
// hooks
import useSWRGlobalState from "../../../../hooks/useSWRGlobalState";

type Props = {
  responsibilities: string[];
};

export default function Responsibilities({ responsibilities }: Props) {
  // hooks
  const { setState: setShowResponsibilities } = useSWRGlobalState({
    key: "showResponsibilities",
    initialData: true,
  });

  return (
    <div className={styles.responsibilitiesWrapper}>
      <h3>Responsibilities:</h3>

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

      <div className={styles.backButtonContainer}>
        <button
          onClick={() => setShowResponsibilities(false)}
          className={styles.backButton}
        >
          Back
        </button>
      </div>
    </div>
  );
}
