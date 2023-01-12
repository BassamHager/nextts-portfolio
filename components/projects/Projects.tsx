import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.scss";
// external libs & packages
import { motion } from "framer-motion";
// typings
import { Project } from "../../types/typings";
// utils

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={styles.projectsWrapper}
      id="projects"
    >
      <h3 className={styles.sectionTitle}>Projects</h3>

      <div className={styles.projectsContainer}>
        {projects?.map((project, index) => {
          return (
            <div key={index} className={styles.projectContainer}>
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <Image
                  src={project?.image}
                  alt={project?.title || "case study"}
                  width={300}
                  height={300}
                  className={styles.projectImage}
                />
              </motion.div>
              <div className={styles.projectContentBelowImage}>
                <h4 className={styles.projectTitle}>
                  Case Study {++index}/{projects.length + " "}
                  <Link href={project?.linkToBuild} target="_blank">
                    <span className={styles.decoratedSpan}>
                      {project?.title}
                    </span>
                  </Link>
                </h4>

                <div className={styles.projectTechContainer}>
                  {project?.technologies?.map((tech, ind) => {
                    return (
                      <Image
                        key={tech?.image + ind}
                        src={tech?.image}
                        alt={tech?.title || "tech"}
                        width={100}
                        className={styles.projectTechLogo}
                      />
                    );
                  })}
                </div>

                <p className={styles.projectSummary}>{project?.summary}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.decoratedBg} />
    </motion.div>
  );
}
