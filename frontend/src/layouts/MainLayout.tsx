import { useLocation } from "react-router-dom";
import Header from "./Header";
import StepperBar from "./StepperBar";
import Container from "./Container";
import { routeConfig } from "../config/routeConfig";

const MainLayout = () => {
  const location = useLocation();

  const currentRoute = routeConfig.find(
    (route) => route.path === location.pathname
  );

  return (
    <div className="h-screen flex flex-col">
      <Header />
      {currentRoute?.showStepper && <StepperBar />}
      <Container />
    </div>
  );
};

export default MainLayout;
