
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessIcon from "../components/SuccessIcon";

const Success = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a slight delay
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div
        className={`w-1/2 p-8 bg-white rounded-lg shadow-lg text-center transform transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <SuccessIcon />
        <h1 className="text-3xl font-semibold text-green-500 mb-4 animate-fadeIn">
          Success!
        </h1>
        <p className="text-gray-700 mb-6">
          Your submission has been received. Thank you!
        </p>

        <button
          onClick={handleBackToHome}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
