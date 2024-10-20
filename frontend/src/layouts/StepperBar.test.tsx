import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import StepperBar from "./StepperBar";
import { steps } from "../config/stepConfig";

// Create a mock for the store
jest.mock("../stores/useProfileStore", () => () => ({
  ...jest.requireActual("../stores/useProfileStore"),
  profile: {},
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(() => mockNavigate),
}));

describe("StepperBar", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear any mock calls between tests
  });
  it("renders all steps", () => {
    render(
      <MemoryRouter initialEntries={["/profile/name/"]}>
        <StepperBar />
      </MemoryRouter>
    );

    steps.forEach(({ label, step }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(step.toString())).toBeInTheDocument();
    });
  });

  it("highlights the current step", () => {
    render(
      <MemoryRouter initialEntries={["/profile/email/"]}>
        <StepperBar />
      </MemoryRouter>
    );

    const currentStep = screen.getByText("2");
    expect(currentStep).toHaveClass("border-4 border-blue-500 scale-110");
  });

  it("navigates to the correct step on click", async () => {
    render(
      <MemoryRouter initialEntries={["/profile/name/"]}>
        <StepperBar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Email"));

    // Wait for any asynchronous operations to complete
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/profile/email/");
    });
  });
});
