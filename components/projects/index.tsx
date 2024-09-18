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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectsImages = (objects: Project[]): string[] =>
    objects.map((obj) => obj.image);

  useEffect(() => {
    const images = projectsImages(projects);
    setProjImages(images);
  }, [projects]);

  useEffect(() => {
    if (currentIndex > 3) {
      setCurrentProjectIndex(3);
    }
  }, [currentIndex]);

  return (
    <div className={styles.projectsWrapper} id="projects">
      <h3 className={styles.mainTitle}>Projects</h3>

      <SwipingTool
        cardComponent={
          <ProjectCard project={projects?.[currentProjectIndex]} />
        }
        useSwipeCategory="project"
        items={projects}
        logos={projImages}
      />

      <div className={styles.decoratedBg} />
    </div>
  );
};

export default Projects;
