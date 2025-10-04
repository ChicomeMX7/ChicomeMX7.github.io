import { styled } from "@stitches/react";

export const Frame = styled("div", {
  backgroundColor: "lightgrey",
  display: "grid",
  position: "relative",
  margin: "26px 0",
  border: "1px solid pink",
  placeItems: "center",
  width: "100%",
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRowStart: 2,
  gridRowEnd: 3,
});
