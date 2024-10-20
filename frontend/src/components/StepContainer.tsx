import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProfileStore from "../stores/useProfileStore";

interface StepContainerProps {
  keyProp: string;
  title: string;
  defaultValue: string;
  inputType: string;
  options?: string[];
  validationFn: (value: string) => string;
  nextPath: string;
  placeholder?: string; // Optional for text inputs
}

const StepContainer = ({
  keyProp,
  title,
  defaultValue,
  inputType,
  options,
  validationFn,
  nextPath,
  placeholder,
}: StepContainerProps) => {
  const navigate = useNavigate();
  const { updateProfile } = useProfileStore();
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const handleNext = () => {
    const errorMessage = validationFn(value);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
      updateProfile({ [keyProp]: value });
      navigate(nextPath);
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h1>

          <div className="flex flex-col mb-4">
            {inputType === "radio" ? (
              options?.map((option, index) => (
                <label key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={keyProp}
                    value={option}
                    checked={value === option}
                    onChange={() => setValue(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))
            ) : (
              <div className="flex flex-col">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={placeholder}
                  className="p-3 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepContainer;
