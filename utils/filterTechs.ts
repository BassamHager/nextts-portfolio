import { Technology } from "../types/typings";

export const filterTechs = (
  techs: string[],
  imagesNames: string[]
): Technology[] => {
  let techImages = [""];

  techImages = imagesNames.filter(
    (imgName) => techs.filter((tech) => imgName.startsWith(tech)).length
  );

  return techImages.map((img) => {
    return {
      image: `/../public/assets/images/skills/${img}`,
    };
  });
};
