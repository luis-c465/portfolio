import Assets, { p } from "./data/assets";
import { getSkills } from "./skills.params";
import type { Project } from "./types";

const MY_PROJECTS: Array<Project> = [
  {
    slug: "portfolio",
    color: "#ff3e00",
    description:
      "A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",
    shortDescription:
      "A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",
    links: [
      {
        to: "https://github.com/luis-c465/portfolio",
        label: "GitHub",
      },
    ],
    logo: Assets.Svelte,
    name: "Developer Portfolio",
    period: {
      from: new Date(2024, 1),
    },
    skills: getSkills("svelte", "ts", "tailwind"),
    type: "Website",
  },
  {
    slug: "dismissal-pro",
    color: "blue",
    description: `App for keeping track of student dismissals and pickups throughought the day.

    - Made over the course of 6 months working with school administrators and partner.
    - Halved wait time during Prom night and improved efficiency of dismissal process by 5x
    - Still currently being used in TERRA, my high school
    - Hosted on Heroku as a web server
    - Application had Authentication, API's for frontend, and Data storage
    `,
    shortDescription:
      "App for keeping track of student dismissals and pickups throughought the day",
    links: [
      {
        to: "https://www.dismissalpro.com/",
        label: "Dismissal Pro",
      },
    ],
    screenshots: [
      { label: "Pickup page", src: p`dismissal-pro/pickup.png` },
      { label: "Attendance page", src: p`dismissal-pro/attendance.png` },
      {
        label: "Upload date page",
        src: p`dismissal-pro/upload.png`,
      },
    ],
    logo: Assets.Django,
    name: "Dismissal Pro",
    period: {
      from: new Date(2022, 3),
      to: new Date(2023, 8),
    },
    skills: getSkills("svelte", "js", "html", "css", "django"),
    type: "Website",
  },
  {
    slug: "darwin",
    color: "orange",
    shortDescription:
      "Repository of trained Reinforcement Learning models. Atari Games, Mujoco Physics Engine, & more.",
    description: `Repository of trained Reinforcement Learning models. Atari Games, Mujoco Physics Engine, & more.
    `,
    links: [
      {
        to: "https://github.com/ghubnerr/darwin",
        label: "Github",
      },
    ],
    screenshots: [
      { label: "Training Process", src: p`darwin/training.png` },
      { label: "Application for training", src: p`darwin/main.png` },
      { label: "RiverRaid after 2000 epochs", src: p`darwin/riverraid.gif` },
      { label: "Breakout after 2000 epochs", src: p`darwin/breakout.gif` },
      { label: "Trained Lunar Lander", src: p`darwin/lander.gif` },
      { label: "Trained Humanoid", src: p`darwin/humanoid2.gif` },
    ],
    logo: Assets.Pytorch,
    name: "Darwin",
    period: {
      from: new Date(2023, 10),
      to: new Date(2023, 11),
    },
    skills: getSkills("python", "pytorch", "tensorflow", "kivy"),
    type: "AI/ML",
  },
  {
    slug: "crypto-currency-triage",
    name: "Crypto Currency Triage",
    color: "cyan",
    shortDescription:
      "Research project funded by NSF, analyzes files on phone & reveals evidence of cryptocurrency usage.",
    description: `Research project funded by NSF, analyzes files on phone & reveals evidence of cryptocurrency usage.

    Worked with post graduate researchers and cyber security professor
    to develop UI for application
    `,
    links: [
      {
        to: "https://adwise.fiu.edu/cryptocurrency-artifact-detection-on-android-devices",
        label: "Project Summary",
      },
      {
        to: "https://link.springer.com/epdf/10.1007/978-3-031-36574-4_7?sharing_token=DzSKRzaFn_JeKy4PS86BsPe4RwlQNchNByi7wbcMAY5wcJpX9ryqMX2hxSYBG7q_LZ9xGJrVAn62PP5B5JlDqEjO-T4MocUISifLY15qLQdSaB4M3tvUixR7XfICY9lNVxlJhgTxtsgCwsiIanFNTIk9K25_IyI_j1QHTpCzqow%3D",
        label: "Research Paper",
      },
      {
        to: "https://patents.google.com/patent/US11755958B1/en?oq=11755958",
        label: "Patent for process",
      },
    ],
    logo: Assets.Tensorflow,
    period: {
      from: new Date(2023, 9),
      to: new Date(2024, 2),
    },
    skills: getSkills("python", "tensorflow", "kivy"),
    type: "AI/ML",
  },
  {
    slug: "jeffs-easy-bank",
    name: "ShellHacks 2023 | Jeff's Easy Bank",
    color: "lightblue",
    shortDescription:
      "Web app which visualizes bank account spending and income over time",
    description: `Web app which visualizes bank account spending and income over time.`,
    links: [
      {
        to: "https://shellhacks.vercel.app/",
        label: "Website",
      },
      {
        to: "https://github.com/luis-c465/shellhacks",
        label: "Github",
      },
    ],
    logo: Assets.NextJS,
    period: {
      from: new Date(2023, 9, 0),
      to: new Date(2023, 9, 3),
    },
    skills: getSkills("js", "ts", "nextjs", "reactjs", "tailwind"),
    type: "Website",
  },
];

export default MY_PROJECTS;
