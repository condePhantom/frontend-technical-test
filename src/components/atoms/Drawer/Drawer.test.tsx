import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Drawer from "./Drawer";

describe("Drawer Component", () => {
  const handleDrawer = jest.fn();

  it("renders the component correctly", () => {
    render(
      <MemoryRouter>
        <Drawer handleDrawer={handleDrawer} />
      </MemoryRouter>
    );

    const title = screen.getByText(/DEMO Streaming/i);
    expect(title).toBeInTheDocument();

    const login = screen.getByText(/Log in/i);
    expect(login).toBeInTheDocument();

    const trial = screen.getByText(/Start your free trial/i);
    expect(trial).toBeInTheDocument();
  });
});
