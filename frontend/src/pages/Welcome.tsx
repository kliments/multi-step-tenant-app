import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <strong>Welcome to Buena. </strong>
        </h2>
        <h5 className="text-lg mb-8 text-center">
          Let's begin by entering your details to find your ideal apartment!
        </h5>
        <div className="mt-10">
          <Link to="/profile/name/" className="inline-block">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Start here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
