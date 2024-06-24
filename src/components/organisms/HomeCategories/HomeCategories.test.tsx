import React from "react";
import { render, screen } from "@testing-library/react";
import HomeCategories from "./HomeCategories";
import { MemoryRouter } from "react-router-dom";

describe("HomeCategories Component", () => {
  it("renders the component correctly", () => {
    render(
      <MemoryRouter>
        <HomeCategories />
      </MemoryRouter>
    );
    const labelMovies = screen.getByText("MOVIES");
    expect(labelMovies).toBeInTheDocument();

    const seriesMovies = screen.getByText("SERIES");
    expect(seriesMovies).toBeInTheDocument();

    const titleMovies = screen.getByText(/Popular Movies/i);
    expect(titleMovies).toBeInTheDocument();

    const titleSeries = screen.getByText(/Popular Series/i);
    expect(titleSeries).toBeInTheDocument();
  });
});
