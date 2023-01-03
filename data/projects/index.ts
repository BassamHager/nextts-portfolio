import { Project } from "../../types/typings";
import { filterTechs } from "../../utils/filterTechs";

export const projects: Project[] = [
  {
    title: "ABN Amro - TA",
    image: "/../public/assets/images/projects/abn_amro_tech_assignment.webp",
    summary:
      "Simple React.js app, using tvmaze API, the state managed using React Context API, this app lets the user views a few lists of TV shows based on different genres. Each list has a few popular TV shows based on their rating. Clicking a TV show card shall display a new screen with the details of the clicked show.",
    technologies: filterTechs(["html", "css", "react"]),
    linkToBuild: "string",
  },
];
