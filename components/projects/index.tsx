"use client";

import { useContext, useEffect, useState } from "react";
// styles
import styles from "./projects.module.scss";
// components
import SwipingTool from "@/components/ui/swipingTool";
import ProjectCard from "./projectCard";
// context
import { AppContext } from "@/context";
// libs
import { projectImages } from "@/libs/imageKit/constants";
// data
import { projectsCount } from "@/data/projects";
// types
import { Project } from "@/types";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  // hooks
  const { currentIndex } = useContext(AppContext);

  // internal state
  const [projImages, setProjImages] = useState<string[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const mapProjectsImages = (objects: Project[]): string[] =>
    objects.map((obj) => obj.image);

  useEffect(() => {
    const images = mapProjectsImages(projects);
    setProjImages(images);
  }, [projects]);

  useEffect(() => {
    const projectsLastIndex = projectsCount - 1;
    setCurrentProjectIndex(
      projectsLastIndex < currentIndex ? projectsLastIndex : currentIndex
    );
  }, [currentIndex, currentProjectIndex]);

  return (
    <div className={styles.projectsWrapper} id="projects">
      <h3 className={styles.mainTitle}>Projects</h3>

      <SwipingTool
        cardComponent={
          <ProjectCard project={projects?.[currentProjectIndex]} />
        }
        useSwipeCategory="project"
        items={projects.length}
        logos={projImages}
      />

      <div className={styles.decoratedBg} />
    </div>
  );
};

export default Projects;
