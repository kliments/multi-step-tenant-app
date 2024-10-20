import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

// Mock the logo import
jest.mock("../assets/icons/buena-logo.svg", () => "logo.svg");

describe("Header", () => {
  it("renders the logo and link to home", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check if the logo is rendered
    const logo = screen.getByAltText("Buena");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.svg");

    // Check if the link is present
    const homeLink = screen.getByRole("link");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
