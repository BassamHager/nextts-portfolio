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
              <motion.img
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
                src={urlFor(project?.image).url()}
                alt={project?.title || "case study"}
                className={styles.projectImage}
              />

              <div className={styles.projectContentBelowImage}>
                <h4 className={styles.projectTitle}>
                  Case Study {++index}/{projects.length + " "}
                  <Link href={project?.linkToBuild} target="_blank">
                    <span className={styles.decoratedSpan}>
                      {project?.title}
                    </span>
                  </Link>
                </h4>

                <div className={styles.techsContainer}>
                  {project?.technologies?.map((tech) => {
                    return (
                      <Image
                        key={tech?._id}
                        src={urlFor(tech?.image).url()}
                        alt={tech?.title || "tech"}
                        width={100}
                        height={100}
                        className={styles.techImage}
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
