import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  it("renders the Header correctly", () => {
    render(
      <MemoryRouter>
        <Header title="Test title" />
      </MemoryRouter>
    );

    const appbar = screen.getByRole("banner");
    expect(appbar).toBeInTheDocument();

    const title = screen.getByText(/Test title/i);
    expect(title).toBeInTheDocument();

    const demoTitle = screen.getAllByText(/DEMO Streaming/i);
    expect(demoTitle).toHaveLength(2);
  });
});
