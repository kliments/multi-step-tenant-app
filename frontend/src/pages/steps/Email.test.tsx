import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Email from "./Email";
import * as validators from "../../utils/validators";

const mockUpdateProfile = jest.fn();
const mockProfile = { email: "test@example.com" };
jest.mock("../../stores/useProfileStore", () => () => ({
  ...jest.requireActual("../../stores/useProfileStore"),
  profile: mockProfile,
  updateProfile: mockUpdateProfile,
}));

describe("Email Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the email input with the correct default value", () => {
    render(
      <MemoryRouter>
        <Email />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Please enter your email address")
    ).toBeInTheDocument();
    const input = screen.getByPlaceholderText("email");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(mockProfile.email);
  });

  it("validates the email input and shows an error for invalid input", async () => {
    const validateEmailSpy = jest.spyOn(validators, "validateEmail");

    render(
      <MemoryRouter>
        <Email />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("email");
    fireEvent.change(input, { target: { value: "invalid-email" } });

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(validateEmailSpy).toHaveBeenCalledWith("invalid-email");
    });

    validateEmailSpy.mockRestore();
  });

  it("handles valid email input and updates profile on next", async () => {
    render(
      <MemoryRouter>
        <Email />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("email");
    fireEvent.change(input, { target: { value: "new-email@example.com" } });

    // Simulate clicking the next button (you'll need to ensure the button exists in your StepContainer)
    fireEvent.click(screen.getByText("Next"));

    // Expect the updateProfile to have been called with the new email
    await waitFor(() => {
      expect(mockUpdateProfile).toHaveBeenCalledWith({
        email: "new-email@example.com",
      });
    });
  });

  it("shows validation error for empty input", async () => {
    render(
      <MemoryRouter>
        <Email />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("email");
    fireEvent.change(input, { target: { value: "" } });
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    // Check for the validation error message (adjust according to how errors are displayed)
    expect(
      screen.getByText("Please enter a valid email address")
    ).toBeInTheDocument();
  });
});
