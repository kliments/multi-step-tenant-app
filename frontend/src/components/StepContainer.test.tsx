import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import StepContainer from "./StepContainer";

// Mocking the necessary modules
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const mockUpdateProfile = jest.fn();
// Create a mock for the store
jest.mock("../stores/useProfileStore", () => () => ({
  ...jest.requireActual("../stores/useProfileStore"),
  updateProfile: mockUpdateProfile,
}));


const validationFn = (value: string) => {
  if (value === "") return "Field is required";
  return "";
};

// Test suite
describe("StepContainer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders text input", () => {
    render(
      <StepContainer
        keyProp="name"
        title="Please enter your full name"
        defaultValue=""
        inputType="text"
        validationFn={validationFn}
        nextPath="/next"
      />
    );

    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("handles valid input and navigates to the next path", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(
      <StepContainer
        keyProp="name"
        title="Please enter your full name"
        defaultValue=""
        inputType="text"
        validationFn={validationFn}
        nextPath="/next"
        placeholder="John Doe"
      />
    );

    const input = screen.getByPlaceholderText("John Doe");
    fireEvent.change(input, { target: { value: "John Doe" } });
    fireEvent.click(screen.getByText("Next"));

    expect(mockUpdateProfile).toHaveBeenCalledWith({ name: "John Doe" });
    expect(mockNavigate).toHaveBeenCalledWith("/next");
  });

  test("shows validation error for empty input", () => {
    render(
      <StepContainer
        keyProp="name"
        title="Please enter your full name"
        defaultValue=""
        inputType="text"
        validationFn={validationFn}
        nextPath="/next"
        placeholder="John Doe"
      />
    );

    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByText("Field is required")).toBeInTheDocument();
  });

  test("renders radio buttons", () => {
    render(
      <StepContainer
        keyProp="salary"
        title="Select your salary range"
        defaultValue=""
        inputType="radio"
        options={["0 - 1.000", "1.000 - 2.000", "2.000 - 3.000"]}
        validationFn={validationFn}
        nextPath="/next"
      />
    );

    expect(screen.getByText("Select your salary range")).toBeInTheDocument();
    expect(screen.getByLabelText("0 - 1.000")).toBeInTheDocument();
    expect(screen.getByLabelText("1.000 - 2.000")).toBeInTheDocument();
    expect(screen.getByLabelText("2.000 - 3.000")).toBeInTheDocument();
  });

  test("handles radio button selection and navigates to the next path", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(
      <StepContainer
        keyProp="salary"
        title="Select your salary range"
        defaultValue=""
        inputType="radio"
        options={["0 - 1.000", "1.000 - 2.000", "2.000 - 3.000"]}
        validationFn={validationFn}
        nextPath="/next"
      />
    );

    fireEvent.click(screen.getByLabelText("1.000 - 2.000"));
    fireEvent.click(screen.getByText("Next"));

    expect(mockUpdateProfile).toHaveBeenCalledWith({ salary: "1.000 - 2.000" });
    expect(mockNavigate).toHaveBeenCalledWith("/next");
  });
});
