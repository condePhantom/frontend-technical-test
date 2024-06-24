import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Program } from "../../../types/types";
import DisplayPrograms, { DisplayProgramsProps } from "./DisplayPrograms";
import { MemoryRouter } from "react-router-dom";

describe("DisplayPrograms component", () => {
  const programs: Program[] = [
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
  ];

  const paginator = {
    programsPerPage: 5,
    handleProgramsPerPageChange: jest.fn(),
    currentPage: 1,
    handlePageChange: jest.fn(),
    count: 2,
  };

  const props: DisplayProgramsProps = { programs, paginator };

  it("renders DisplayCardList correctly", () => {
    render(
      <MemoryRouter>
        <DisplayPrograms {...props} />
      </MemoryRouter>
    );

    const programTitle = programs[0].title;
    fireEvent.click(screen.getByText(programTitle));

    const releseYear = screen.getByText(/2010/i);
    expect(releseYear).toBeInTheDocument();

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(releseYear).not.toBeInTheDocument();
  });
});
