import { MY_EDUCATIONS } from "./educations.params";
import MY_EXPERIENCES from "./experiences.params";
import MY_PROJECTS from "./projects.params";
import MY_SKILLS from "./skills.params";
import {
  Platform,
  type EducationPageParams,
  type ExperiencePageParams,
  type HomePageParams,
  type ProjectPageParams,
  type ResumePageParams,
  type SearchPageParams,
  type SkillsPageParams,
} from "./types";
import { Icons } from "./utils";

export const TITLE_SUFFIX = "Portfolio";

export const NavBar = {
  home: "Home",
  personal: "Projects",
  career: "Experiences",
  resume: "Resume",
  skills: "Skills",
  Education: "Education",
};

export const getPlatfromIcon = (platform: Platform): Icons => {
  switch (platform) {
    case Platform.GitHub:
      return Icons.GitHub;
    case Platform.Linkedin:
      return Icons.LinkedIn;
    case Platform.StackOverflow:
      return Icons.StackOverflow;
    case Platform.Facebook:
      return Icons.Facebook;
    case Platform.Email:
      return Icons.Email;
    case Platform.Twitter:
      return Icons.Twitter;
    case Platform.Youtube:
      return Icons.Youtube;
  }
};

export const HOME: HomePageParams = {
  title: "Home",
  name: "Luis",
  lastName: "Canada",
  description: "Full Stack dev with an endless curiosity",
  links: [
    { platform: Platform.GitHub, link: "https://github.com/luis-c465" },
    {
      platform: Platform.Linkedin,
      link: "https://www.linkedin.com/in/luis-c465/",
    },
    {
      platform: Platform.StackOverflow,
      link: "https://stackoverflow.com/users/21763930/luis-canada",
    },
    {
      platform: Platform.Email,
      link: "luiscanadaworkmail@gmail.com",
    },
  ],
};

export const PROJECTS: ProjectPageParams = {
  title: "Projects",
  items: MY_PROJECTS,
};

export const EXPERIENCES: ExperiencePageParams = {
  title: "Experiences",
  items: MY_EXPERIENCES,
};

export const SKILLS: SkillsPageParams = {
  title: "Skills",
  items: MY_SKILLS,
};

export const RESUME: ResumePageParams = {
  title: "Resumé",
  item: "/Reasume.pdf",
};

export const SEARCH: SearchPageParams = {
  title: "Search",
};

export const EDUCATION: EducationPageParams = {
  items: MY_EDUCATIONS,
  title: "Education",
};
