import { ReactNode } from "react";
// styles
import styles from "./swipingTool.module.scss";
// external libs
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
// hooks
import useSwipe from "@/utils/hooks/useSwipe";
// data
import { projectsCount } from "@/data/projects";
// components
import IkImageBuilder from "@/components/ui/IkImageBuilder";

type Props = {
  cardComponent: ReactNode;
  items: number;
  useSwipeCategory: "experience" | "project";
  logos: string[];
};

const SwipingTool = ({
  cardComponent,
  items,
  logos,
  useSwipeCategory,
}: Props) => {
  // hooks
  const { currentIndex, goToNext, goToPrev, goToSlide } = useSwipe(items);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.swipingToolWrapper}
    >
      <div className={`group ${styles.itemsContainer}`}>
        {cardComponent}

        <div className={styles.linkingLine} />

        <div className={styles.arrowsContainer}>
          <button
            className={`${styles.arrowContainer} group-hover:block`}
            onClick={() => goToPrev()}
          >
            <BsChevronCompactLeft />
          </button>
          <button
            className={`${styles.arrowContainer} group-hover:block`}
            onClick={() => goToNext()}
          >
            <BsChevronCompactRight />
          </button>
        </div>

        <div className={styles.logosContainer}>
          {logos?.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${index === currentIndex ? styles.selected : ""} ${
                useSwipeCategory === "project" &&
                currentIndex > projectsCount - 2 &&
                index === projectsCount - 1
                  ? styles.selected
                  : ""
              }`}
            >
              {image ? (
                <IkImageBuilder
                  width={100}
                  height={100}
                  path={image}
                  alt={"logo"}
                />
              ) : (
                <RxDotFilled />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SwipingTool;
