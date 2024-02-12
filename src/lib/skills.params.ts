import Assets from "./data/assets";
import arduino from "./md/arduino.md?raw";
import css from "./md/css.md?raw";
import django from "./md/django.md?raw";
import expo from "./md/expo.md?raw";
import java from "./md/java.md?raw";
import js from "./md/js.md?raw";
import kivy from "./md/kivy.md?raw";
import processing from "./md/processing.md?raw";
import python from "./md/python.md?raw";
import pytorch from "./md/pytorch.md?raw";
import react from "./md/react.md?raw";
import svelte from "./md/svelte.md?raw";
import tw from "./md/tailwind.md?raw";
import tensorflow from "./md/tensorflow.md?raw";
import { default as html, default as ts } from "./md/ts.md?raw";
import type { Skill } from "./types";

export type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS: Skill[] = [
  {
    slug: "js",
    color: "yellow",
    description: js,
    logo: Assets.JavaScript,
    name: "Javascript",
    types: ["frontend"],
    experience: 3,
  },
  {
    slug: "ts",
    color: "blue",
    description: ts,
    logo: Assets.TypeScript,
    name: "Typescript",
    types: ["frontend"],
    experience: 3,
  },
  {
    slug: "css",
    color: "blue",
    description: css,
    logo: Assets.CSS,
    name: "CSS",
    types: ["frontend"],
    experience: 3,
  },
  {
    slug: "html",
    color: "orange",
    description: html,
    logo: Assets.HTML,
    name: "HTML",
    types: ["frontend"],
    experience: 3,
  },
  {
    slug: "tailwind",
    color: "cyan",
    description: tw,
    logo: Assets.Tailwind,
    name: "Tailwind CSS",
    types: ["frontend"],
    experience: 1,
  },
  {
    slug: "reactjs",
    color: "cyan",
    description: react,
    logo: Assets.ReactJs,
    name: "React Js",
    types: ["frontend"],
    experience: 2,
  },
  {
    slug: "expo",
    color: "gray",
    description: expo,
    logo: Assets.Expo,
    name: "Expo & React Native",
    types: ["frontend"],
    experience: 1,
  },
  {
    slug: "svelte",
    color: "orange",
    description: svelte,
    logo: Assets.Svelte,
    name: "Svelte",
    types: ["frontend"],
    experience: 2,
  },
  {
    slug: "django",
    color: "lime",
    description: django,
    logo: Assets.Django,
    name: "Django",
    types: ["backend"],
    experience: 2,
  },
  {
    slug: "arduino",
    color: "cyan",
    description: arduino,
    logo: Assets.Arduino,
    name: "Arduino",
    types: ["robotics"],
    experience: 2,
  },
  {
    slug: "tensorflow",
    color: "orange",
    description: tensorflow,
    logo: Assets.Tensorflow,
    name: "Tensorflow",
    experience: 1,
    types: ["AI"],
  },
  {
    slug: "pytorch",
    color: "orange",
    description: pytorch,
    logo: Assets.Pytorch,
    name: "Pytorch",
    experience: 1,
    types: ["AI"],
  },
  {
    slug: "python",
    color: "yellow",
    description: python,
    logo: Assets.Python,
    name: "Python",
    experience: 3,
    types: ["frontend", "backend", "AI"],
  },
  {
    slug: "kivy",
    color: "black",
    description: kivy,
    logo: Assets.Kivy,
    name: "Kivy",
    experience: 1,
    types: ["frontend"],
  },
  {
    slug: "java",
    color: "red",
    description: java,
    logo: Assets.Java,
    name: "Java",
    experience: 2,
    types: ["backend"],
  },
  {
    slug: "processing",
    color: "blue",
    description: processing,
    logo: Assets.Processing,
    name: "Processing",
    experience: 2,
    types: ["frontend"],
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
    experience: 2,
    types: ["frontend"],
  },
  {
    slug: "autodesk",
    color: "white",
    description: `4 Years experience with Autodesk software
		`,
    logo: Assets.Autodesk,
    name: "AutoDesk",
    experience: 4,
    types: ["design"],
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
    experience: 2,
    types: ["design"],
  },
  {
    slug: "wordpress",
    color: "black",
    description: `1 Year experience with Wordpress

    Comfortable using to design web pages, managing plugins, &
    adding custom functionality
		`,
    logo: Assets.Wordpress,
    name: "Wordpress",
    experience: 1,
    types: ["frontend"],
  },
  {
    slug: "firebase",
    color: "orange",
    description: `2 Years experience with Firebase

    Very comfortable using to manage data storage, authentication, & hosting
		`,
    logo: Assets.Firebase,
    name: "Firebase",
    experience: 2,
    types: ["cloud"],
  },
  {
    slug: "selenium",
    color: "green",
    description: `Light experience with Selenium

    Comfortable using to do integration tests on Full Stack frameworks &
    for advanced web scraping
		`,
    logo: Assets.Selenium,
    name: "Selenium",
    experience: "Light",
    types: ["backend"],
  },
  {
    slug: "nextjs",
    color: "white",
    description: `2 Years experience with Next.JS

    Very comfortable using to create static and dynamic
    React based websited
		`,
    logo: Assets.NextJS,
    name: "NextJS",
    experience: 2,
    types: ["frontend"],
  },
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
  MY_SKILLS.filter((it) => slugs.includes(it.slug));
