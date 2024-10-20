import { routeConfig } from "./routeConfig"; // Adjust the import based on your file structure
import Welcome from "../pages/Welcome";
import Success from "../pages/Success";
import Name from "../pages/steps/Name";
import Email from "../pages/steps/Email";
import PhoneNumber from "../pages/steps/PhoneNumber";
import Income from "../pages/steps/Income";
import Summary from "../pages/steps/Summary";

describe("routeConfig", () => {
  it("should have the correct routes defined", () => {
    const expectedRoutes = [
      { path: "/", element: <Welcome />, showStepper: false },
      { path: "/success", element: <Success />, showStepper: false },
      { path: "/profile/name/", element: <Name />, showStepper: true },
      { path: "/profile/email/", element: <Email />, showStepper: true },
      { path: "/profile/phone/", element: <PhoneNumber />, showStepper: true },
      { path: "/profile/income/", element: <Income />, showStepper: true },
      { path: "/profile/summary/", element: <Summary />, showStepper: true },
    ];

    expect(routeConfig).toHaveLength(expectedRoutes.length);

    expectedRoutes.forEach((route, index) => {
      expect(routeConfig[index]).toEqual(route);
    });
  });

  it("should have a showStepper property set correctly", () => {
    const routesWithStepper = routeConfig.filter(route => route.showStepper);
    const routesWithoutStepper = routeConfig.filter(route => !route.showStepper);

    expect(routesWithStepper).toHaveLength(5);
    expect(routesWithoutStepper).toHaveLength(2);
  });
});
