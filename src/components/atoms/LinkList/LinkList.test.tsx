import React from "react";
import { render, screen } from "@testing-library/react";
import LinkList, { LinkListProps } from "./LinkList";

describe("Linklist component", () => {
  const props: LinkListProps = {
    items: [
      { title: "Home", url: "/" },
      { title: "Terms and Conditions", url: "/terms" },
      { title: "Help", url: "/help" },
    ],
  };

  it("renders the component with all links", () => {
    render(<LinkList {...props} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("renders all links with the correct href and text", () => {
    render(<LinkList {...props} />);

    props.items.forEach((item) => {
      const link = screen.getByText(item.title) as HTMLAnchorElement;
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", item.url);
    });
  });
});
