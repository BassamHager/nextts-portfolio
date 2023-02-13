import React, { ReactNode } from "react";
import styles from "./card.module.scss";

type Props = {
  cardDetails?: ReactNode | string;
};

export default function Card({ cardDetails }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.anime}>
        <div className={styles.redSaber}></div>
        <div className={styles.purpleSaber}></div>
        <div className={styles.goldSaber}></div>
        <div className={styles.solidBg}></div>
        <div className={styles.glass}></div>
      </div>

      <div className={styles.cardContentWrapper}>
        <article>{cardDetails}</article>
      </div>
    </div>
  );
}
