import Assets from "./data/assets";
import type { Education } from "./types";

export const MY_EDUCATIONS: Array<Education> = [
  {
    degree: "Bachelor degree of Computer Science",
    description: "",
    location: "Miami, FL",
    logo: Assets.FIU,
    name: "",
    organization: "Florida International University",
    period: { from: new Date(2023, 8, 0) },
    shortDescription: "Current Freshman, 3.9 GPA",
    slug: "college",
    subjects: ["Java", "Discrete Structures", "Calculus 2"],
    expectedGraduation: new Date(2027, 8, 0),
  },
  {
    degree: "High School Graduate",
    description: "",
    location: "Miami, FL",
    logo: Assets.TERRA,
    name: "",
    organization: "Terra Environmental Research Institute",
    period: { from: new Date(2019, 8, 6), to: new Date(2023, 6, 20) },
    shortDescription: "",
    slug: "high-school",
    subjects: [
      "Java",
      "Computer Science",
      "Calculus 1",
      "Fusion 360",
      "Engineering",
    ],
  },
];
