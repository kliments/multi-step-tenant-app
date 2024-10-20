import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a slight delay
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div
        className={`text-center p-8 bg-white rounded-lg shadow-lg transform transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <h1 className="text-6xl font-bold text-blue-500 mb-4 animate-fadeIn">
          404
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>

        <button
          onClick={handleGoBack}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
