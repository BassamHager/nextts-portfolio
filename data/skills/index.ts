import { Skill } from "../../types/typings";
import { techImages } from "../images/index";

export const CATEGORIES = [
  "all",
  "technologies",
  "frameworks",
  "platforms, tools & IDEs",
  "operating systems",
  "databases",
  "others",
] as const;

const {
  azure,
  cicd,
  js,
  sass,
  cs,
  mongodb,
  solidity,
  css,
  mui,
  storybook,
  cypress,
  next,
  swr,
  dev,
  node,
  tailwind,
  dotnet,
  nuxt,
  truffle,
  eth,
  pinia,
  ts,
  ethers,
  react_hooks,
  vb,
  express,
  react,
  vue,
  html,
  testing,
  vuex,
  jest,
  redux,
  web3,
  jquery,
  sanity,
  macos,
  windows,
  elasticsearch,
  firebase,
  mysql,
  sqlserver,
  eslint,
  figma,
  git,
  gitlab,
  jira,
  notion,
  postman,
  slack,
  swagger,
  vs,
  vscode,
} = techImages;

export const skillsData: Skill[] = [
  {
    image: azure,
    cat: CATEGORIES[3],
    title: "Azure",
    link: "https://azure.microsoft.com/en-us/",
  },
  {
    image: cicd,
    cat: CATEGORIES[6],
    title: "CI/CD",
    link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
  },
  {
    image: js,
    cat: CATEGORIES[1],
    title: "JavaScript",
    link: "https://www.w3schools.com/js/",
  },
  {
    image: sass,
    cat: CATEGORIES[2],
    title: "SASS",
    link: "https://sass-lang.com/",
  },
  {
    image: cs,
    cat: CATEGORIES[1],
    title: "Csharp",
    link: "https://www.w3schools.com/cs/index.php",
  },
  {
    image: mongodb,
    cat: CATEGORIES[5],
    title: "MongoDb",
    link: "https://www.mongodb.com/",
  },
  {
    image: solidity,
    cat: CATEGORIES[1],
    title: "Solidity",
    link: "https://docs.soliditylang.org/",
  },
  {
    image: css,
    cat: CATEGORIES[1],
    title: "CSS",
    link: "https://www.w3schools.com/css/",
  },
  {
    image: mui,
    cat: CATEGORIES[2],
    title: "Material-UI",
    link: "https://mui.com/",
  },
  {
    image: storybook,
    cat: CATEGORIES[3],
    title: "Storybook",
    link: "https://storybook.js.org/",
  },
  {
    image: cypress,
    cat: CATEGORIES[2],
    title: "Cypress",
    link: "https://www.cypress.io/",
  },
  {
    image: next,
    cat: CATEGORIES[2],
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    image: swr,
    cat: CATEGORIES[2],
    title: "SWR",
    link: "https://swr.vercel.app/",
  },
  {
    image: dev,
    cat: CATEGORIES[6],
    title: "DevOps",
    link: "https://aws.amazon.com/devops/what-is-devops/",
  },
  {
    image: node,
    cat: CATEGORIES[1],
    title: "Node.js",
    link: "https://nodejs.org/",
  },
  {
    image: tailwind,
    cat: CATEGORIES[2],
    title: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    image: dotnet,
    cat: CATEGORIES[2],
    title: "Dotnet",
    link: "https://dotnettutorials.net/course/csharp-dot-net-tutorials/",
  },
  {
    image: nuxt,
    cat: CATEGORIES[2],
    title: "Nuxt.js",
    link: "https://nuxtjs.org/",
  },
  {
    image: truffle,
    cat: CATEGORIES[2],
    title: "Truffle",
    link: "https://trufflesuite.com/",
  },
  {
    image: eth,
    cat: CATEGORIES[1],
    title: "Ethereum",
    link: "https://ethereum.org/en/",
  },
  {
    image: pinia,
    cat: CATEGORIES[2],
    title: "Pinia",
    link: "https://pinia.vuejs.org/",
  },
  {
    image: ts,
    cat: CATEGORIES[1],
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    image: ethers,
    cat: CATEGORIES[2],
    title: "Ethers.js",
    link: "https://docs.ethers.org/v5/",
  },
  {
    image: react_hooks,
    cat: CATEGORIES[2],
    title: "React_Hooks",
    link: "https://reactjs.org/docs/hooks-intro.html",
  },
  {
    image: vb,
    cat: CATEGORIES[1],
    title: "Visual Basic",
    link: "https://www.guru99.com/vb-net-introduction-features.html",
  },
  {
    image: express,
    cat: CATEGORIES[2],
    title: "Express.js",
    link: "https://expressjs.com/",
  },
  {
    image: react,
    cat: CATEGORIES[2],
    title: "React.js",
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    image: vue,
    cat: CATEGORIES[2],
    title: "Vue.js",
    link: "https://vuejs.org/guide/introduction.html",
  },
  {
    image: html,
    cat: CATEGORIES[1],
    title: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    image: testing,
    cat: CATEGORIES[2],
    title: "Testing Library",
    link: "https://testing-library.com/",
  },
  {
    image: vuex,
    cat: CATEGORIES[2],
    title: "VueX",
    link: "https://vuex.vuejs.org/",
  },
  {
    image: jest,
    cat: CATEGORIES[2],
    title: "Jest",
    link: "https://jestjs.io/",
  },
  {
    image: redux,
    cat: CATEGORIES[2],
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    image: web3,
    cat: CATEGORIES[2],
    title: "Web3",
    link: "https://ethereum.org/en/web3/",
  },
  {
    image: jquery,
    cat: CATEGORIES[2],
    title: "jQuery",
    link: "https://jquery.com/",
  },
  {
    image: sanity,
    cat: CATEGORIES[2],
    title: "Sanity",
    link: "https://www.sanity.io/",
  },
  {
    image: macos,
    cat: CATEGORIES[4],
    title: "MacOS",
    link: "https://www.techopedia.com/definition/2639/macintosh-operating-system-mac-os",
  },
  {
    image: windows,
    cat: CATEGORIES[4],
    title: "WindowsOS",
    link: "https://blogs.windows.com/windowsexperience/2021/06/24/introducing-windows-11/",
  },
  {
    image: elasticsearch,
    cat: CATEGORIES[5],
    title: "ElasticSearch",
    link: "https://www.elastic.co/",
  },
  {
    image: sqlserver,
    cat: CATEGORIES[5],
    title: "SQL Server",
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
  },
  {
    image: mysql,
    cat: CATEGORIES[5],
    title: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    image: firebase,
    cat: CATEGORIES[5],
    title: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    image: eslint,
    cat: CATEGORIES[3],
    title: "Eslint",
    link: "https://eslint.org/docs/latest/user-guide/getting-started",
  },
  {
    image: figma,
    cat: CATEGORIES[3],
    title: "Figma",
    link: "https://www.figma.com/login",
  },
  {
    image: git,
    cat: CATEGORIES[3],
    title: "Git",
    link: "https://git-scm.com/",
  },
  {
    image: gitlab,
    cat: CATEGORIES[3],
    title: "Gitlab",
    link: "https://github.com/about",
  },
  {
    image: jira,
    cat: CATEGORIES[3],
    title: "Jira",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    image: notion,
    cat: CATEGORIES[3],
    title: "Notion",
    link: "https://www.notion.so/",
  },
  {
    image: postman,
    cat: CATEGORIES[3],
    title: "Postman",
    link: "https://www.postman.com/company/about-postman/",
  },
  {
    image: slack,
    cat: CATEGORIES[3],
    title: "Slack",
    link: "https://slack.com/",
  },
  {
    image: swagger,
    cat: CATEGORIES[3],
    title: "Swagger",
    link: "https://swagger.io/",
  },
  {
    image: vs,
    cat: CATEGORIES[3],
    title: "Visual Studio",
    link: "https://visualstudio.microsoft.com/",
  },
  {
    image: vscode,
    cat: CATEGORIES[3],
    title: "VS Code",
    link: "https://code.visualstudio.com/",
  },
];
