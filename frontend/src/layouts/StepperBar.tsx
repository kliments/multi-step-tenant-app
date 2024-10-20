import React from "react";
import useProfileStore from "../stores/useProfileStore";
import { steps } from "../config/stepConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { getStepStyles } from "../utils/stepStypes";

const StepperBar = () => {
  const { profile } = useProfileStore();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the current step from the URL path
  const currentStepKey = steps.find((step) =>
    location.pathname.includes(step.key)
  )?.key;

  return (
    <div className="flex items-center justify-center w-full max-w-5xl px-4 py-6 mx-auto">
      {steps.map(({ key, label, step }) => {
        const { bgColor, textColor, lineColor } = getStepStyles(
          key,
          profile,
          currentStepKey!
        );
        return (
          <React.Fragment key={key}>
            <div
              className="flex items-center space-x-2 flex-grow text-center cursor-pointer mr-4"
              onClick={() => navigate(`/profile/${key}/`)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ease-in-out transform ${
                  key === currentStepKey
                    ? "border-4 border-blue-500 scale-110"
                    : ""
                } ${bgColor} ${textColor}`}
              >
                {step}
              </div>
              <div
                className={`text-sm font-semibold flex-grow transition-all ${
                  key === currentStepKey ? "text-blue-500" : ""
                }`}
              >
                {label}
              </div>
              {step < steps.length && (
                <div className={`w-24 h-1 transition-all ${lineColor}`} />
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepperBar;
