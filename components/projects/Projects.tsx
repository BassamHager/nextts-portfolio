import React, { useEffect, useState } from "react";
// styles
import styles from "./projects.module.scss";
// typings
import { Project } from "../../types/typings";
// components
import Swiper from "../shared/swiper";
import ProjectCard from "./projectCard";
// hooks
import useSwiper from "../../hooks/useSwiper";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  // hooks
  const { currentIndex } = useSwiper({ stateKey: "proj" });
  // internal state
  const [projImages, setProjImages] = useState<string[]>([]);

  const mapProjectsImages = (objects: Project[]): string[] =>
    objects.map((obj) => obj.image);

  useEffect(() => {
    const images = mapProjectsImages(projects);
    setProjImages(images);
  }, [projects]);

  return (
    <div className={styles.projectsWrapper} id="projects">
      <h3 className={styles.mainTitle}>Projects</h3>

      <Swiper
        cardComponent={<ProjectCard project={projects?.[currentIndex]} />}
        useSwipeKey="proj"
        items={projects}
        dotsImages={projImages}
      />

      <div className={styles.decoratedBg} />
    </div>
  );
}
