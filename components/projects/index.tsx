import { useEffect, useState } from "react";
// styles
import styles from "./projects.module.scss";
// types
import { Project } from "@/types";
// components
import SwipingTool from "@/components/ui/swipingTool";
import ProjectCard from "./projectCard";
// hooks
import useSwipe from "@/utils/hooks/useSwipe";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  // hooks
  const { currentIndex } = useSwipe();
  // internal state
  const [projImages, setProjImages] = useState<string[]>([]);

  const projectsImages = (objects: Project[]): string[] =>
    objects.map((obj) => obj.image);

  useEffect(() => {
    const images = projectsImages(projects);
    setProjImages(images);
  }, [projects]);

  return (
    <div className={styles.projectsWrapper} id="projects">
      <h3 className={styles.mainTitle}>Projects</h3>

      <SwipingTool
        cardComponent={<ProjectCard project={projects?.[currentIndex]} />}
        useSwipeKey="proj"
        items={projects}
        dotsImages={projImages}
      />

      <div className={styles.decoratedBg} />
    </div>
  );
};

export default Projects;
