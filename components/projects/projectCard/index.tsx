import Image from "next/image";
import Link from "next/link";
// external libs & packages
import useSWR from "swr";
// styles
import styles from "./projectCard.module.scss";
// typings
import { Project } from "../../../types/typings";
// components
import Card from "../../shared/card";
import useSWRGlobalState from "../../../hooks/useSWRGlobalState";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  // hook
  const { state: navItem, setState: setNavItem } = useSWRGlobalState({
    key: "projectNavItem",
    initialData: "details",
  });

  // internal state
  const { data: techName, mutate: setTechName } = useSWR<string>({
    key: "techName",
    initial: "",
  });

  return (
    <Card
      cardDetails={
        <article className={styles.projectCardWrapper}>
          <div className={styles.projectNav}>
            <ul>
              <li
                onClick={() => setNavItem("details")}
                className={navItem === "details" ? styles.selected : ""}
              >
                <h2>Details</h2>
              </li>
              <li
                onClick={() => setNavItem("demo")}
                className={navItem === "demo" ? styles.selected : ""}
              >
                <h2>Demo</h2>
              </li>
            </ul>
          </div>

          {navItem === "demo" && (
            <div className={styles.demoImageContainer}>
              <Image
                src={project?.image}
                alt={project?.title || "case study"}
                width={100}
                className={styles.projectImage}
              />
            </div>
          )}

          {navItem === "details" && (
            <div className={styles.projectDetailsContainer}>
              <h4 className={styles.projectTitle}>{project?.title}</h4>

              <ul className={styles.projectLinksContainer}>
                <li>
                  <Link href={project?.linkToBuild} target="_blank">
                    github
                  </Link>
                </li>
                {project.liveUrl && (
                  <li>
                    <Link href={project?.liveUrl} target="_blank">
                      deployed
                    </Link>
                  </li>
                )}
              </ul>

              <div className={styles.projectTechContainer}>
                {project?.technologies?.map((tech, ind) => {
                  return (
                    <Image
                      key={tech?.image + ind}
                      src={tech?.image}
                      alt={tech?.title || "tech"}
                      width={100}
                      className={styles.projectTechLogo}
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
        </article>
      }
    />
  );
}
