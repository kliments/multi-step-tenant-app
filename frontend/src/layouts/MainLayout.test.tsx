import { render, screen } from "@testing-library/react";
import { MemoryRouter, } from "react-router-dom";
import MainLayout from "./MainLayout";

jest.mock("./Header", () => () => <div>Header</div>);
jest.mock("./StepperBar", () => () => <div>StepperBar</div>);
jest.mock("./Container", () => () => <div>Container</div>);

describe("MainLayout", () => {
  it("renders Header and Container", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Container")).toBeInTheDocument();
  });

  it("does not render StepperBar when current route does not show stepper", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.queryByText("StepperBar")).not.toBeInTheDocument();
    expect(screen.getByText("Container")).toBeInTheDocument();
  });

  it("renders StepperBar when current route shows stepper", () => {
    render(
      <MemoryRouter initialEntries={["/profile/name/"]}>
        <MainLayout />
      </MemoryRouter>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("StepperBar")).toBeInTheDocument();
    expect(screen.getByText("Container")).toBeInTheDocument();
  });
});
