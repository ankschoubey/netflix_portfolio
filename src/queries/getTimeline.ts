// queries/getTimeline.ts
import { TimelineItem } from "../types";

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  // static timeline data for now
  return [
    {
      name: "Company A",
      timelineType: "work",
      title: "Software Engineer",
      techStack: "React, Node.js, GraphQL",
      summaryPoints: [
        "Developed user-friendly web applications.",
        "Collaborated with cross-functional teams.",
        "Implemented RESTful APIs.",
      ],
      dateRange: "Jan 2020 - Present",
    },
  ];
}
