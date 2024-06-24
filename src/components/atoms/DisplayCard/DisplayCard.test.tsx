import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CategoryCard from "./DisplayCard";

describe("CategoryCard Component", () => {
  it("renders the component for category", () => {
    const props = {
      image:
        "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
      label: "Movies Label",
      title: "Popular Movies Title",
      url: "/home",
    };
    render(
      <MemoryRouter>
        <CategoryCard {...props} />
      </MemoryRouter>
    );

    const label = screen.getByText(/Movies Label/i);
    expect(label).toBeInTheDocument();

    const title = screen.getByText(/Popular Movies Title/i);
    expect(title).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/home");
  });

  it("call the onclick function when the card is clicked", () => {
    const props = {
      image: "test-image.jpg",
      title: "Test Title",
      onClick: jest.fn(),
    };
    render(
      <MemoryRouter>
        <CategoryCard {...props} />
      </MemoryRouter>
    );

    const cardElement = screen.getByRole("link");
    cardElement.click();

    expect(props.onClick).toHaveBeenCalled();
  });
});
