import { styled } from "@stitches/react";

export const Frame = styled("div", {
  backgroundColor: "#6d6d6dff",
  placeItems: "center",
  width: "360px",
  height: "220px",
  borderRadius: "1mm",
  position: "relative",
  overflow: "hidden",
  margin: "0 !important",
  padding: "0 !important",

  display: "grid",
  gridColumnStart: 2,
  justifySelf: "center",
  alignSelf: "center",
});

export const Screen = styled("div", {
  backgroundColor: "#f88f3ebe",
  display: "grid",
  placeItems: "center",
  width: "100%",
  height: "100%",
  borderRadius: "1mm",
});

export const RecorderCanvas = styled("canvas", {
  position: "absolute",
  display: "block",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: 1,
  borderRadius: "1mm",
});
