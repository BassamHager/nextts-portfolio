import { CATEGORIES } from "../data/skills/index";
// interface SanityBody {
//   _createdAt: string;
//   _id: string;
//   _rev: string;
//   _updatedAt: string;
// }

// interface Image {
//   url: string;
// }

export interface PageInfo {
  address: string;
  bgInformation: string[];
  email: string;
  role: string;
  heroImage: string | StaticImageData;
  name: string;
  phoneNumber: string;
  profilePic: string | StaticImageData;
}

export interface Technology {
  image: string | StaticImageData;
  progress?: number;
  title?: string;
}

export interface Skill {
  image: string | StaticImageData;
  cat: Category;
  title: string;
  link: string;
  progress?: number;
}

export interface Experience {
  id: number;
  company: string;
  companyImage: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  responsibilities: string[];
  technologies?: Skill[]; // @todo: update
  platforms?: string[];
  companyLink: string;
  companyAddress?: { city: string; country: string };
  countryFlag?: string;
}

export interface Project {
  title: string;
  image: string;
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
  liveUrl?: string;
}

export interface Social {
  title: string;
  url: string;
}

export type SocialIconType = {
  index: number;
  isHovered: boolean;
};

export type Category = (typeof CATEGORIES)[number];
