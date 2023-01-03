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
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: string;
}

export interface Technology {
  image: string;
  progress?: number;
  title?: string;
}

export interface Skill {
  image: string;
  progress?: number;
  title?: string;
}

export interface Experience {
  company: string;
  companyImage: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project {
  title: string;
  image: string;
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
}

export interface Social {
  title: string;
  url: string;
}

export type SocialIconType = {
  index: number;
  isHovered: boolean;
};
