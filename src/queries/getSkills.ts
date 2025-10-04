// queries/getTimeline.ts
import { Skill } from "../types";

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  // static data for now
  return [
    {
      name: "JavaScript",
      category: "Programming Language",
      description:
        "A versatile programming language primarily used for web development.",
      icon: "🟨",
    },
  ];
}
