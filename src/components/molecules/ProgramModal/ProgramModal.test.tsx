import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProgramModal, { ProgramModalProps } from "./ProgramModal";

const program = {
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
};

describe("ProgramModal Component", () => {
  const props: ProgramModalProps = {
    program,
    open: true,
    onClose: jest.fn(),
  };

  it("render the modal correctly", () => {
    render(<ProgramModal {...props} />);

    const title = screen.getByText(/30 Rock/i);
    expect(title).toBeInTheDocument();

    const releaseYear = screen.getByText(/(2006)/i);
    expect(releaseYear).toBeInTheDocument();

    const description = screen.getByText(/(Lorem ipsum dolor sit amet)/i);
    expect(description).toBeInTheDocument();

    const closeButton = screen.getByText(/close/i);
    fireEvent.click(closeButton);

    expect(props.onClose).toHaveBeenCalled();
  });
});
