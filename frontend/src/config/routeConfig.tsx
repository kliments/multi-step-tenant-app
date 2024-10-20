import { ReactElement } from "react";
import Welcome from "../pages/Welcome";
import Success from "../pages/Success";
import Name from "../pages/steps/Name";
import Email from "../pages/steps/Email";
import PhoneNumber from "../pages/steps/PhoneNumber";
import Income from "../pages/steps/Income";
import Summary from "../pages/steps/Summary";

interface RouteConfig {
  path: string;
  element: ReactElement;
  showStepper: boolean;
}

export const routeConfig: RouteConfig[] = [
  { path: "/", element: <Welcome />, showStepper: false },
  { path: "/success", element: <Success />, showStepper: false },
  { path: "/profile/name/", element: <Name />, showStepper: true },
  { path: "/profile/email/", element: <Email />, showStepper: true },
  { path: "/profile/phone/", element: <PhoneNumber />, showStepper: true },
  { path: "/profile/income/", element: <Income />, showStepper: true },
  { path: "/profile/summary/", element: <Summary />, showStepper: true },
];
