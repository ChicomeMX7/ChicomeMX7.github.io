import { styled } from "@stitches/react";

export const Layout = styled("div", {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  display: "grid",
  border: "3px solid #ca1d1dff",
  gap: "20px",
  gridTemplateAreas: `
    "f"
    "f"
    "fff"
    `,
});
