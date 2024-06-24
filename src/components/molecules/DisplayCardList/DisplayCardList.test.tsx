import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DisplayCardList, { DisplayCardListProps } from "./DisplayCardList";

describe("DisplayCardList Component", () => {
  it("renders the component for displaycard list", () => {
    const props: DisplayCardListProps = {
      onClick: jest.fn(),
      programs: [
        {
          title: "Rake",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "series",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2010,
        },
        {
          title: "30 Rock",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "series",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/532/30/53230-PosterArt-df844c976b27c518d83c2707e79b4685.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2006,
        },
      ],
    };
    render(
      <MemoryRouter>
        <DisplayCardList {...props} />
      </MemoryRouter>
    );

    const titleMovie1 = screen.getByText(/30 Rock/i);
    expect(titleMovie1).toBeInTheDocument();

    const titleMovie2 = screen.getByText(/Rake/i);
    expect(titleMovie2).toBeInTheDocument();

    const cardElement = screen.getAllByRole("link");
    cardElement[0].click();

    expect(props.onClick).toHaveBeenCalled();
  });
});
