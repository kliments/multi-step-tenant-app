import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Name from "./steps/Name";

describe("Home Component", () => {
  it("renders the welcome message and button", () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );

    expect(screen.getByText(/Welcome to Buena/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Let's begin by entering your details to find your ideal apartment!/i
      )
    ).toBeInTheDocument();

    const startButton = screen.getByRole("button", { name: /Start here/i });
    expect(startButton).toBeInTheDocument();
  });

  it("navigates to the profile/name page on button click", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/profile/name/" element={<Name />} />{" "}
        </Routes>
      </MemoryRouter>
    );

    const startButton = screen.getByRole("button", { name: /Start here/i });
    fireEvent.click(startButton);

    expect(
      screen.getByText(/Please enter your full name/i)
    ).toBeInTheDocument();
  });
});
