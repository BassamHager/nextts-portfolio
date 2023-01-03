import { Skill } from "../../types/typings";

export const imagesNames = [
  "azure.webp",
  "cicd-img.webp",
  "js-img.webp",
  "sass-img.webp",
  "cs-img.webp",
  "mongodb-img.webp",
  "solidity-img.webp",
  "css-img.webp",
  "mui-img.webp",
  "storybook-img.webp",
  "cypress-img.webp",
  "next-img.webp",
  "swr-img.webp",
  "dev-ops-img.webp",
  "node-img.webp",
  "tailwind-img.webp",
  "dotnet-img.webp",
  "nuxt-img.webp",
  "truffle-img1.webp",
  "eth-img.webp",
  "pinia.webp",
  "ts-img.webp",
  "ethers-img.webp",
  "react-context-hooks.webp",
  "vb-img.webp",
  "express-img.webp",
  "react-img.webp",
  "vue.webp",
  "html-img.webp",
  "testing-library.webp",
  "vuex-img.webp",
  "jest-img.webp",
  "redux-img.webp",
  "web3-img.webp",
  "jquery-img.webp",
  "sanity-img.webp",
];

export const skills: Skill[] = imagesNames.map((name) => {
  return { image: `/../public/assets/images/skills/${name}` };
});
