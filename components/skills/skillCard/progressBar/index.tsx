// styles
import styles from "./progressBar.module.scss";

type Props = {
  progress: number;
};

export default function ProgressBar({ progress = 50 }: Props) {
  return (
    <div className={styles.progressBarWrapper}>
      <div
        className={`${styles.progress} w-[${progress}%] ${
          true ? styles.hovered : ""
        }`}
      ></div>
    </div>
  );
}
