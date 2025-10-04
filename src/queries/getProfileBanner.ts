// queries/getProfileBanner.ts
import datoCMSClient from "./datoCMSClient";
import { ProfileBanner } from "../types";

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  // static data for now
  return {
    backgroundImage: {
      url: "https://example.com/background.jpg",
    },
    headline: "Welcome to My Portfolio",
    resumeLink: {
      url: "https://example.com/resume.pdf",
    },
    linkedinLink: "https://www.linkedin.com/in/example",
    profileSummary:
      "This is a brief summary about me. I am passionate about web development and love creating beautiful and functional websites.",
  };
}
