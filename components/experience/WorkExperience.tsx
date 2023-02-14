// typings
import { Experience } from "../../types/typings";
// components
import Swiper from "../shared/swiper";
import ExperienceCard from "./ExperienceCard";
// hooks
import useSwiper from "../../hooks/useSwiper";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  const { currentIndex } = useSwiper();

  return (
    <Swiper
      cardComponent={
        <ExperienceCard experience={experiences?.[currentIndex]} />
      }
      items={experiences}
    />
  );
}
