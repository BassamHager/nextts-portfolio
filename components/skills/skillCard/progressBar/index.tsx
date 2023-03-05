// styles
import styles from "./progressBar.module.scss";

type Props = {
  progress: number;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <div className={styles.progressBarWrapper}>
      <div
        // className={`${styles.progress} w-[${progress ? progress : "50"}%] ${
        className={`${styles.progress} ${true ? styles.hovered : ""}`}
      ></div>
    </div>
  );
}
