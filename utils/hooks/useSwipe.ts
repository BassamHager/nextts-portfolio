"use client";

import { useContext } from "react";
// hooks
import { AppContext } from "@/context";

export default function useSwipe() {
  // context
  const { currentIndex, setCurrentIndex } = useContext(AppContext);

  const goToPrev = (slides: any[]) => {
    const isFirstSlide = currentIndex === 0;
    const lastSlide = slides.length - 1;

    if (isFirstSlide) {
      setCurrentIndex(lastSlide);
      return;
    }

    if (currentIndex > lastSlide) {
      setCurrentIndex(lastSlide - 1);
      return;
    }

    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = (slides: any[]) => {
    const isLastSlide = currentIndex >= slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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
