import { steps } from "./stepConfig";
import { Profile } from "../types/profile";

describe("steps configuration", () => {
  it("should have the correct steps defined", () => {
    const expectedSteps = [
      { key: "name", label: "Name", step: 1 },
      { key: "email", label: "Email", step: 2 },
      { key: "phone", label: "Phone Number", step: 3 },
      { key: "income", label: "Income", step: 4 },
      { key: "summary", label: "Summary", step: 5 },
    ];

    expect(steps).toHaveLength(expectedSteps.length);

    expectedSteps.forEach((expectedStep, index) => {
      expect(steps[index]).toEqual(expectedStep);
    });
  });

  it("should contain valid keys", () => {
    const validKeys: (keyof Profile | "summary")[] = ["name", "email", "phone", "income", "summary"];
    steps.forEach(step => {
      expect(validKeys).toContain(step.key);
    });
  });
});
