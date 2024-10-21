import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Email from "./Email";
import * as validators from "../../utils/validators";
import profileMock from "../../mocks/data/profileStore.json";


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
    expect(input).toHaveValue(profileMock.email);
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
