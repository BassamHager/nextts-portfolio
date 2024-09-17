"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
// styles
import styles from "./swipingTool.module.scss";
// external libs
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";
// hooks
import useSwipe from "@/utils/hooks/useSwipe";
// types
import { Experience, Project } from "@/types";

type Props = {
  cardComponent: ReactNode;
  items: Experience[] | Project[];
  useSwipeKey: "exp" | "proj";
  dotsImages: string[];
};

const SwipingTool = ({
  cardComponent,
  items,
  dotsImages,
  useSwipeKey,
}: Props) => {
  // hooks
  const { currentIndex, goToNext, goToPrev, goToSlide } = useSwipe();

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
            onClick={() => goToPrev(items)}
          >
            <BsChevronCompactLeft />
          </button>
          <button
            className={`${styles.arrowContainer} group-hover:block`}
            onClick={() => goToNext(items)}
          >
            <BsChevronCompactRight />
          </button>
        </div>

        <div className={styles.projectLogosContainer}>
          {dotsImages?.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={index === currentIndex ? styles.selected : ""}
            >
              {image ? (
                <Image src={image} alt={"company"} className={styles.img} />
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
