import React from "react";
import { render, screen } from "@testing-library/react";
import Loader, { LoaderProps } from "./Loader";

describe("Loader Component", () => {
  const props: LoaderProps = {
    message: "Loading...",
  };

  it("renders the CircularProgress component from MUI", () => {
    render(<Loader {...props} />);

    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();

    const message = screen.getByText(/Loading.../i);
    expect(message).toBeInTheDocument();
  });
});
