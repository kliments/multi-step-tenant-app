import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="flex-grow container mx-auto px-5 max-w-4xl">
      <Outlet />
    </div>
  );
};

export default Container;