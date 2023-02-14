// hooks
import useSWRGlobalState from "./useSWRGlobalState";

interface Props {
  stateKey: "exp" | "proj";
}

export default function useSwiper({ stateKey }: Props) {
  const { state: currentIndex, setState: setCurrentIndex } = useSWRGlobalState({
    key: stateKey === "exp" ? "experienceIndex" : "projectIndex",
    initialData: 0,
  });

  const goToPrev = (slides: any[]) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (slides: any[]) => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (ind: number) => {
    setCurrentIndex(ind);
  };

  return { currentIndex, setCurrentIndex, goToNext, goToPrev, goToSlide };
}
