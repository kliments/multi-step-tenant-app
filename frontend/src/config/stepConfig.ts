import { Profile } from "../types/profile";

export interface Step {
  key: keyof Profile | "summary";
  label: string;
  step: number;
}

export const steps: Step[] = [
  { key: "name", label: "Name", step: 1 },
  { key: "email", label: "Email", step: 2 },
  { key: "phone", label: "Phone Number", step: 3 },
  { key: "income", label: "Income", step: 4 },
  { key: "summary", label: "Summary", step: 5 },
];
