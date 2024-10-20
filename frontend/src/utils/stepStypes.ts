import { Profile } from "../types/profile";

interface StepStyles {
  bgColor: string;
  textColor: string;
  lineColor: string;
}

export const getStepStyles = (
  stepKey: string,
  profile: Profile,
  currentStepKey: string
): StepStyles => {
  if (profile[stepKey as keyof Profile]) {
    // Completed step
    return {
      bgColor: "bg-green-500",
      textColor: "text-white",
      lineColor: "bg-green-500",
    };
  }

  if (stepKey === currentStepKey) {
    // Current step
    return {
      bgColor: "bg-blue-500",
      textColor: "text-white",
      lineColor: "bg-blue-500",
    };
  }

  // Upcoming step
  return {
    bgColor: "bg-gray-300",
    textColor: "text-gray-500",
    lineColor: "bg-gray-300",
  };
};
