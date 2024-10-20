import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProfileStore from "../../stores/useProfileStore";

const Name = () => {
  const navigate = useNavigate();
  const { profile, updateProfile } = useProfileStore();
  const [name, setName] = useState(profile.name);
  const [error, setError] = useState("");

  const validateName = () => {
    if (name.length < 2) {
      setError("Please add at least 2 characters");
    } else {
      setError("");
      updateProfile({ name });
      navigate(`/profile/email/`);
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-1/3 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Enter your full name
          </h1>

          <div className="flex flex-col">
            <input
              type="text"
              defaultValue={profile.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              autoFocus
              className="p-3 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={validateName}
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

export default Name;
