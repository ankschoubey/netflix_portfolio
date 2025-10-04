// queries/getContactMe.ts
import datoCMSClient from "./datoCMSClient";
import { ContactMe } from "../types";

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  // static data for now
  return {
    profilePicture: {
      url: "https://example.com/profile.jpg",
    },
    name: "John Doe",
    title: "Software Developer",
    summary:
      "Passionate developer with experience in building web applications.",
    companyUniversity: "Tech University",
    linkedinLink: "https://www.linkedin.com/in/johndoe",
    email: "bhai@bhai.com",
    phoneNumber: "+1234567890",
  };
}
