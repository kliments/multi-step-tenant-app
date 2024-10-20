import { useNavigate } from "react-router-dom";
import useProfileStore from "../../stores/useProfileStore";

const Summary = () => {
  const navigate = useNavigate();
  const { profile } = useProfileStore();

  const handleSubmit = () => {
    // TODO: Handle form submission, making an API call
    navigate("/success"); // Redirect to a success page after submission
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Review your details
          </h1>

          <div className="flex flex-col mb-4 space-y-2">
            <p>
              <strong>Full Name:</strong> {profile.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {profile.email || "N/A"}
            </p>
            <p>
              <strong>Phone Number:</strong> {profile.phone || "N/A"}
            </p>
            <p>
              <strong>Income Range:</strong> {profile.income || "N/A"}
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
