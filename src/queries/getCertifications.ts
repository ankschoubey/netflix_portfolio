// queries/getCertifications.ts
import datoCMSClient from "./datoCMSClient";
import { Certification } from "../types";

const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  // static data for now
  return [
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      issuedDate: "March 2023",
      link: "https://www.linuxfoundation.org/certification/cka/",
      iconName: "kubernetes",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issuedDate: "January 2022",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      iconName: "aws",
    },
  ];
}
