"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// external libs & packages
import useSWR from "swr";
// styles
import styles from "./projectCard.module.scss";
// typings
import { Project } from "@/types";
// components
import Card from "@/components/ui/card";
import IkImageBuilder from "@/components/ui/IkImageBuilder";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  // internal state
  const [projectTab, setProjectTab] = useState("details");
  // @todo: update below
  const { data: techName, mutate: setTechName } = useSWR<string>({
    key: "techName",
    initial: "",
  });

  return (
    <Card
      cardDetails={
        <article className={styles.projectCardWrapper}>
          <ul className={styles.projectNav}>
            <li>
              <button
                onClick={() => setProjectTab("details")}
                className={projectTab === "details" ? styles.selected : ""}
              >
                Details
              </button>
            </li>
            <li>
              <button
                onClick={() => setProjectTab("demo")}
                className={projectTab === "demo" ? styles.selected : ""}
              >
                Demo
              </button>
            </li>
          </ul>

          {projectTab === "details" && (
            <div className={styles.projectDetailsContainer}>
              <h4 className={styles.projectTitle}>{project?.title}</h4>

              <ul className={styles.projectLinksContainer}>
                {project?.linkToBuild ? (
                  <li>
                    <Link href={project?.linkToBuild} target="_blank">
                      github
                    </Link>
                  </li>
                ) : null}

                {project?.liveUrl ? (
                  <li>
                    <Link href={project?.liveUrl} target="_blank">
                      deployed
                    </Link>
                  </li>
                ) : null}
              </ul>

              <div className={styles.projectTechContainer}>
                {project?.technologies?.map((tech, ind) => {
                  return (
                    <Image
                      key={tech?.image + ind}
                      src={tech?.image}
                      alt={tech?.title || "tech"}
                      width={100}
                      className={styles.techLogo}
                      onMouseOver={() => setTechName(tech.title)}
                      onMouseOut={() => setTechName("")}
                    />
                  );
                })}
              </div>

              {/* tech name displayed on hovering above the tech logo */}
              <h3
                className={`${styles.techName} ${
                  techName ? styles.showTech : ""
                }`}
              >
                {techName}
              </h3>

              <p className={styles.projectSummary}>{project?.summary}</p>
            </div>
          )}

          {projectTab === "demo" && (
            <div className={styles.demoImageContainer}>
              <IkImageBuilder
                path={project.image as string}
                width={500}
                height={500}
                alt={project?.title || "case study"}
                className={styles.projectImage}
              />
            </div>
          )}
        </article>
      }
    />
  );
}
