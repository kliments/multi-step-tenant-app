import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("NotFound Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    jest.clearAllMocks();
  });

  it("renders NotFound component with correct content", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByText("Oops! The page you're looking for doesn't exist.")
    ).toBeInTheDocument();
  });

  it("navigates to home when Back to Home button is clicked", async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const backButton = screen.getByRole("button", { name: /Back to Home/i });
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
