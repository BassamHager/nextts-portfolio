import { Experience } from "../../types/typings";
import { companyImages } from "../images/index";
import { filterTechs } from "../../utils/filterTechs";
// const {
//   azure,
//   CD/CD,
//   JavaScript,
//   SASS,
//   cs,
//   MongoDb,
//   solidity,
//   CSS,
//   mui,
//   storybook,
//   cypress,
//   next,
//   swr,
//   dev,
//   Node.js,
//   tailwind,
//   dotnet,
//   nuxt,
//   truffle,
//   eth,
//   pinia,
//   ts,
//   ethers,
//   react_hooks,
//   vb,
//   Express.js,
//   react,
//   vue,
//   HTML,
//   testing,
//   vuex,
//   jest,
//   Redux,
//   web3,
//   jquery,
//   sanity,
// } = techImages;
const { hyf, exact, cc, mws, syt } = companyImages;
export const experiences: Experience[] = [
  {
    company: "HackYourFuture",
    companyImage: hyf,
    dateStarted: "2019-05-01",
    dateEnded: "2019-07-31",
    isCurrentlyWorkingHere: false,
    jobTitle: "Jr.Frontend Developer",
    points: [],
    technologies: filterTechs([
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDb",
      "Redux",
      "React.js",
      "React-Hooks",
    ]),
    companyLink: "https://www.hackyourfuture.net/",
  },
  {
    company: "Exact",
    companyImage: exact,
    dateStarted: "2019-09-01",
    dateEnded: "2021-12-31",
    isCurrentlyWorkingHere: false,
    jobTitle: "Software Engineer",
    points: [],
    technologies: filterTechs([
      "HTML",
      "CSS",
      "JavaScript",
      "Csharp",
      "Visual basic",
      "Dotnet",
      "Azure",
      "React.js",
      "React_Hooks",
      "jQuery",
      "CI/CD",
    ]),
    companyLink: "https://www.exact.com/",
  },
  {
    company: "SpicyFi - CryptoChefs",
    companyImage: cc,
    dateStarted: "2019-04-01",
    dateEnded: "",
    isCurrentlyWorkingHere: true,
    jobTitle: "Blockchain FE Dev",
    points: [],
    technologies: filterTechs([
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Firebase",
      "Redux",
      "React",
      "React_Hooks",
      "Jest",
      "Web3",
      "Eth",
      "MUI",
      "CI/CD",
      "Truffle",
      "Ethers.js",
      "Solidity",
    ]),
    companyLink: "https://cryptochefs.github.io/",
  },
  {
    company: "MatchWornShirt",
    companyImage: mws,
    dateStarted: "2022-01-01",
    dateEnded: "2022-06-30",
    isCurrentlyWorkingHere: false,
    jobTitle: "Frontend Developer",
    points: [],
    technologies: filterTechs([
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Vue.js",
      "VueX",
      "Pinia",
      "Jest",
      "Tailwind",
      "SASS",
      "Nuxt.js",
      "Cypress",
      "Storybook",
      "CD/CD",
    ]),
    companyLink: "https://www.matchwornshirt.com/club/bayer-leverkusen",
  },
  {
    company: "SuperYacht Times",
    companyImage: syt,
    dateStarted: "2022-07-01",
    dateEnded: "",
    isCurrentlyWorkingHere: true,
    jobTitle: "Web Developer",
    points: [],
    technologies: filterTechs([
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "SWR",
      "Next.js",
      "React",
      "React_hooks",
      "Jest",
      "Testing Library",
      "Cypress",
      "Storybook",
      "CD/CD",
    ]),
    companyLink: "https://www.superyachttimes.com/",
  },
];
