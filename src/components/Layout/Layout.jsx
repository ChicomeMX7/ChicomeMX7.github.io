import { styled } from "@stitches/react";

export const Layout = styled("div", {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "grid",
  gap: "20px",
  gridTemplateRows: "1fr 3fr 1fr",
  gridTemplateAreas: `
    "..."
    "."
    "..."
    `,
});
