import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the footer correctly", () => {
    render(<Footer />);
    const copyright = screen.getByText(
      /Copyright © 2016 DEMO Streaming. All Rights Reserved./i
    );
    expect(copyright).toBeInTheDocument();

    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument();
    const terms = screen.getByText(/Terms and Conditions/i);
    expect(terms).toBeInTheDocument();
    const privacy = screen.getByText(/Privacy Policy/i);
    expect(privacy).toBeInTheDocument();
    const collection = screen.getByText(/Collection Statement/i);
    expect(collection).toBeInTheDocument();
    const help = screen.getByText(/Help/i);
    expect(help).toBeInTheDocument();
    const account = screen.getByText(/Manage Account/i);
    expect(account).toBeInTheDocument();

    const allImages = screen.getAllByRole("img");
    expect(allImages).toHaveLength(6);
  });
});
