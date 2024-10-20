import Spinner from "../../components/Spinner";
import useProfileStore from "../../stores/useProfileStore";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const { profile, submitProfile, loading, error } = useProfileStore();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await submitProfile();
    if (!error) {
      navigate("/success");
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Review and Submit Your Profile
        </h1>
        <ul className="mb-4">
          <li>Name: {profile.name}</li>
          <li>Email: {profile.email}</li>
          <li>Phone: {profile.phone}</li>
          <li>Income: {profile.income}</li>
        </ul>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 transform ${
              loading ? "" : "hover:scale-105 hover:shadow-xl"
            } focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center justify-center`}
            disabled={loading}
          >
            {loading ? (
              <Spinner />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
