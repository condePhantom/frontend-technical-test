import React from "react";
import { render, screen } from "@testing-library/react";
import TitleHeader, { TitleHeaderProps } from "./TitleHeader";

describe("TitleHeader Component", () => {
  const props: TitleHeaderProps = {
    title: "Test title",
  };

  it("renders the AppBar component from MUI", () => {
    render(<TitleHeader {...props} />);

    const appbar = screen.getByRole("banner");
    expect(appbar).toBeInTheDocument();

    const title = screen.getByText(/Test title/i);
    expect(title).toBeInTheDocument();
  });
});
