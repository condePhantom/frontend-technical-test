import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProgramPaginator from "./ProgramPaginator";
import { ProgramPaginatorProps } from "../../../types/types";

describe("ProgramPaginator Component", () => {
  const props: ProgramPaginatorProps = {
    programsPerPage: 10,
    handleProgramsPerPageChange: jest.fn(),
    currentPage: 1,
    handlePageChange: jest.fn(),
    count: 5,
  };
  it("renders the component correctly", () => {
    render(<ProgramPaginator {...props} />);

    const select = screen.getByRole("combobox");
    expect(select).toHaveTextContent("10");

    fireEvent.mouseDown(select);
    const menuItems = screen.getAllByRole("option");
    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toHaveTextContent("5");
    expect(menuItems[1]).toHaveTextContent("10");
    expect(menuItems[2]).toHaveTextContent("20");

    fireEvent.click(menuItems[0]); // Select the first option

    expect(props.handleProgramsPerPageChange).toHaveBeenCalled();
  });
});
