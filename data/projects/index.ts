import { Project } from "@/types";
import { projectImages } from "@/data/assets/images/index";
import { filterTechs } from "../../utils/filterTechs";
const { abn, portfolio, poll, bank, ryde } = projectImages;

export const projects: Project[] = [
  {
    title: "Portfolio",
    image: portfolio,
    summary:
      "My portfolio is a Next.TS app, using Sanity for CMS, SWR for the state management, Tailwind + SASS for styling & Vercel for the deployment.",
    technologies: filterTechs([
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "React_Hooks",
      "SASS",
      "Tailwind",
      "Next.js",
      "SWR",
      "Sanity",
      "Git",
    ]),
    linkToBuild: "https://github.com/BassamHager/nextts-portfolio",
    liveUrl: "https://bassam-hager-portfolio-nextts.vercel.app/",
  },
  {
    title: "ABN Amro - TA",
    image: abn,
    summary:
      "Simple React.js app, using tvmaze API, the state managed using React Context API, this app lets the user views a few lists of TV shows based on different genres. Each list has a few popular TV shows based on their rating. Clicking a TV show card shall display a new screen with the details of the clicked show.",
    technologies: filterTechs(["HTML", "CSS", "React.js", "React_Hooks"]),
    linkToBuild: "https://github.com/BassamHager/abn_amro_tech_assignment",
  },
  {
    title: "Poll App - TA",
    image: poll,
    summary:
      "A simple poll application which works exclusively in the front end without back end interactions. built with Next.js, TS, Tailwind, local-storage, SWR, and deployed with Vercel.",
    technologies: filterTechs([
      "Next.js",
      "React.js",
      "React_Hooks",
      "SWR",
      "TypeScript",
      "HTML",
      "CSS",
      "Vercel",
    ]),
    linkToBuild: "https://github.com/BassamHager/poll-app",
    liveUrl: "https://poll-app-pearl.vercel.app/poll",
  },
  {
    title: "Bank Account Dashboard - TA",
    image: bank,
    summary:
      "Is a mini Vue3 application applies most of the basic/common Vue concepts, uses vue-router for routing, vitest & testing-library/vue for unit testing, & styled with plain css & sass.",
    technologies: filterTechs([
      "Vue.js",
      "SASS",
      "Vitest",
      "Testing Library",
      "TypeScript",
      "HTML",
      "CSS",
      "Vercel",
    ]),
    linkToBuild: "https://github.com/BassamHager/bank-account-dashboard-ta",
    liveUrl: "https://bank-account-dashboard-ta.vercel.app/",
  },
  {
    title: "Ryde - Uber Clone",
    image: ryde,
    summary:
      "Is a React Native app - Create a full-stack Uber Clone app using the latest features of Expo and a high-speed, edge-optimized Postgres database",
    technologies: filterTechs([
      "React-Native",
      "tailwind",
      "TypeScript",
      "HTML",
      "CSS",
      "neon",
      "clerk",
    ]),
    linkToBuild: "https://github.com/BassamHager/uber",
    liveUrl: "",
  },
];

export const projectsCount = projects.length;
