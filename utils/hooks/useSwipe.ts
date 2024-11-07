"use client";
import { useContext } from "react";
// hooks
import { AppContext } from "@/context";

export default function useSwipe(slidesCount: number) {
  // context
  const { currentIndex, setCurrentIndex } = useContext(AppContext);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const lastSlide = slidesCount - 1;

    if (isFirstSlide) {
      setCurrentIndex(lastSlide);
      return;
    }

    if (currentIndex > lastSlide) {
      setCurrentIndex(slidesCount - 2);
      return;
    }

    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= slidesCount - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const goToSlide = (ind: number) => {
    setCurrentIndex(ind);
  };

  return {
    currentIndex,
    setCurrentIndex,
    goToNext,
    goToPrev,
    goToSlide,
  };
}
