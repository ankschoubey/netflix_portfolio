// queries/getProjects.ts
import { Project } from "../types";

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  // static data for now
  return [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      techUsed: "React, TypeScript, CSS",
      image: {
        url: "https://example.com/portfolio.png",
      },
    },
    {
      title: "E-commerce Platform",
      description: "An online platform for buying and selling products.",
      techUsed: "Node.js, Express, MongoDB",
      image: {
        url: "https://example.com/ecommerce.png",
      },
    },
  ];
}
