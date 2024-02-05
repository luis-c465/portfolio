import Assets from "./data/assets";
import type { Skill } from "./types";

export type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS: Skill[] = [
  {
    slug: "js",
    color: "yellow",
    description: `3 years experience with Javascript

		Very comfortable using in both older server side frameworks like Django and newer ones like Next JS
		`,
    logo: Assets.JavaScript,
    name: "Javascript",
  },
  {
    slug: "ts",
    color: "blue",
    description: `2 years experience with Typescript

		Very comfortable using both for writing application code & types as well as library code
		`,
    logo: Assets.TypeScript,
    name: "Typescript",
  },
  {
    slug: "css",
    color: "blue",
    description: `3 years experience with CSS

		Very comfortable using with standard stylesheets, inline styles, as well as with TailWindCSS`,
    logo: Assets.CSS,
    name: "CSS",
  },
  {
    slug: "html",
    color: "orange",
    description: "3 years experience with HTML",
    logo: Assets.HTML,
    name: "HTML",
  },
  {
    slug: "tailwind",
    color: "cyan",
    description: "1 year experience with Tailwind CSS",
    logo: Assets.Tailwind,
    name: "Tailwind CSS",
  },
  {
    slug: "reactjs",
    color: "cyan",
    description: `2 Years experience with React.JS

			Very comfortable with functional component style, creating react hooks,
			managing state / contexts, and server side integrations`,
    logo: Assets.ReactJs,
    name: "React Js",
  },
  {
    slug: "expo",
    color: "gray",
    description: `1 Year experience with Expo

			Very comfortable scaffolding projects &
			creating mobile apps using the Expo ecosystem`,
    logo: Assets.Expo,
    name: "Expo & React Native",
  },
  {
    slug: "svelte",
    color: "orange",
    description: `2 Years experience with Svelte

		Comfortable with the 'Svelte way' of doing things.
		Used instead of React.js because of it's lower bundle size.
		`,
    logo: Assets.Svelte,
    name: "Svelte",
  },
  {
    slug: "django",
    color: "lime",
    description: `2 Years experience with Django

		Very comfortable using to create full stack websites with data storage & authentication.
		`,
    logo: Assets.Django,
    name: "Django",
  },
  {
    slug: "arduino",
    color: "cyan",
    description: `2 Years experience with Arduino

		Very comfortable both Programming the Microcontroller using Arduino IDE v2 & creating &
		creating small electronics.
		`,
    logo: Assets.Arduino,
    name: "Arduino",
  },
  {
    slug: "tensorflow",
    color: "orange",
    description: `1 Year experience with Tensorflow

		Very comfortable using to create & train Maching Learning models
		Have used to create Reinforcement Learning & Supervised Learning
		`,
    logo: Assets.Tensorflow,
    name: "Tensorflow",
  },
  {
    slug: "pytorch",
    color: "orange",
    description: `1 Year experience with Pytorch

		Very comfortable using to create & train Maching Learning models
		Have used to create Reinforcement Learning & Supervised Learning
		`,
    logo: Assets.Pytorch,
    name: "Pytorch",
  },
  {
    slug: "python",
    color: "yellow",
    description: `3 Years experience with Python

		Very comfortable using to create small scripts for company utilities &
		to scaffold entire applications spanning 3000 lines

		Knowledgeable about both the strengths (readability) & weaknesses (speed) of python
		and when it is most applicable to use over another technology
		`,
    logo: Assets.Python,
    name: "Python",
  },
  {
    slug: "kivy",
    color: "black",
    description: `1 Year experience with Kivy

		Very comfortable using to create small python GUI applications
		& to scaffold GUI's for research projects
		`,
    logo: Assets.Kivy,
    name: "Kivy",
  },
  {
    slug: "java",
    color: "red",
    description: `2 Years experience with Java

		Very comfortable using to create enterprise grade applications
		& to complete programming assignments
		`,
    logo: Assets.Java,
    name: "Java",
  },
  {
    slug: "processing",
    color: "blue",
    description: `2 Years experience with Processing

		Very comfortable using to create visual and interactive programs.
    Have used to create entire GUI's for Java applications & simulate physics.
		`,
    logo: Assets.Processing,
    name: "Processing",
  },
  {
    slug: "p5js",
    color: "red",
    description: `2 Years experience with P5.js

		Very comfortable using to create visual and interactive javascript programs.
    Have used to quickly demonstrate programming ideas like color & transitions.
		`,
    logo: Assets.P5JS,
    name: "P5JS",
  },
  {
    slug: "autodesk",
    color: "white",
    description: `4 Years experience with Autodesk software
		`,
    logo: Assets.Autodesk,
    name: "AutoDesk",
  },
  {
    slug: "fusion360",
    color: "orange",
    description: `2 Years experience with Autodesk Fusion 360
    Currently certified

    Very comfortable using to design parts both to be 3D printed,
    and to design.
		`,
    logo: Assets.Fusion360,
    name: "Fusion 360",
  },
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
  MY_SKILLS.filter((it) => slugs.includes(it.slug));
