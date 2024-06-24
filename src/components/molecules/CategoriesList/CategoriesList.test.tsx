import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoriesList, { CategoriesListProps } from "./CategoriesList";

describe("CategoryList Component", () => {
  it("renders the component for categories", () => {
    const props: CategoriesListProps = {
      categories: [
        {
          label: "Movies Label",
          title: "Popular Movies Title",
          url: "/movies",
        },
        {
          label: "Series Label",
          title: "Popular Series Title",
          url: "/series",
        },
      ],
    };

    render(
      <MemoryRouter>
        <CategoriesList {...props} />
      </MemoryRouter>
    );

    const labelMovies = screen.getByText(/Movies Label/i);
    expect(labelMovies).toBeInTheDocument();

    const seriesMovies = screen.getByText(/Series Label/i);
    expect(seriesMovies).toBeInTheDocument();

    const titleMovies = screen.getByText(/Popular Movies Title/i);
    expect(titleMovies).toBeInTheDocument();

    const titleSeries = screen.getByText(/Popular Series Title/i);
    expect(titleSeries).toBeInTheDocument();
  });
});
