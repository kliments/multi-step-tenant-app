import React from "react";
import useProfileStore from "../stores/useProfileStore";
import { steps } from "../config/stepConfig";
import { useNavigate } from "react-router-dom";

const StepperBar = () => {
  const { profile } = useProfileStore();
  const navigate = useNavigate();

  const getStatus = (value: string | undefined) => {
    return value ? "bg-black" : "bg-gray-300";
  };

  return (
    <div className="flex items-center justify-center w-full max-w-5xl px-4 py-6 mx-auto">
      {steps.map(({ key, label, step }) => (
        <React.Fragment key={key}>
          <div
            className="flex items-center space-x-2 flex-grow text-center cursor-pointer mr-4"
            onClick={() => navigate(`/profile/${key}/`)}
          >
            <div
              className={`w-8 h-8 rounded-full ${
                key === "summary" ? "bg-gray-300" : getStatus(profile[key])
              } flex items-center justify-center ${
                key === "summary"
                  ? "text-gray-500"
                  : profile[key]
                  ? "text-white"
                  : "text-gray-500"
              } font-bold`}
            >
              {step}
            </div>
            <div className="text-sm font-semibold flex-grow">{label}</div>
            {step < steps.length && (
              <div
                className={`w-24 h-1 ${
                  key === "summary" ? "bg-gray-300" : getStatus(profile[key])
                }`}
              />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepperBar;
