import React from "react";
import { render, screen } from "@testing-library/react";
import IconsStack, { IconsStackProps } from "./IconsStack";

describe("IconsStack Component", () => {
  const props: IconsStackProps = {
    imagesSrc: ["image-1.jpg", "image-2.jpg", "image-3.jpg"],
    height: "30px",
    width: "30px",
  };

  it("renders the component with all images", () => {
    render(<IconsStack {...props} />);

    const allImages = screen.getAllByRole("img");
    expect(allImages).toHaveLength(3);

    props.imagesSrc.forEach((src, index) => {
      const image = screen.getByAltText("img-" + index) as HTMLImageElement;
      expect(image).toHaveAttribute("src", src);
      expect(image.style.width).toBe("30px");
      expect(image.style.height).toBe("30px");
    });
  });
});
