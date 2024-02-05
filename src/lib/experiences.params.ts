import Assets from "./data/assets";
import { getSkills } from "./skills.params";
import { ContractType, type Experience } from "./types";

const MY_EXPERIENCES: Array<Experience> = [
  {
    slug: "website-assistant",
    company: "FIU",
    description: "Maintained website for research lab & assisted with research",
    contract: ContractType.PartTime,
    type: "Website Development",
    location: "FIU Engineering Campus",
    period: { from: new Date(2022, 6), to: new Date(2023, 8) },
    skills: getSkills("ts", "js", "wordpress"),
    name: "Website Maintainer",
    color: "blue",
    links: [
      { label: "ADWISE Lab", to: "https://adwise.fiu.edu/", newTab: true },
    ],
    logo: Assets.Wordpress,
    shortDescription: "",
  },
  {
    slug: "don-tile",
    company: "Don Tile Cuban Plumbing",
    description:
      "Created static website advertising companies offerings, location, & name",
    contract: ContractType.SelfEmployed,
    type: "Website Development",
    location: "Home",
    period: { from: new Date(2022, 11), to: new Date(2023, 2) },
    skills: getSkills("html", "css", "tailwind", "firebase"),
    name: "Created Website",
    color: "blue",
    links: [
      {
        label: "Don Tile",
        to: "https://dontileplumbing.com/",
        newTab: true,
      },
    ],
    logo: Assets.HTML,
    shortDescription: "",
  },
  {
    slug: "pier-agent",
    company: "SMS International",
    description: "Checked in Guests into cruise ship",
    contract: ContractType.PartTime,
    type: "Customer Service",
    location: "Miami Beach",
    period: { from: new Date(2023, 4), to: new Date(2023, 6) },
    skills: getSkills(),
    name: "Pier Agent",
    color: "cyan",
    links: [],
    logo: Assets.Unknown,
    shortDescription: "",
  },
];

export default MY_EXPERIENCES;
