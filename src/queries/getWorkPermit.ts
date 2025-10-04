// queries/getWorkPermit.ts
import datoCMSClient from "./datoCMSClient";
import { WorkPermit } from "../types";

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  // static data for now
  return {
    visaStatus: "H1B",
    expiryDate: new Date("2025-12-31"),
    summary:
      "Authorized to work in the U.S. on an H1B visa sponsored by my current employer.",
    additionalInfo:
      "Open to opportunities with employers willing to sponsor H1B visa transfers.",
  };
}
