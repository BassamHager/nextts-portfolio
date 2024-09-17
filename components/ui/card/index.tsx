import { ReactNode } from "react";
import styles from "./card.module.scss";

type Props = {
  cardDetails?: ReactNode | string;
};

const Card = ({ cardDetails }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.anime}>
        <div className={styles.purpleSaber} />
        <div className={styles.purpleSaber2} />
        <div className={styles.spinningBg} />
        <div className={styles.fixedBg} />
      </div>

      <div className={styles.cardContentWrapper}>
        <article>{cardDetails}</article>
      </div>
    </div>
  );
};

export default Card;
