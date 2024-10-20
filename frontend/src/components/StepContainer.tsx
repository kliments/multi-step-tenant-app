// StepContainer.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProfileStore from "../stores/useProfileStore";

interface StepContainerProps {
  keyProp: string;
  title: string;
  defaultValue: string;
  placeholder: string;
  inputType: string;
  validationFn: (input: string) => string;
  nextPath: string;
}

const StepContainer = ({
  keyProp,
  title,
  defaultValue,
  placeholder,
  inputType,
  validationFn,
  nextPath,
}: StepContainerProps) => {
  const navigate = useNavigate();
  const { updateProfile } = useProfileStore();
  const [inputValue, setInputValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const validateInput = () => {
    const errorMessage = validationFn(inputValue);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
      updateProfile({ [keyProp]: inputValue });
      navigate(nextPath);
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h1>

          <div className="flex flex-col">
            <input
              type={inputType}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder}
              autoFocus
              className="p-3 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={validateInput}
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
